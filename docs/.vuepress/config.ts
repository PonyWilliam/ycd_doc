import { defaultTheme, defineUserConfig } from 'vuepress'

import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarZh: SidebarConfig = {
    '/guide': [
    {
        text: '指南',
        children: [
        '/guide/README.md',
        '/guide/getting-started.md',
        '/guide/feedback.md',
        '/guide/updatelog.md',
        '/guide/video.md'
        ],
    },
    ],
}
export default defineUserConfig({
    lang: 'zh-CN',
    title: '冷水滩区财政所村账财务系统使用文档',
    description: '冷水滩区财政所村账财务系统使用文档',

    theme:defaultTheme({
        docsDir:'docs',
        sidebar: sidebarZh,
        editLinkText: '提交该页面错误',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome:'返回首页',
        lastUpdated:true,
        locales:{
            '/guide':{
                
            }
        }
    })
})