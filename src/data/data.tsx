import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'I\'m Jeremiah Hsing',
  description: "This is a personal page about Jeremiah Hsing.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jeremiah Hsing.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Canberra based <strong className="text-stone-100">Advanced Computing Undergraduate Student</strong>, currently in my honors year
        at <strong className="text-stone-100">ANU</strong> 
      </p>
      {/* helping build a modern, mobile-first, domain registrar and site builder. */}
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">tennis</strong>,
        chilling on <strong className="text-stone-100">billiards</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Ngunnawal and Ngambri</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an Aus-based undergraduate student,
          coder, and knowledge seeker dedicated to learning,
          building, and evangelizing technologies, systems, 
          and movements that generate hyperlocal resilience,
          self-sustainability, and dynamism.`,
  aboutItems: [
    {label: 'Location', text: 'Canberra, AU', Icon: MapIcon},
    {label: 'Age', text: `${new Date().getFullYear() - 2002}`, Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Pooling, Tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'Australian National University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to work', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Tailwind',
        level: 6,
      },
    ],
  },
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 2,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Australian National University',
    title: 'Bachelor of Advanced Computing (Honors)',
    content: <p>
      Specialized in system and architecture, with a focus on web developing.
      </p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>
      Lorem ipsum dolor sit amet. Aut modi eaque non ipsam consectetur nam minima 
      labore est porro totam est atque repellat. Est iste dolorem et Quis galisum est
      repudiandae aspernatur aut doloribus ipsam ut distinctio tempora At molestias 
      laboriosam id voluptatem quia. Est sunt sequi cum corrupti sunt et nesciunt molestiae 
      et officiis dolore!
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2022 - Present',
    location: 'Awesome Development Company',
    title: 'Senior Software Engineer',
    content: (
      <p>
        In sapiente modi vel quasi autem eos consectetur laboriosam! 
        Est atque dolorem ut praesentium doloribus et facere facere non consequatur 
        consequatur.
      </p>
    ),
  },
  {
    date: 'March 2012 - February 2022',
    location: 'Garage Startup Studio',
    title: 'Junior Bug Maker',
    content: (
      <p>
        Et vitae quasi aut dicta voluptas a alias neque aut saepe aliquam. 
        Sed aspernatur unde et dolores enim et exercitationem repellendus ut iste 
        nulla qui expedita aliquid vel magni alias At repellat illo. 
        Est officiis illo id nostrum iste non autem enim.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Share any details about your ideas, or any other information you would like to share with potential clients/employees/partners/friends.',
  items: [
    {
      type: ContactType.Email,
      text: 'jeremiah.hsing@gmail.com',
      href: 'mailto:jeremiah.hsing@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Canberra ACT, Australia',
      href: 'https://www.google.com/maps/place/Canberra+ACT+2601/@-35.2842178,149.1191194,15.23z',
    },
    {
      type: ContactType.Instagram,
      text: '@jez_hsing',
      href: 'https://www.instagram.com/jez_hsing/',
    },
    {
      type: ContactType.Github,
      text: 'Jeremiah Hsing',
      href: 'https://github.com/JeremiahXing',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/JeremiahXing'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jeremiahhsing/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jez_hsing/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jez_hsing'},
];
