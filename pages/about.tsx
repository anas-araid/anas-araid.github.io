import type { NextPage } from 'next';
import React from 'react';
import { Bio } from '../features/bio';
import { FeatureFlag } from '../features/featureFlag';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../store';

const About: NextPage = () => {
  const isAboutPageActive = useAppSelector((state: RootState) => state.featureFlags.isAboutPageActive);

  return (
    <FeatureFlag isActive={isAboutPageActive}>
      <Bio />
    </FeatureFlag>
  );
};

export default About;
