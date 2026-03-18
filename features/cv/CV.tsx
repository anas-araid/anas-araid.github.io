import { useTrackLink } from '../../hooks/useTrackLink';
import { TWITTER_URL, GITHUB_URL, LINKEDIN_URL } from '../../constants';

const SectionLabel = ({ children }: { children: string }) => (
  <p className='text-xs font-medium text-zinc-400 uppercase tracking-widest mt-16 mb-5'>{children}</p>
);

const CV = (): JSX.Element => {
  const openLink = useTrackLink();

  return (
    <div className='mt-20 mb-32'>
      <h1 className='text-2xl font-medium'>Anas Araid</h1>
      <p className='text-sm mt-2 text-zinc-400 font-normal'>UI Engineer, Design Systems · Belka</p>

      <SectionLabel>Experience</SectionLabel>

      <div className='space-y-2'>
        {[
          { name: 'Belka', date: '2021 – Now' },
          { name: 'Fondazione Bruno Kessler', date: '2017' },
          { name: 'I&S Informatica e Servizi', date: '2017' },
        ].map(({ name, date }) => (
          <div key={name} className='flex justify-between items-baseline'>
            <span className='font-medium'>{name}</span>
            <span className='text-zinc-400 text-sm tabular-nums ml-4 shrink-0'>{date}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Selected Work</SectionLabel>

      <div className='space-y-3'>
        <div>
          <div className='flex justify-between items-baseline'>
            <span className='font-medium'>Segugio.it</span>
            <span className='text-zinc-400 text-sm ml-4'>Design Systems</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Design system and insurance and loans vertical redesign</p>
        </div>
        <div>
          <div className='flex justify-between items-baseline'>
            <span className='font-medium'>Spiagge.it</span>
            <span className='text-zinc-400 text-sm ml-4'>Mobile App</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Built with react-native · 105k MAUs and 4.6★ on App Store after relaunch</p>
        </div>
        <div>
          <div className='flex justify-between items-baseline'>
            <span className='font-medium'>Fatture in Cloud</span>
            <span className='text-zinc-400 text-sm ml-4'>Design System</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>FiC Design system and Dipendenti in Cloud app</p>
        </div>
        <div>
          <div className='flex justify-between items-baseline'>
            <a
              onClick={() => openLink('https://expo.dev/blog/how-belka-built-mangayo-app-in-just-3-months-with-expo')}
              className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
            >
              Mangayo
            </a>
            <span className='text-zinc-400 text-sm ml-4'>Mobile App</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Built with Expo and Supabase in 3 months · 4.4★ on App Store</p>
        </div>
        <div>
          <div className='flex justify-between items-baseline'>
            <span className='font-medium'>Banca Sella</span>
            <span className='text-zinc-400 text-sm ml-4'>Design Systems</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Team training and consultancy</p>
        </div>
        {[
          { client: 'NeN', project: 'Design Systems' },
          { client: 'Soundtrap', project: 'Design System Audit' },
          { client: 'Redokun', project: 'Onboarding Redesign' },
        ].map(({ client, project }) => (
          <div key={client} className='flex justify-between items-baseline'>
            <span className='font-medium'>{client}</span>
            <span className='text-zinc-400 text-sm ml-4'>{project}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Projects</SectionLabel>

      <div className='space-y-4'>
        <div>
          <div className='flex justify-between items-baseline'>
            <a
              onClick={() => openLink('https://supabase.com/blog/github-copilot-extension-for-vs-code')}
              className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
            >
              Supabase VS Code Extension
            </a>
            <span className='text-zinc-400 text-sm tabular-nums ml-4 shrink-0'>2023 – Now</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Won the Supabase hackathon, they adopted it as the official extension · 90k+ installs</p>
        </div>
        <div>
          <div className='flex justify-between items-baseline'>
            <a
              onClick={() => openLink(GITHUB_URL)}
              className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
            >
              vscode-infinite-workspace
            </a>
            <span className='text-zinc-400 text-sm ml-4 shrink-0'>269★</span>
          </div>
          <p className='text-sm text-zinc-400 mt-0.5'>Figma-like infinite canvas for VS Code</p>
        </div>
      </div>

      <SectionLabel>Speaking</SectionLabel>

      <div className='space-y-4'>
        <div>
          <span className='font-medium'>React Native Heroes</span>
          <span className='text-zinc-400 text-sm ml-2'>Torino</span>
          <p className='text-sm text-zinc-400 mt-0.5'>Design Systems in React Native: A Storybook Approach</p>
        </div>
        <div>
          <span className='font-medium'>Belka Webinar</span>
          <p className='text-sm text-zinc-400 mt-0.5'>Automatizza il tuo handoff: intro ai design token per sviluppatori</p>
        </div>
      </div>

      <SectionLabel>Writing</SectionLabel>

      <div className='space-y-3'>
        <div>
          <a
            onClick={() => openLink('https://belkadigital.com/blog/a-design-system-to-build-design-systems')}
            className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
          >
            A design system to build design systems
          </a>
          <p className='text-sm text-zinc-400 mt-0.5'>Belka Blog</p>
        </div>
        <div>
          <a
            onClick={() => openLink('https://belkadigital.com/blog/how-to-make-your-life-easier-and-your-code-cleaner-by-using-composable-components')}
            className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
          >
            How to make your life easier and your code cleaner using composable components
          </a>
          <p className='text-sm text-zinc-400 mt-0.5'>Belka Blog</p>
        </div>
        <div>
          <a
            onClick={() => openLink('https://expo.dev/blog/how-belka-built-mangayo-app-in-just-3-months-with-expo')}
            className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
          >
            How Belka built Mangayo in just 3 months with Expo
          </a>
          <p className='text-sm text-zinc-400 mt-0.5'>Expo Blog · featured</p>
        </div>
        <div>
          <a
            onClick={() => openLink('https://supabase.com/blog/github-copilot-extension-for-vs-code')}
            className='cursor-pointer font-medium hover:opacity-60 transition-opacity duration-200'
          >
            Official Supabase extension for VS Code and GitHub Copilot
          </a>
          <p className='text-sm text-zinc-400 mt-0.5'>Supabase Blog · featured</p>
        </div>
      </div>

      <SectionLabel>Education</SectionLabel>

      <div className='space-y-2'>
        <div className='flex justify-between items-baseline'>
          <div>
            <span className='font-medium'>Università di Trento</span>
            <span className='text-zinc-400 text-sm ml-2'>Human Computer Interaction</span>
          </div>
          <span className='text-zinc-400 text-sm tabular-nums ml-4 shrink-0'>2018 – 2022</span>
        </div>
        <div className='flex justify-between items-baseline'>
          <div>
            <span className='font-medium'>Marie Curie</span>
            <span className='text-zinc-400 text-sm ml-2'>Computer Science & Robotics</span>
          </div>
          <span className='text-zinc-400 text-sm tabular-nums ml-4 shrink-0'>2013 – 2018</span>
        </div>
      </div>

      <SectionLabel>Volunteering</SectionLabel>

      <div className='flex justify-between items-baseline'>
        <span className='font-medium'>Volunteer Firefighter</span>
        <span className='text-zinc-400 text-sm'>Trento, 2015 – Now</span>
      </div>

      <p className='text-base mt-16 font-normal leading-relaxed'>
        Find me on{' '}
        <a onClick={() => openLink(LINKEDIN_URL)} className='cursor-pointer font-medium'>
          <u>Linkedin</u>
<<<<<<< HEAD
        </a>{' '}
=======
        </a>
>>>>>>> 22e77d362e9a1127032094008fab140d4e715573
        <a onClick={() => openLink(TWITTER_URL)} className='cursor-pointer font-medium'>
          <u>Twitter</u>
        </a>
        {' '}or{' '}
        <a onClick={() => openLink(GITHUB_URL)} className='cursor-pointer font-medium'>
          <u>GitHub</u>
        </a>
        .
      </p>
    </div>
  );
};

export default CV;
