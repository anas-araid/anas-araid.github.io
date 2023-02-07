import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { useTrackLink } from '../../hooks/useTrackLink';
import { concatClassNames } from '../../utils/tailwind';
import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Twitter as TwitterIcon } from '@styled-icons/feather/Twitter'
import { Linkedin as LinkedinIcon } from '@styled-icons/feather/Linkedin'
import { Instagram as InstagramIcon } from '@styled-icons/feather/Instagram'
import { Mail as MailIcon } from '@styled-icons/feather/Mail'
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from '../../constants';

interface ILink{
  text: string;
  url: string;
  icon: JSX.Element;
}

const Contacts: FunctionComponent = () => {
  const { isDark } = useThemeContext();
  const openLink = useTrackLink();

  // TODO: store links in airtable
  const links: ILink[] = [
    {
      text: 'Github',
      url: GITHUB_URL,
      icon: <GithubIcon size={19} />,
    },
    {
      text: 'Twitter',
      url: TWITTER_URL,
      icon: <TwitterIcon size={19} />,
    },
    {
      text: 'Linkedin',
      url: LINKEDIN_URL,
      icon: <LinkedinIcon size={19} />,
    },
    {
      text: 'Instagram',
      url: INSTAGRAM_URL,
      icon: <InstagramIcon size={19} />,
    },
    {
      text: 'Email',
      url: `mailto:${EMAIL}`,
      icon: <MailIcon size={19} />,
    }
  ];

  const handleLinkClick = (url: string) => {
    openLink(url);
  }

  return (
    <div className='mt-20'>
      <ul className='flex flex-col justify-center items-center'>
        {
          links.map( (link, i) => (
            <li 
              key={i} 
              onClick={() => handleLinkClick(link.url)} 
              className={concatClassNames('flex justify-left w-full py-6 rounded-xl cursor-pointer hover:bg-opacity-5 duration-300 transition-colors', isDark ? 'hover:bg-white' : 'hover:bg-black')}
            >
              <span className='mx-4'>{link.icon}</span>
              <span className='text-xl'>{link.text}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Contacts;
