import React from 'react';
import type { NextPage } from 'next';
import { Bio } from '../containers/Bio';
import { PageWrapper } from '../containers/PageWrapper';
import { useAppSelector } from '../hooks/useAppSelector';
import { RootState } from '../store';

const About: NextPage = () => {
  const isAboutPageActive = useAppSelector((state: RootState) => state.featureFlags.isAboutPageActive);

  return (
    <PageWrapper isActive={isAboutPageActive}>
      <Bio />
    </PageWrapper>
  );
};

export default About;
