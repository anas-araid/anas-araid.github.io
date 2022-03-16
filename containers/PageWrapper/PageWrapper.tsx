import React, { FunctionComponent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface IPageWrapper {
  flag: () => Promise<boolean>;
  children: JSX.Element;
}

const PageWrapper: FunctionComponent<IPageWrapper> = ({ children, flag: activationFunction }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [isPageActive, setIsPageActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function isVisible() {
      setIsPageActive(await activationFunction());
      setLoading(false);
    }
    isVisible();
  });

  if (isPageActive && !loading) {
    return children;
  }

  if (!isPageActive && !loading) {
    router.push('/404');
  }

  return (
    <div className='flex m-auto h-full w-full'>
      <img src='/assets/loading.svg' className='m-auto h-52' alt='loading' />
    </div>
  );
};

export default PageWrapper;
