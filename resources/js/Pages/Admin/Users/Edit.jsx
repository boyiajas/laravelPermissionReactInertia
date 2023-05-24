import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useEffect } from 'react';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function Index(props) {

    const [roles, setRoles] = useState(props.roles);
    const [user, setUser] = useState(props.user);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [userRoles, setUserRoles] = useState(props.userRoles);
    
    console.log(user);
    //const [selectedPermissions, setSelectedPermissions] = useState([props.rolePermissions]);

    const [permissions, setPermissions] = useState(props.permissions);

    useEffect(() => {
        setUserRoles(props.userRoles.flatMap((role) => role.id));
      }, []);

    function handleSubmit(e) {
        e.preventDefault();

        const updatedUser = { ...user, name: name, email: email };
        //console.log(userRoles);
        //post(route('roles.update', role.id));
        router.post(route('users.update', user.id), {_method: 'PATCH', user: updatedUser, newRoles: userRoles});
    }

    function handleNameInputChange(e) {
        setName(e.target.value);
        //setPermission({...permission, name: e.target.value});
    }
    function handleEmailInputChange(e) {
        setEmail(e.target.value);
    }

    const handleRoleChange = (roleId) => {
        const isChecked = userRoles.includes(roleId);

        if (isChecked) {
            setUserRoles(userRoles.filter((id) => id !== roleId));
        } else {
            setUserRoles([...userRoles, roleId]);
        }
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">User</h2>}
        >
            <Head title="User" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="dark:bg-gray-800 bg-white overflow-hidden shadow sm:rounded-lg">
                        <div className="px-6 flex justify-between items-center">
                            <h2
                            className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-white py-4 block sm:inline-block flex">
                            Update User</h2>
                            <Link href={route('users.index')} className="px-4 py-2 text-white mr-4 bg-blue-600 dark:bg-blue-600 bg-gray-800">
                                Back to all Users
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
                            <form method="POST" onSubmit={handleSubmit} key={user.id}>
                        {/*  @csrf
                            @method('PATCH') */}
                            <div className="py-2">
                                <label for="name"
                                className="block font-medium text-sm text-gray-700 dark:text-white {{$errors->has('name') ? ' text-red-400' : ''}}">Name</label>
                                
                               { 
                                <>
                                    <TextInput
                                        id="name"
                                        className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full"{$errors->has('name') ? ' border-red-400' : ''}`}
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={handleNameInputChange}
                                    
                                    /> 
                                    <TextInput
                                        id="email"
                                        className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full" {$errors.has('email') ? 'border-red-400' : ''
                                        }`}
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailInputChange}
                                    />
                                </>
                                }
                                {/* <input id="name"
                                className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full{{$errors->has('name') ? ' border-red-400' : ''}}"
                                type="text" name="name" value={name} onChange={(e) => handleInputChange(e)}/> */}
                            </div>
                            <div className="py-2">
                                <label
                                    htmlFor="roles"
                                    className="block font-medium text-sm text-gray-700 dark:text-white"
                                >
                                    Roles
                                </label>
                                {roles.map(role => (
                                    <div key={role.id} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={`role_${role.id}`}
                                        name={`role_${role.id}`}
                                        className="mr-2"
                                        checked={userRoles.includes(role.id)}
                                        onChange={() => handleRoleChange(role.id)}
                                    />
                                    <label
                                       
                                        className="text-sm text-gray-700 dark:text-white"
                                    >
                                        {role.name}
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
