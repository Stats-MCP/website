import { issuesUrl, repoUrl, securityUrl, tiansphereUrl } from '@/data/site';

export interface InfoLink {
  label: string;
  href: string;
}

export interface InfoSection {
  heading: string;
  paragraphs: string[];
  links?: InfoLink[];
}

export interface InfoPage {
  path: string;
  title: string;
  description: string;
  sections: InfoSection[];
}

export const aboutPage: InfoPage = {
  path: 'about/',
  title: 'About StatsMCP',
  description:
    'StatsMCP is a free, open source MCP server that gives AI assistants official statistics from national statistics offices and Eurostat, with the source in every answer.',
  sections: [
    {
      heading: 'What StatsMCP is',
      paragraphs: [
        'StatsMCP is a free and open source MCP server. It connects AI assistants such as Claude, ChatGPT and Cursor to the public APIs of national statistics offices and Eurostat.',
        'The assistant searches official tables, reads their variables and gets the figures. Every result names the source and links to the original table.'
      ]
    },
    {
      heading: 'Why it exists',
      paragraphs: [
        'Official statistics are free to reuse, but each office has its own API, its own codes and its own languages. StatsMCP gives all of them one interface, so an assistant can answer with real figures and not with guesses.'
      ]
    },
    {
      heading: 'How it works',
      paragraphs: [
        'The server has four tools: list_countries, search_tables, get_table_metadata and query_table. The hosted endpoints are read-only, need no sign-in and keep no logs.',
        'You can also run the servers on your own computer from npm. Then your requests go only to the statistics office.'
      ],
      links: [{ label: 'Countries and endpoints', href: '/countries/' }]
    },
    {
      heading: 'Who builds it',
      paragraphs: [
        'StatsMCP is an independent project. It is not affiliated with or endorsed by any statistics office. TianSphere builds and maintains it.',
        'The code is under the MIT licence on GitHub. Contributions and proposals for new countries are welcome.'
      ],
      links: [
        { label: 'Source code on GitHub', href: repoUrl },
        { label: 'TianSphere', href: tiansphereUrl }
      ]
    }
  ]
};

export const contactPage: InfoPage = {
  path: 'contact/',
  title: 'Contact StatsMCP',
  description:
    'How to contact the StatsMCP project: GitHub issues for questions, bugs and new countries, and private reports for security problems.',
  sections: [
    {
      heading: 'Questions and bugs',
      paragraphs: [
        'Open an issue on GitHub. Tell us which assistant you use, the question you asked and the endpoint. We answer in the issue, so other people can find the answer too.'
      ],
      links: [{ label: 'Open an issue on GitHub', href: issuesUrl }]
    },
    {
      heading: 'Add a country',
      paragraphs: [
        'To propose a new statistics office, open an issue with the name of the office and a link to its public API. We can add most offices that have a public API.'
      ]
    },
    {
      heading: 'Security problems',
      paragraphs: [
        'Do not report a security problem in a public issue. Send a private security advisory on GitHub. The security policy tells you what to include.'
      ],
      links: [{ label: 'Security policy', href: securityUrl }]
    },
    {
      heading: 'Errors in the data',
      paragraphs: [
        'StatsMCP does not change the data. If a figure looks wrong, compare it with the table link in the answer. If the table on the website of the office is also wrong, contact the statistics office.'
      ]
    }
  ]
};
