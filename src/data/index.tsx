import React from 'react';
import { ClojureVideo, GraphQLVideo } from '../media';
import {
  jamaLogo,
  littleBirdLogo,
  renewLogo,
  skywardLogo,
  zendeskLogo,
  violinPhoto,
  flightInsightsPhoto,
} from '../img';

export interface RouteType {
  link: string;
  title: string;
}

const routes: RouteType[] = [
  {
    link: '/work',
    title: 'Work',
  }, {
    link: '/music',
    title: 'Music',
  }, {
    link: '/talks',
    title: 'Tech Talks',
  }, {
    link: '/projects',
    title: 'Software Projects',
  },
  // }, {
  //   link: '/writing',
  //   title: 'Writing',
  // },
];

export interface SocialLinkType {
  url: string;
  icon: React.ReactNode;
}

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const socialLinks: SocialLinkType[] = [
  {
    url: 'http://github.com/akuttruff',
    icon: <GithubIcon />,
  }, {
    url: 'http://twitter.com/amiekuttruff',
    icon: <TwitterIcon />,
  }, {
    url: 'https://www.linkedin.com/in/amiekuttruff/',
    icon: <LinkedinIcon />,
  },
];

export interface EducationDetailType {
  schoolLink: string;
  school: string;
  subject: string;
}

const educationDetails: EducationDetailType[] = [
  {
    schoolLink: 'https://www.tufts.edu',
    school: 'Tufts University',
    subject: '— B.A. International Letters and Visual Studies (2009)',
  }, {
    schoolLink: 'https://www.uni-tuebingen.de/',
    school: 'Universität Tübingen',
    subject: '— German Studies (2005)',
  },
];

export interface MusicDetailsType {
  title: string;
  description: string;
  email: string;
  emailLabel: string;
  img: string;
}

const musicDetails: MusicDetailsType = {
  title: 'Music',
  description: 'Classical violinist available for orchestra or chamber ensemble work',
  email: 'mailto:amie.kuttruff@gmail.com',
  emailLabel: 'Email',
  img: violinPhoto,
};

export interface TalkDetailType {
  title: string;
  talkSrc: string;
  location: string;
  summaryId: string;
  summary: string;
  talkComponent: React.ReactNode;
}

const talkDetails: TalkDetailType[] = [
  {
    title: 'DEEPEN AND DIVERSIFY THE CLOJURE COMMUNITY WITH JUNIOR ENGINEERS',
    talkSrc: 'https://2016.clojurewest.org/speakers#akuttruff',
    location: '(Clojure/West 2016, Seattle WA)',
    summaryId: 'clojure-summary',
    summary: 'The simplicity of the Clojure language and the supportive, collaborative spirit of its community played a pivotal role in my success as a junior engineer. I felt frustrated with cryptic \'method_missing\' stack traces in my first years of programming, and Clojure reshaped the way I saw code and data. This talk examines elements of the language that help and hinder newcomers, ways in which teams can better support junior developers, and how companies can create value by investing in upcoming talent.',
    talkComponent: <ClojureVideo />,
  }, {
    title: 'SCHEMA-DRIVEN DEVELOPMENT WITH GRAPH-QL AND REACT-APOLLO',
    talkSrc: 'https://renewfinancial.com/government',
    location: '(Renew Financial 2018, Portland OR)',
    summaryId: 'graphql-summary',
    summary: 'GraphQL is a query language and server-side runtime for processing queries and mutations of data. It\'s language-agnostic, and allows you to define your own type system. With GraphQL, the shape of your query matches the shape of your response data, without the over- or under-fetching of data that you get with REST APIs. Combined with Apollo-React, GraphQL is a breath of fresh air for the full-stack development landscape.',
    talkComponent: <GraphQLVideo />,
  },
];

export interface WorkDetailType {
  img: string;
  alt: string;
  companyUrl: string;
  company: string | null;
  timeRange: string;
  title: string;
  descriptionItems: React.ReactNode[];
}

/** A link to one of Zendesk's pages about a feature, opening in a new tab. */
const zd = (href: string, text: string): React.ReactNode => (
  <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
);

