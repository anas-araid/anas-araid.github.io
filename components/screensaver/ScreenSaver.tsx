import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React, { useEffect, useState } from 'react';

const ScreenSaver: React.FC = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [time, setTime] = useState({ hours: dayjs().tz().format('HH'), minutes: dayjs().tz().format('mm') });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({ hours: dayjs().tz().format('HH'), minutes: dayjs().tz().format('mm') });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='flex m-auto h-screen w-full'>
      <h1 className='text-9xl font-thin m-auto'>{`${time.hours} ${time.minutes}`}</h1>
    </div>
  );
};

export default ScreenSaver;
