import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Start React UI',
  mode: 'site',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  menus: {
    '/components': [
      {
        title: '架构设计',
        children: ['Overview'],
      },
      {
        title: '通用',
        children: ['Button', 'Icon'],
      },
    ],
    '/en-US/components': [
      {
        title: 'Architecture Design',
        children: ['Overview'],
      },
      {
        title: 'Genaral',
        children: ['Button', 'Icon'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