const workDetails: WorkDetailType[] = [
  {
    img: zendeskLogo,
    alt: 'Zendesk logo',
    companyUrl: 'https://www.zendesk.com',
    company: 'ZENDESK',
    timeRange: '(August 2021 - present)',
    title: 'Senior Software Engineer',
    descriptionItems: [
      <>
        Worked on the GraphQL schema, in TypeScript, for Zendesk&apos;s new
        {' '}{zd('https://support.zendesk.com/hc/en-us/articles/5914453843994', 'custom objects')}, which let
        customers model their own data with lookup relationships,
        {' '}{zd('https://support.zendesk.com/hc/en-us/articles/10743847273626', 'roll-up summary fields')} and
        {' '}{zd('https://support.zendesk.com/hc/en-us/articles/5392409465370', 'autonumbered records')}
      </>,
      <>
        Contributed to {zd('https://support.zendesk.com/hc/en-us/articles/4591924111770', 'lookup relationship fields')}
        {' '}in React and Apollo Client, including the type-ahead record picker and its filtering, and their reach to
        other custom objects and
        {' '}{zd('https://support.zendesk.com/hc/en-us/articles/10689134053658', 'help center ticket forms')}
      </>,
      <>
        Helped implement {zd('https://support.zendesk.com/hc/en-us/articles/6034260247066', 'object-level permissions')}
        {' '}with role-based access control, including access for light agents and contributors
      </>,
      <>
        Worked on the export tool, account banners and re-export flow for
        {' '}{zd('https://developer.zendesk.com/documentation/custom-data/custom-objects/migrating/introduction/', 'moving legacy custom objects')}
        {' '}to the new platform
      </>,
      'Co-wrote RFCs and design docs for the permissions system, autonumbering and dynamic filtering, and contributed to the shared field-management React component library',
      'Helped move a frontend\'s GraphQL from the agent graph to the platform data graph, adding end-to-end tests, fixing security issues and speeding up queries',
    ],
  },
  {
    img: skywardLogo,
    alt: 'Skyward logo',
    companyUrl: 'https://techcrunch.com/2017/02/16/verizon-buys-skyward-a-drone-operations-company/',
    company: 'SKYWARD',
    timeRange: '(July 2018 - August 2021)',
    title: 'Senior Front End Engineer',
    descriptionItems: [
      'Migrated Skyward Cloud Platform from AngularJS to React/Redux with TypeScript, improving performance and maintainability',
      'Architected new features with React hooks, Apollo Client, and TypeScript; implemented comprehensive unit and E2E test coverage',
      'Optimized state management for large-scale data visualizations; established coding standards and CI/CD pipeline improvements'
    ],
  }, {
    img: renewLogo,
    alt: 'Renew Financial logo',
    companyUrl: 'https://renewfinancial.com/',
    company: 'RENEW FINANCIAL',
    timeRange: '(October 2017 - June 2018)',
    title: 'Software Engineer II',
    descriptionItems: [
      'Migrated Renew Financial UI from AngularJS to React/Redux with TypeScript; implemented responsive design for mobile and desktop',
      'Built reusable component library with Storybook; established TypeScript strict mode and comprehensive Jest test coverage',
      'Optimized build pipeline with Webpack 5, Babel 7, and ESLint; implemented automated E2E testing with Cypress'
    ],
  }, {
    img: jamaLogo,
    alt: 'Jama Software logo',
    companyUrl: 'https://www.jamasoftware.com',
    company: 'JAMA SOFTWARE',
    timeRange: '(February 2016 - October 2017)',
    title: 'Software Engineer, Mid-Level',
    descriptionItems: [
      'Refactored Jama legacy codebase from Java/EXT.js to React/Redux with TypeScript; improved performance and maintainability',
      'Implemented requirements management UI features with React, Redux Toolkit, and TypeScript; established unit test coverage',
      'Developed autoscaled microservices on AWS ECS with Java and Spring Boot; implemented automated CI/CD pipelines'
    ],
  }, {
    img: littleBirdLogo,
    alt: 'Little Bird logo',
    companyUrl: 'https://techcrunch.com/2016/11/17/sprinklr-acquires-littlebird-a-tool-for-finding-experts-on-anything-via-twitter',
    company: 'LITTLE BIRD',
    timeRange: '(January 2014 - December 2015)',
    title: 'Software Engineer',
    descriptionItems: [
      'Full-stack developer for network graph analysis software: Ruby on Rails backend, Clojure/ClojureScript frontend, React.js UI',
      'Implemented data visualization features with D3 and Gephi; created automated browser testing framework for QA',
      'Built full-stack application features with PostgreSQL and MongoDB; established Git workflow and CI/CD practices'
    ],
  },
];

export {
  routes,
  socialLinks,
  educationDetails,
  musicDetails,
  talkDetails,
  workDetails,
};
