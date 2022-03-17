import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../store';

interface IPageWrapper {
  isActive: boolean;
  children: JSX.Element;
}

const PageWrapper: FunctionComponent<IPageWrapper> = ({ children, isActive }): JSX.Element => {
  const router = useRouter();
  const isLoading = useAppSelector((state: RootState) => state.featureFlags.isLoading);

  if (!isActive && !isLoading) {
    router.push('/404');
  }

  if (isActive && !isLoading) {
    return children;
  }

  return (
    <div className='flex m-auto h-full w-full'>
      <img src='/assets/loading.svg' className='m-auto h-52' alt='loading' />
    </div>
  );
};

export default PageWrapper;
