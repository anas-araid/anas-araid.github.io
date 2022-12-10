import type { NextPage } from 'next';
import React from 'react';
import { Contacts } from '../features/contacts';
import { FeatureFlag } from '../features/featureFlag';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../store';

const Links: NextPage = () => {
  const isLinkPageActive = useAppSelector((state: RootState) => state.featureFlags.isLinkPageActive);

  return (
    <FeatureFlag isActive={isLinkPageActive}>
      <Contacts />
    </FeatureFlag>
  );
};

export default Links;
