import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useCmdk } from '../../contexts/cmdk-context';
import { useThemeContext } from '../../hooks/useThemeContext';
import { KBarButton } from '../kbar/kbar-button';

const Navbar: FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const { setOpen } = useCmdk();
  const { isDark, setDarkMode } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bgClass = scrolled
    ? isDark ? 'backdrop-blur-md bg-black/80' : 'backdrop-blur-md bg-white/80'
    : 'bg-inherit';

  return (
    <div className={`${bgClass} transition-all duration-300 sticky top-0 w-full z-50`}>
      <div className='flex justify-center px-5'>
        <div className='max-w-2xl w-full flex pt-10 pb-10'>
          <div className='flex w-1/2 justify-start'>
            <div onClick={() => setOpen((o) => !o)}>
              <KBarButton isDarkMode={isDark} />
            </div>
          </div>
          <div className='flex w-1/2 justify-end m-auto'>
            {!isMobile && (
              <span className='flex items-center gap-6 mr-6'>
                <Link href='/' className={router.pathname === '/' ? 'opacity-60' : ''}>
                  Home
                </Link>
                <Link href='/about' className={router.pathname === '/about' ? 'opacity-60' : ''}>
                  About
                </Link>
                <Link href='/lab' className={router.pathname === '/lab' ? 'opacity-60' : ''}>
                  Lab
                </Link>
              </span>
            )}
            <div onClick={() => setDarkMode(!isDark)}>
              <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
