import { useMemo, useContext } from 'react';
import { Link } from '@inertiajs/react';
import ThemeContext from '@/Components/ThemeContext';

function Pagination({ links }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const renderedLinks = useMemo(() => {
    return links.map((link, p) => {
      if (link.url === null) {
        return (
          <div
            key={p}
            className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        );
      } else {
        return (
           <Link
           href={link.url}
           className={`mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white ${theme === 'dark' ? '' : 'border-gray-400 text-indigo-300'} ${
             link.active ? 'bg-blue-700 text-white' : ''
           } ${p === links.length - 1 ? 'ml-auto' : ''}`}
           dangerouslySetInnerHTML={{ __html: link.label }}
         ></Link>
        );
      }
    });
  }, [links]);

  return <div className={`py-4 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-gray-100'}`}>{links.length > 3 && <div className="flex flex-wrap -mb-1">{renderedLinks}</div>}</div>;
}

export default Pagination;