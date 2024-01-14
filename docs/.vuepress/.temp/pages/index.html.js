export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"actions\":[{\"text\":\"介绍\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"快速开始\",\"link\":\"/guide/getting-started.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"数据可视化\",\"details\":\"通过前端echarts组件将数据可视化，将数据可按年、按村、按收入及支出进行图标可视化。\"},{\"title\":\"快捷导入\",\"details\":\"提供银行表导入功能和模板化导入功能方便数据导入本系统，实现数据便捷化导入。\"},{\"title\":\"多条件搜索\",\"details\":\"可通村庄，收款人，账单金额区间，账单日期区间等进行模糊查找，方便数据查询。\"},{\"title\":\"工具中心\",\"details\":\"提供工具中心功能，目前包含自助打印及国库往来报告自助生成两大功能，未来将会根据用户需求制作更多方便工具供大家使用。\"},{\"title\":\"性能调优\",\"details\":\"通过vue2作为底座进行开发，后端采用golang kratos微服务框架进行开发，在仅有的带宽下大大提高吞吐量与响应速度。\"},{\"title\":\"自然语言处理\",\"details\":\"通过llm大语言模型进行开发，针对金融数据进行微调，将大语言模型部署在财政系统服务器，在保证数据私密性的同时，可以让用户通过自然语言提问方式精确查找数据。\"}],\"footer\":\"冷水滩区财政局 | Copyright © 2023年\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
