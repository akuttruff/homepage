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
  barometerDesktop,
  barometerMonitors,
  barometerGraphs,
  barometerTiles,
  barometerIcon,
  weftTask,
  weftTest,
  weftIcon,
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
  /** Left off the page for now, without losing its write-up. */
  hidden?: boolean;
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

const barometerPhones: ProjectImageType[] = [
  { src: barometerMonitors, alt: 'Barometer: how many monitors stand at alert, warn, no data and OK, then the triggered ones' },
  { src: barometerTiles, alt: 'Barometer: every monitor as a tile coloured by its status, grouped by apps, services, model and Mac' },
  { src: barometerGraphs, alt: 'Barometer: health-check latency, errors logged and memory over the last six hours' },
];
const barometerWide: ProjectImageType = { src: barometerDesktop, alt: 'Barometer on a desktop: the monitor summary, the triggered monitors and every monitor as a tile' };

const weftTaskShot: ProjectImageType = { src: weftTask, alt: 'Weft: a task typed at the prompt, the planner\'s plan, the worker\'s edit as a diff, the tests run and the reviewer\'s verdict' };
const weftTestShot: ProjectImageType = { src: weftTest, alt: 'Weft: a follow-up task, the new test file written and shown as a diff, the type-check and tests passing, then the review' };

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
        LM Chat talks to a model running on a home computer from a phone. One Node process serves the React app and
        proxies each turn to the model server, which then streams the reply into SQLite as it arrives, so a
        locked phone doesn&apos;t interrupt the conversation. The API token never reaches the browser. Every
        message keeps its reasoning, its MCP
        tool calls and its token counts. The model&apos;s memories of the user live in a file it reads and edits through
        {' '}
        <a href="https://github.com/akuttruff/lm-memory-mcp" target="_blank" rel="noopener noreferrer">lm-memory-mcp</a>
        , a memory MCP server.
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
    summary: 'Whetstone is an interview practice tool with a local model as the reviewer. The server runs each solution against real tests in a sandbox, in TypeScript, Ruby or Java. It then sends the draft and the results to the model over the OpenAI chat API and streams back a scored review, a hint ladder or a tutor thread. New problems are generated against a JSON schema and verified against their own tests before they are saved.',
  }, {
    title: 'WEFT',
    repoUrl: 'https://github.com/akuttruff/weft',
    repoLabel: 'github.com/akuttruff/weft',
    icon: weftIcon,
    stack: 'Rust, tokio, ratatui, reqwest, rmcp (MCP), LM Studio',
    onDesktop: [weftTaskShot, weftTestShot],
    onPhone: [weftTaskShot],
    summaryId: 'weft-summary',
    summary: 'Weft is a coding agent for the terminal that runs local models in tandem. Qwen3.8‑27B plans each task and reviews the diff. Qwen3.5‑122B‑A10B, a mixture-of-experts model, does the work with file, search and shell tools. Qwen3.5‑9B answers their questions about where things live. All three are served by LM Studio on my Mac. Weft leverages tools from MCP servers, and every session is written to disk and can be resumed. When a conversation nears the context window, the earlier tasks are compacted into a summary and the work goes on from there.',
  }, {
    title: 'CAIRN',
    repoUrl: 'https://github.com/akuttruff/cairn',
    repoLabel: 'github.com/akuttruff/cairn',
    icon: cairnIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite',
    onDesktop: [cairnDayShot, cairnAddShot, cairnWeekShot],
    onPhone: [cairnDayShot, cairnWeekShot],
    summaryId: 'cairn-summary',
    summary: 'Cairn is a food, water and workout log that totals calories and macros against daily goals. One Node process serves the app and keeps the log in a single SQLite file. Food search fans out to the USDA and Open Food Facts APIs. A vision model reads nutrition labels from photos, and a tool-calling model reads a restaurant\'s own page through an MCP research server. A small model writes weekly notes on how the numbers compare with the goals.',
  }, {
    title: 'ORRERY',
    repoUrl: 'https://github.com/akuttruff/orrery',
    repoLabel: 'github.com/akuttruff/orrery',
    icon: orreryIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, Python',
    onDesktop: orreryPhones,
    onPhone: orreryPhones.slice(0, 2),
    summaryId: 'orrery-summary',
    hidden: true,
    summary: (
      <>
        Orrery casts transits, forecasts and a birth chart, one tap each. The server keeps
        {' '}
        <a href="https://github.com/akuttruff/astro-mcp" target="_blank" rel="noopener noreferrer">astro-mcp</a>
        , a Python ephemeris server, running over stdio and calls it directly. A chart is drawn as SVG in under a
        second. A local model then writes the reading on the server and streams it into SQLite. Follow-up questions
        are answered with the same tools through MCP. It reads tarot too: a daily card, a spread, or a card pulled
        against a reading. The cards are dealt from the public-domain 1909 Rider-Waite-Smith deck, with Pamela
        Colman Smith&apos;s original illustrations, and the same model reads them.
      </>
    ),
  }, {
    title: 'BAROMETER',
    repoUrl: 'https://github.com/akuttruff/barometer',
    repoLabel: 'github.com/akuttruff/barometer',
    icon: barometerIcon,
    stack: 'React 19, TypeScript, Vite, Node 24 with node:sqlite, Web Push',
    onDesktop: barometerPhones,
    onPhone: [barometerWide],
    summaryId: 'barometer-summary',
    summary: 'Barometer is a monitoring board for these apps, the model server they share and the Mac they run on. Once a minute, the server checks each app\'s health route and launchd log, and looks at memory pressure, disk space, Tailscale and last night\'s database backups. Every ten minutes it also sends the model a short test prompt to see how quickly it answers. The samples are kept in SQLite and drawn as SVG graphs covering the last hour, day or week.',
  },
];

export default projectDetails;
