import type { SidebarConfig } from '@vuepress/theme-default'

export const slidebar: SidebarConfig = {
    '/guide/': [
        {
        text: '介绍',
        children: [
            '/guide/README.md',
            '/guide/getting-started.md',
        ],
        },
    ],
}