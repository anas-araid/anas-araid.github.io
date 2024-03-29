import Link from 'next/link';
import { useThemeContext } from '../hooks/useThemeContext';
import { concatClassNames } from '../utils/tailwind';

export default function Custom404(): JSX.Element {
  const { isDark } = useThemeContext();

  return (
    <div className='flex ' style={{ height: '60vh' }}>
      <div className='flex-col m-auto'>
        <div className='w-full mb-6'>
          <img src='/assets/404.gif' className='h-36 m-auto' />
        </div>
        <div className='flex flex-row m-auto'>
          <div className={concatClassNames('border-r-2 mr-5 pr-5 my-auto', isDark ? 'border-white' : 'border-black')}>
            <h1 className='font-normal text-4xl inline'>404</h1>
          </div>
          <div className='m-auto'>
            <h1 className='text-lg'>Where&apos;s the page, Vincent?</h1>
            <Link href='/' className='text-sm underline'>
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
