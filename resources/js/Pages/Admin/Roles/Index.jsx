import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useContext } from 'react';
import { Head, Link } from '@inertiajs/react';
import Can from '@/Components/Can';
import ThemeContext from '@/Components/ThemeContext';

export default function Index(props) {

    const [roles, setRoles] = useState(props.roles.data);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleDelete = (roleId) => {
        if (confirm('Are you sure you want to delete this role?')) {
           axios.delete(route('roles.destroy', roleId))
           .then(response => {
               // Handle successful deletion
               console.log('Roles deleted successfully');
                // Refetch the updated permissions list from the server
                setRoles(roles.filter(role => role.id !== roleId));
               //router.get(route('roles.index'));
           })
           .catch(error => {
               // Handle error
               console.error('Failed to delete role:', error);
               // Handle error feedback to the user
           });
       } 
   };
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className={`font-semibold text-xl text-gray-800 leading-tight ${theme === 'dark' ? 'dark:text-gray-200' : ''}`}>Roles</h2>}
        >
            <Head title="Roles" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className={`overflow-hidden shadow sm:rounded-lg ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className="flex flex-col mt-8">
                                <Can auth={props.auth} permissions={['role create']} 
                                    yes={
                                        <div className="d-print-none with-border">
                                            <Link href={route('roles.create')} className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ml-3">
                                                Add Role
                                            </Link>
                                        </div>
                                        } 
                                    />
                               
                                <div className="py-2">
                                   {/*  @if(session()->has('message'))
                                    <div className="mb-8 text-green-400 font-bold">
                                    {{ session()->get('message') }}
                                    </div>
                                    @endif */}
                                    <div className="dark:bg-gray-800 min-w-full border-b border-gray-200 shadow">
                                        <table className={`border-collapse table-auto w-full text-sm ${theme === 'dark' ? 'dark:bg-gray-800' : ''}`}>
                                            <thead>
                                            <tr className= {`${theme === 'dark' ? '' : 'bg-gray-100'}`}>
                                                <th
                                                className={`py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left ${theme === 'dark' ? 'dark:text-white' : 'dark:text-gray-800'}`}>
                                                    Name
                                                </th>
                                            
                                                <Can auth={props.auth} permissions={['role edit', 'role delete']} 
                                                    yes={
                                                        <th
                                                        className={`py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-left ${theme === 'dark' ? 'dark:text-white' : 'dark:text-gray-800'}`}>
                                                            Actions
                                                        </th>
                                                    } 
                                                />
                                            </tr>
                                            </thead>
                                            <tbody className={`${theme === 'dark' ? 'dark:bg-slate-800 dark:bg-gray-800' : 'bg-white'}`}>
                                                {
                                                    roles.map(role => (
                                                    <tr key={role.id}>
                                                        <td className={`border-b border-slate-100  p-4 pl-8 text-slate-500 ${theme === 'dark' ? 'dark:text-slate-400 dark:border-slate-700' : 'dark:border-slate-200'}`}>
                                                        <div className="text-sm text-gray-900">
                                                            <Link href={route('roles.create')} className={`no-underline hover:underline text-cyan-600 ${theme === 'dark' ? 'dark:text-white' : ' '}`}>
                                                                {role.name}
                                                            </Link>
                                                        </div>
                                                        </td>

                                                        <Can auth={props.auth} permissions={['role edit', 'role delete']} 
                                                            yes={
                                                                <td
                                                                className={`border-b border-slate-100  p-4 pl-8 text-slate-500 ${theme === 'dark' ? 'dark:text-slate-400 dark:border-slate-700' : 'dark:border-slate-200'}`}>
                                                                <form action="{{ route('roles.destroy', $permission->id) }}" method="POST">
                                                                  
                                                                    <Link href={route('roles.edit', role.id)} className="px-4 py-2 text-white dark:bg-blue-600 bg-gray-800">
                                                                        Edit
                                                                    </Link>
                                                                    &nbsp;

                                                                    <button  type="button" onClick={() => handleDelete(role.id)} className="px-4 py-2 text-white bg-red-600">
                                                                         Delete
                                                                    </button>
                                                                   
                                                                </form>
                                                            </td>
                                                            } 
                                                        />
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    
                                        {/*  <div className="py-8 dark:text-white">
                                            {{ $permissions->links() }}
                                            </div> */}
                                    </div> 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


            