import React from 'react';
import {
  lmChatDesktop,
  lmChatThread,
  lmChatReply,
  lmChatChats,
  cairnDay,
  cairnAdd,
  cairnWeek,
  whetstoneDesktop,
  orreryToday,
  orreryReading,
  orreryWeek,
  lmChatIcon,
  cairnIcon,
  whetstoneIcon,
  orreryIcon,
} from '../img';

export interface ProjectImageType {
  src: string;
  alt: string;
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

const lmChatPhones: ProjectImageType[] = [
  { src: lmChatThread, alt: 'LM Chat: a question, the model\'s thinking as a row, the MCP tools it called as cards, then the reply' },
  { src: lmChatReply, alt: 'LM Chat: a reply in Markdown, then what the turn cost in time and tokens' },
  { src: lmChatChats, alt: 'LM Chat: the chat list with folders, stars and search' },
];
const lmChatWide: ProjectImageType = { src: lmChatDesktop, alt: 'LM Chat on a desktop: the chat list in a sidebar beside a thread with tool calls' };

const cairnDayShot: ProjectImageType = { src: cairnDay, alt: 'Cairn: a day\'s calories and macros against their goals, then water, alcohol and workouts' };
const cairnAddShot: ProjectImageType = { src: cairnAdd, alt: 'Cairn: the Add sheet, with saved foods, a database search and a label scan' };
const cairnWeekShot: ProjectImageType = { src: cairnWeek, alt: 'Cairn: a week of days, each against its own goal' };

const whetstoneWide: ProjectImageType = { src: whetstoneDesktop, alt: 'Whetstone on a desktop: the problem beside the editor, with the scored review under the draft' };

const orreryPhones: ProjectImageType[] = [
  { src: orreryToday, alt: 'Orrery: the day\'s transits over the birth chart as a wheel, then every contact in a table' },
  { src: orreryReading, alt: 'Orrery: a reading written by the model, with a question and its answer underneath' },
  { src: orreryWeek, alt: 'Orrery: a week\'s transits in two groups, the contacts exact this week and the slow planets in orb all week' },
];

const projectDetails: ProjectDetailType[] = [
  {
    title: 'LM CHAT',
    repoUrl: 'https://github.com/akuttruff/lm-chat',
    repoLabel: 'github.com/akuttruff/lm-chat',
    icon: lmChatIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, MCP',
    onDesktop: lmChatPhones,
    onPhone: [lmChatWide],
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
    onDesktop: [whetstoneWide],
    onPhone: [whetstoneWide],
    summaryId: 'whetstone-summary',
    summary: 'Whetstone is an interview practice tool with a local model as my reviewer. The server runs my solution against real tests in a sandbox, in TypeScript, Ruby or Java. It then sends the draft and the results to the model over the OpenAI chat API and streams back a scored review, a hint ladder or a tutor thread. New problems are generated against a JSON schema and verified against their own tests before they are saved.',
  }, {
    title: 'CAIRN',
    repoUrl: 'https://github.com/akuttruff/cairn',
    repoLabel: 'github.com/akuttruff/cairn',
    icon: cairnIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite',
    onDesktop: [cairnDayShot, cairnAddShot, cairnWeekShot],
    onPhone: [cairnDayShot, cairnWeekShot],
    summaryId: 'cairn-summary',
    summary: 'Cairn logs what I eat, drink and do, with the numbers worked out for me. One Node process serves the app and keeps the log in a single SQLite file. Food search fans out to the USDA and Open Food Facts APIs. A vision model reads nutrition labels from photos, and a tool-calling model reads a restaurant\'s own page through an MCP research server. A small model writes weekly notes from my numbers against my goals.',
  }, {
    title: 'ORRERY',
    repoUrl: 'https://github.com/akuttruff/orrery',
    repoLabel: 'github.com/akuttruff/orrery',
    icon: orreryIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, Python',
    onDesktop: orreryPhones,
    onPhone: orreryPhones.slice(0, 2),
    summaryId: 'orrery-summary',
    summary: (
      <>
        Orrery casts my transits, forecasts and birth chart, one tap each. The server keeps
        {' '}
        <a href="https://github.com/akuttruff/astro-mcp" target="_blank" rel="noopener noreferrer">astro-mcp</a>
        , my Python ephemeris server, running over stdio and calls it directly. A chart is drawn as SVG in under a
        second. A local model then writes the reading on the server and streams it into SQLite. Follow-up questions
        are answered with the same tools through MCP.
      </>
    ),
  },
];

export default projectDetails;
