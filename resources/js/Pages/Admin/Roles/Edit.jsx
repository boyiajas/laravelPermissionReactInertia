import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function Index(props) {

    const [role, setRole] = useState(props.role);
    const [name, setName] = useState(role.name);
    const [selectedPermissions, setSelectedPermissions] = useState([props.rolePermissions]);

    const [permissions, setPermissions] = useState(props.permissions);

    useEffect(() => {
        setSelectedPermissions(props.rolePermissions.flatMap((permission) => permission.id));
      }, []);

    function handleSubmit(e) {
        e.preventDefault();
        //console.log(selectedPermissions);
        //post(route('roles.update', role.id));
        router.post(route('roles.update', role.id), {_method: 'PATCH', name: name, newPermissions: selectedPermissions});
    }

    function handleRoleInputChange(e) {
        
        setName(e.target.value);
        //setPermission({...permission, name: e.target.value});
    }

    const handlePermissionChange = (permissionId) => {
        const isChecked = selectedPermissions.includes(permissionId);

        if (isChecked) {
            setSelectedPermissions(selectedPermissions.filter((id) => id !== permissionId));
        } else {
            setSelectedPermissions([...selectedPermissions, permissionId]);
        }
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Role</h2>}
        >
            <Head title="Role" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="dark:bg-gray-800 bg-white overflow-hidden shadow sm:rounded-lg">
                        <div className="px-6 flex justify-between items-center">
                            <h2
                            className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-white py-4 block sm:inline-block flex">
                            Update Roles</h2>
                            <Link href={route('roles.index')} className="px-4 py-2 text-white mr-4 bg-blue-600 dark:bg-blue-600 bg-gray-800">
                                Back to all Roles
                            </Link>

                            {/* @if ($errors->any())
                            <ul className="mt-3 list-none list-inside text-sm text-red-400">
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                            </ul>
                            @endif */}
                        </div>
                        <div className="dark:bg-gray-800 w-full px-6 py-4 bg-white overflow-hidden">
                            <form method="POST" onSubmit={handleSubmit} key={role.id}>
                        {/*  @csrf
                            @method('PATCH') */}
                            <div className="py-2">
                                <label for="name"
                                className="block font-medium text-sm text-gray-700 dark:text-white {{$errors->has('name') ? ' text-red-400' : ''}}">Name</label>
                                
                               {  <TextInput
                                  id="name"
                                  className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full"{$errors->has('name') ? ' border-red-400' : ''}`}
                                  type="text"
                                  name="name"
                                  value={name}
                                  onChange={handleRoleInputChange}
                                  
                                /> }
                                {/* <input id="name"
                                className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full{{$errors->has('name') ? ' border-red-400' : ''}}"
                                type="text" name="name" value={name} onChange={(e) => handleInputChange(e)}/> */}
                            </div>
                            <div className="py-2">
                                <label
                                    htmlFor="permissions"
                                    className="block font-medium text-sm text-gray-700 dark:text-white"
                                >
                                    Permissions
                                </label>
                                {permissions.map(permission => (
                                    <div key={permission.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`permission_${permission.id}`}
                                        name={`permission_${permission.id}`}
                                        className="mr-2"
                                        checked={selectedPermissions.includes(permission.id)}
                                        onChange={() => handlePermissionChange(permission.id)}
                                    />
                                    <label
                                        htmlFor={`permission_${permission.id}`}
                                        className="text-sm text-gray-700 dark:text-white"
                                    >
                                        {permission.name}
                                    </label>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end mt-4">
                                <button type='submit'
                                className='inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 dark:text-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150'>
                                Update
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
