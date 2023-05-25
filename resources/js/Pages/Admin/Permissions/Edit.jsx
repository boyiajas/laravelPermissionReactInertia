import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useContext } from 'react';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ThemeContext from '@/Components/ThemeContext';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Index(props) {

    const [userPermission, setUserPermission] = useState(props.permission);
    const [name, setName] = useState(userPermission.name);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const { data, setData, patch, post, processing } = useForm({
        _method: 'PATCH',
        name: name,
    });

    function handleSubmit(e) {
        e.preventDefault();

        post(route('permissions.update', userPermission.id ));
    }

    function handleInputChange(e) {
        
        setData(e.target.name, e.target.value);     
        //setUserPermission({...userPermission, name: e.target.value});
        
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className={`font-semibold text-xl text-gray-800 leading-tight ${theme === 'dark' ? 'dark:text-gray-200' : ''}`}>Permissions</h2>}
        >
            <Head title="Permissions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={`overflow-hidden shadow sm:rounded-lg ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
                        <div className="px-6 flex justify-between items-center">
                            <h2
                            className={`inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight  py-4 block sm:inline-block flex ${theme === 'dark' ? 'dark:text-white' : ''}`}>
                            Update permission</h2>
                            <Link href={route('permissions.index')} className="px-4 py-2 text-white mr-4 bg-blue-600 dark:bg-blue-600 bg-gray-800">
                                Back to all permission
                            </Link>

                            {/* @if ($errors->any())
                            <ul className="mt-3 list-none list-inside text-sm text-red-400">
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                            </ul>
                            @endif */}
                        </div>
                        <div className={`w-full px-6 py-4 bg-white overflow-hidden ${theme === 'dark' ? 'dark:bg-gray-800' : ''}`}>
                            <form onSubmit={handleSubmit} key={userPermission.id}>
                        {/*  @csrf
                            @method('PATCH') */}
                            <div className="py-2">
                                <label htmlFor="name"
                                className={`block font-medium text-sm text-gray-700 ${theme === 'dark' ? 'dark:text-white' : ''}  {{$errors->has('name') ? ' text-red-400' : ''}}`}>Name</label>
                                
                               {  <TextInput
                                  id="name"
                                  className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full"{$errors->has('name') ? ' border-red-400' : ''}`}
                                  type="text"
                                  name="name"
                                  value={data.name}
                                  onChange={handleInputChange}
                                  
                                /> }
                                {/* <input id="name"
                                className="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block mt-1 w-full{{$errors->has('name') ? ' border-red-400' : ''}}"
                                type="text" name="name" value={name} onChange={(e) => handleInputChange(e)}/> */}
                            </div>
                            <div className="flex justify-end mt-4">
                               
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Update
                                </PrimaryButton>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
