import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => (
  <div className='mt-20'>
    <h1 className='text-5xl font-bold'>Anas Araid</h1>
    <h3 className='text-xl mt-12 mb-8'>
      Frontend developer, <span className='line-through'>designer</span> and firefighter based in{' '}
      <a
        onClick={() => window.open('https://goo.gl/maps/6fnYAANFEEsi1Mce7', '_blank')}
        className='cursor-pointer font-bold text-gradient bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600'
      >
        <b>Trento</b>
      </a>
      .
    </h3>
    <h3 className='text-xl'>
      Currently working at{' '}
      <a
        onClick={() => window.open('https://belkadigital.com', '_blank')}
        className='cursor-pointer font-bold text-gradient bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500'
      >
        <b>Belka</b>
      </a>
      .
    </h3>
  </div>
);

export default Home;
