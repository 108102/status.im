/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Cryptostrikers',
    image: '/img/shield-logo.svg',
    infoLink: 'https://www.cryptostrikers.com/',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Status Technikon' /* title for your website */,
  tagline: 'Decentralised technologies at your fingertips',
  url: 'https://status.im' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'status-docs',
  organizationName: 'status-im',
  users,
  editUrl: 'https://github.com/status-im/docs.status.im/edit/NewSite/docs/',
  headerLinks: [
    {doc: 'introduction', label: 'Docs'},
    {href: 'https://ideas.status.im', label: 'Ideas'},
    {doc: 'testing', label: 'Testing'},
    {doc: 'intro_whisper', label: 'Whisper'},
    {doc: 'userguide', label: 'User Guide'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
    {languages: true},
    {search: true},
  ],
  // For search, can be set up once the site is live
  algolia: {
    apiKey: 'my-api-key',
    indexName: 'my-index-name',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  headerIcon: 'img/logo_white.png',
  footerIcon: 'img/logo_white.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#4A5AB5',
    secondaryColor: '#6CC1F6',
  },
  fonts: {
    myFont: [
      "PostGrotesk-Book",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui"
    ]
  },
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Status.im',
  highlight: {
    theme: 'atom-one-dark',
  },
  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  ogImage: 'img/og_logo.png',
  twitterImage: 'img/og_logo.png',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  repoUrl: 'https://github.com/status-im/status-react',
};

module.exports = siteConfig;
