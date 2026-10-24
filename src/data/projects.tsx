import React from 'react';
import {
  lmChatDemo,
  cairnDemo,
  whetstoneDemo,
  orreryDemo,
  lmChatDesktopDemo,
  cairnDesktopDemo,
  whetstoneDesktopDemo,
  orreryDesktopDemo,
  lmChatIcon,
  cairnIcon,
  whetstoneIcon,
  orreryIcon,
} from '../img';

/** A still, or a short recording of the app in use (an .mp4 that plays on a loop, like a GIF); `wide` for a desktop's shape rather than a phone's. */
export interface ProjectImageType {
  src: string;
  alt: string;
  wide?: boolean;
}

export interface ProjectDetailType {
  title: string;
  repoUrl: string;
  repoLabel: string;
  /** The app's own icon, beside its name. */
  icon: string;
  /** The stack, as a line under the repo. */
  stack: string;
  /** The screenshots a desktop shows, side by side when there are several. */
  onDesktop: ProjectImageType[];
  /** The screenshots a phone shows. */
  onPhone: ProjectImageType[];
  summaryId: string;
  summary: React.ReactNode;
}

const lmChatInUse: ProjectImageType = { src: lmChatDemo, alt: 'LM Chat in use: a question typed into a chat and answered by the local model as it streams' };
const cairnInUse: ProjectImageType = { src: cairnDemo, alt: 'Cairn in use: a food searched for, picked and logged, then the day, the week and the month' };
const whetstoneInUse: ProjectImageType = { src: whetstoneDemo, alt: 'Whetstone in use: a solution typed in, run against the tests, and reviewed by the local model as it streams' };
const orreryInUse: ProjectImageType = { src: orreryDemo, alt: 'Orrery in use: a transit wheel and its reading, then a question typed under it and answered as it streams' };
const lmChatOnDesktop: ProjectImageType = { src: lmChatDesktopDemo, alt: 'LM Chat in use on a desktop: a question typed into a chat and answered by the local model as it streams', wide: true };
const cairnOnDesktop: ProjectImageType = { src: cairnDesktopDemo, alt: 'Cairn in use on a desktop: a food searched for, picked and logged, then the day, the week and the month', wide: true };
const whetstoneOnDesktop: ProjectImageType = { src: whetstoneDesktopDemo, alt: 'Whetstone in use on a desktop: a solution typed beside the problem, the tests run, and the review streaming under it', wide: true };
const orreryOnDesktop: ProjectImageType = { src: orreryDesktopDemo, alt: 'Orrery in use on a desktop: a wheel with a popup, its reading, then a tarot card pulled and read against it', wide: true };

const projectDetails: ProjectDetailType[] = [
  {
    title: 'LM CHAT',
    repoUrl: 'https://github.com/akuttruff/lm-chat',
    repoLabel: 'github.com/akuttruff/lm-chat',
    icon: lmChatIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, MCP',
    onDesktop: [lmChatOnDesktop],
    onPhone: [lmChatInUse],
    summaryId: 'lm-chat-summary',
    summary: (
      <>
        LM Chat talks to a model on my own computer from my phone. One Node process serves the React app and
        proxies each turn to the model server, which then streams the reply into SQLite as it arrives, so a
        locked phone doesn&apos;t interrupt the conversation. The API token never reaches the browser. Every
        message keeps its reasoning, its MCP
        tool calls and its token counts. The model&apos;s memories of me live in a file it reads and edits through
        {' '}
        <a href="https://github.com/akuttruff/lm-memory-mcp" target="_blank" rel="noopener noreferrer">lm-memory-mcp</a>
        , my memory MCP server.
      </>
    ),
  }, {
    title: 'WHETSTONE',
    repoUrl: 'https://github.com/akuttruff/whetstone',
    repoLabel: 'github.com/akuttruff/whetstone',
    icon: whetstoneIcon,
    stack: 'React 19, TypeScript, Vite, CodeMirror, Node 24 with node:sqlite, served by oMLX or LM Studio',
    onDesktop: [whetstoneOnDesktop],
    onPhone: [whetstoneInUse],
    summaryId: 'whetstone-summary',
    summary: 'Whetstone is an interview practice tool with a local model as my reviewer. The server runs my solution against real tests in a sandbox, in TypeScript, Ruby or Java. It then sends the draft and the results to the model over the OpenAI chat API and streams back a scored review, a hint ladder or a tutor thread. New problems are generated against a JSON schema and verified against their own tests before they are saved.',
  }, {
    title: 'CAIRN',
    repoUrl: 'https://github.com/akuttruff/cairn',
    repoLabel: 'github.com/akuttruff/cairn',
    icon: cairnIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite',
    onDesktop: [cairnOnDesktop],
    onPhone: [cairnInUse],
    summaryId: 'cairn-summary',
    summary: 'Cairn logs what I eat, drink and do, with the numbers worked out for me. One Node process serves the app and keeps the log in a single SQLite file. Food search fans out to the USDA and Open Food Facts APIs. A vision model reads nutrition labels from photos, and a tool-calling model reads a restaurant\'s own page through an MCP research server. A small model writes weekly notes from my numbers against my goals.',
  }, {
    title: 'ORRERY',
    repoUrl: 'https://github.com/akuttruff/orrery',
    repoLabel: 'github.com/akuttruff/orrery',
    icon: orreryIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, Python',
    onDesktop: [orreryOnDesktop],
    onPhone: [orreryInUse],
    summaryId: 'orrery-summary',
    summary: (
      <>
        Orrery casts my transits, forecasts and birth chart, one tap each. The server keeps
        {' '}
        <a href="https://github.com/akuttruff/astro-mcp" target="_blank" rel="noopener noreferrer">astro-mcp</a>
        , my Python ephemeris server, running over stdio and calls it directly. A chart is drawn as SVG in under a
        second. A local model then writes the reading on the server and streams it into SQLite. Follow-up questions
        are answered with the same tools through MCP. It reads tarot too: a daily card, a spread, or a card pulled
        against a reading. The cards are dealt from the public-domain 1909 Rider-Waite-Smith deck, with Pamela
        Colman Smith&apos;s original illustrations, and the same model reads them.
      </>
    ),
  },
];

export default projectDetails;
