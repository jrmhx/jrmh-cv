import {
  // AcademicCapIcon,
  // CalendarIcon,
  // DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  // SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
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
  title: 'I\'m Jeremiah Xing',
  description: "This is a personal page about Jeremiah Xing.",
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
  name: `I'm Jeremiah Xing.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Canberra based Software Enginee.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Request a Resume',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `👨‍🎓 Bachelor of Advanced Computing (Hons) at ANU, graduate in June 2024 \n
                🧑‍💻 Casual Software Engineer @ ANU \n
                ♨️  Always down to build scalable, efficient, and secure applications. \n
                💭 Love to share knowledge and contribute to the tech community's growth.`,
  aboutItems: [
    {label: 'Location', text: 'Canberra, AU', Icon: MapIcon},
    // {label: 'Age', text: `${new Date().getFullYear() - 2002}`, Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Pooling, Tennis', Icon: SparklesIcon},
    // {label: 'Study', text: 'Australian National University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to work', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend',
    skills: [
      {
        name: 'Java',
        level: 9.5,
      },
      {
        name: 'C/C++',
        level: 7.5,
      },
      {
        name: 'Golang',
        level: 7.5,
      },
      {
        name: 'Node.js',
        level: 8.3,
      },
      {
        name: 'Python',
        level: 9.2,
      },
      {
        name: 'Shell',
        level: 8.5,
      },
      {
        name: 'Spring Boot',
        level: 8.8,
      },
      {
        name: 'Spring Cloud',
        level: 8.5,
      },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 7.9,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 9.3,
      },
      {
        name: 'Kubernetes',
        level: 6.5,
      },
      {
        name: 'GCP',
        level: 7.2,
      },
    ],
  },
  {
    name: 'Databases & APIs',
    skills: [
      {
        name: 'PostgreSQL',
        level: 9.5,
      },
      {
        name: 'GraphQL API',
        level: 6.5,
      },
      {
        name: 'RESTful API',
        level: 8.7,
      },
      {
        name: 'Microservices',
        level: 7.9,
      },
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Microservices Backend for Online Shopping Site',
    description: 'Developing a robust backend for an online shopping platform using Java and Spring Cloud.',
    url: 'https://github.com/jrmhx/th-services',
    image: porfolioImage1
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2022 - June 2024',
    location: 'Australian National University',
    title: 'Bachelor of Advanced Computing (Honors)',
    content: (
      <p>
        GPA: 6.25/7.0 <br/>
        Systems and Architectures Specialization <br/>
        Relevant Coursework: Computer Networks, Parallel Systems, Algorithms, Concurrency & Networking, Data Analysis
      </p>
    ),
  },
  {
    date: 'Sep 2020 - June 2022',
    location: 'Shandong University',
    title: 'Bachelor of Computer Science',
    content: (
      <p>
        WAM: 85/100 <br/>
        Relevant Coursework: Data Structure, Relational Databases, Software Engineering, Computer Architecture
      </p>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'Mar 2024 – Present',
    location: 'ANU School of Computing, Canberra, ACT, Australia',
    title: 'Casual Software Engineer',
    content: (
      <p>
        Engaging in a project for early detection of ovarian cancer, transforming a machine learning pipeline into a user-friendly software tool for use by medical professionals at the University of Queensland and National University of Singapore. <br/>
        <strong>· Microservices</strong>: Design and implement modular microservices, including Machine Learning Service API Endpoints; Message Queue Middleware; User Authentication Services, and Notification Service <br/>
        <strong>· Containerization</strong>: Utilize <strong>Docker</strong> to containerize applications, and simplify dependencies config like <strong>PostgreSQL</strong>, <strong>PgAdmin</strong>, and <strong>Kafka</strong> with <strong>Docker Compose</strong>.
      </p>
    ),
  },
  {
    date: 'Jul 2023 – Dec 2023',
    location: 'Australian National University, Canberra, ACT, Australia',
    title: 'Software Engineering Academic Tutor',
    content: (
      <p>
        As a Casual Sessional Academic at ANU CECC for the course Software Engineering (COMP2120/6210), I help organize and deliver tutorials in collaboration with course convenors and fellow tutors. <br/>
        Playing a pivotal role in guiding students through group projects and providing practical insight into the principles of modern software development tech stacks including <strong>Git</strong>, <strong>CI/CD</strong> with <strong>Docker</strong>, <strong>DevOps</strong>, and <strong>Microservices</strong>.
      </p>
    ),
  },
  {
    date: 'Jul 2023 – Nov 2023',
    location: 'UnicornShift, Canberra, ACT, Australia',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Joined UnicornShift as a remote full-stack engineer intern, where I played a pivotal role in developing a web application that provides tech solutions to bridge the gap between local construction companies and traffic controllers. <br/>
        <strong>· Frontend</strong>: Use <strong>React</strong>, <strong>Next.js</strong>, and <strong>Typescript</strong> to create the frontend of a web application for admin staff, construction clients, and traffic control suppliers. I design and deploy reusable UI components and dynamic pages, notably a Location Picker integrating <strong>Google Map APIs</strong> while ensuring component integrity with <strong>Storybook</strong> UI testing. <br/>
        <strong>· Backend</strong>: Use <strong>Node.js</strong> for backend development, contributing to scalable and efficient server-side solutions. Developed <strong>GraphQL API</strong> endpoints with <strong>Apollo GraphQL</strong>. <br/>
        <strong>· Deployment</strong>: Skillfully configured <strong>MySQL</strong> schemas and orchestrated pub/sub triggered cloud functions within <strong>Google Cloud Platform (GCP)</strong>.
      </p>
    ),
  },
  {
    date: 'Feb 2023 – Jun 2023',
    location: 'Contour Advisory, Canberra, ACT, Australia',
    title: 'Full Stack Developer Intern',
    content: (
      <p>
        Joined the ANU TechLauncher program, and developed a web application that allows users to submit their qualifications and mint them into NFTs for the client. <br/>
        <strong>· Frontend</strong>: Crafted a dynamic and responsive NFT mint list page for users using <strong>React</strong>, enhancing the user experience with a streamlined design; <br/>
        <strong>· Backend</strong>: Utilized the <strong>Spring Boot</strong> framework for Java-based applications, incorporating <strong>Spring Security JWT</strong> for robust user authentication; Designed <strong>RESTful API</strong> endpoints to ensure communication between the frontend and backend; Experienced in developing data storage layer services using decentralized <strong>IPFS</strong> storage.
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
      name: 'Ramesh Kithsiri',
      title: 'Software Engineer at UnicornShift',
      date: 'October 3, 2023',
      text: 'I worked with Jeremiah for 4-5 months. He helped us to deliver the features before deadlines. Jeremiah is more enthusiastic in frontend tech stacks like ReactJS, NextJS. Jeremiah also contributed to backend projects built using NodeJS and Apollo Server in same time. He proposed unique ideas to improve the products and brought those ideas into reality by drafting UX designs.',
      image: 'https://media.licdn.com/dms/image/D5603AQG9oDBdQ09Vvg/profile-displayphoto-shrink_100_100/0/1668428242841?e=1724889600&v=beta&t=1NZBoTF-HNCw1duRgqZ3d2P2WBNV4jozizhAWUMBHc0', // Replace with the correct path to Ramesh's image if available
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Share any details about your ideas, or any other information :)',
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
      type: ContactType.Github,
      text: 'Github',
      href: 'https://github.com/jrmhx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jrmhx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jrmhx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jez_hsing/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jez_hsing'},
];
