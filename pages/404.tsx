import Link from 'next/link';
import { useThemeContext } from '../hooks/useThemeContext';
import { concatClassNames } from '../utils';

export default function Custom404(): JSX.Element {
  const { isDark, theme } = useThemeContext();
  console.log(isDark);

  return (
    <div className={concatClassNames('flex transition-all h-screen duration-300', theme.backgroundColor, theme.textColor)}>
      <div className='flex flex-row m-auto'>
        <div className={concatClassNames('border-r-2 mr-5 pr-5 my-auto', isDark ? 'border-white' : 'border-black')}>
          <h1 className='font-medium text-4xl'>404</h1>
        </div>
        <div className='m-auto'>
          <h1 className='text-xl'>Where&apos;s the page, Lebowski?</h1>
          <Link href='/'>
            <a className='text-sm underline'>Go back home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
