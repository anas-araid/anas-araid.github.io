import React from 'react';
import type { NextPage } from 'next';
import { DocumentHead } from '../components/DocumentHead';
import { Navbar } from '../components/Navbar';
import { Home } from '../containers/Home';

const Index: NextPage = () => (
  <div className='h-screen bg-black text-white'>
    <DocumentHead />
    <div className='flex justify-center px-5'>
      <div className='max-w-2xl w-full'>
        <Navbar />
        <Home />
      </div>
    </div>
  </div>
);

export default Index;
