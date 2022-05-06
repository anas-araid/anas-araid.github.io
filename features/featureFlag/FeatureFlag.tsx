import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { Loading } from '../../components/loading';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../store';

interface IFeatureFlag {
  isActive: boolean;
  children: JSX.Element;
}

const FeatureFlag: FunctionComponent<IFeatureFlag> = ({ children, isActive }): JSX.Element => {
  const router = useRouter();
  const isLoading = useAppSelector((state: RootState) => state.featureFlags.isLoading);

  if (!isActive && !isLoading) {
    router.push('/404');
  }

  if (isActive && !isLoading) {
    return children;
  }

  return <Loading />;
};

export default FeatureFlag;
