import React from 'react';
import type { NextPage } from 'next';
import { Bio } from '../containers/Bio';
import { isAboutPageActive } from '../api/featureFlag';
import { PageWrapper } from '../containers/PageWrapper';

const About: NextPage = () => (
  <PageWrapper flag={isAboutPageActive}>
    <Bio />
  </PageWrapper>
);

export default About;
