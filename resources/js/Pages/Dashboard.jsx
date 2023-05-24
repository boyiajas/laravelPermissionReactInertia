import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useContext } from 'react';
import ThemeContext from '@/Components/ThemeContext';

export default function Dashboard(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className={`font-semibold text-xl text-gray-800 leading-tight ${theme === 'dark' ? 'dark:text-gray-200' : ''}`}>Dashboard</h2>
      }
    >
      <Head title="Dashboard" />

      <div className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className={`overflow-hidden shadow sm:rounded-lg ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'}`}>
            <div className={`p-6 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
              You're logged in!
            </div>
           
            <div className={`p-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Current Theme: <strong>{theme}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}