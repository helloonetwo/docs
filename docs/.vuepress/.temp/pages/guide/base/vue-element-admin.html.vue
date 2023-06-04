<template><div><h1 id="前端框架搭建" tabindex="-1">前端框架搭建</h1>
<h2 id="项目初始化" tabindex="-1">项目初始化</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://github.com/PanJiaChen/vue-element-admin" target="_blank" rel="noopener noreferrer">查看<ExternalLinkIcon/></a> vue-element-admin 源码</p>
</div>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/PanJiaChen/vue-element-admin
<span class="token builtin class-name">cd</span> vue-element-admin
<span class="token function">npm</span> i
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目精简" tabindex="-1">项目精简</h2>
<ul>
<li>删除 src/views 下的源码，保留：
<ul>
<li>dashboard：首页</li>
<li>error-page：异常页面</li>
<li>login：登录</li>
<li>redirect：重定向</li>
</ul>
</li>
<li>对 src/router/index 进行相应修改</li>
<li>删除 src/router/modules 文件夹</li>
<li>删除 src/vendor 文件夹</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>如果是线上项目，建议将 components 的内容也进行清理，以免影响访问速度，或者直接<a href="https://github.com/PanJiaChen/vue-admin-template" target="_blank" rel="noopener noreferrer">使用<ExternalLinkIcon/></a> vue-admin-template 构建项目，课程选择 vue-element-admin 初始化项目，是因为 vue-element-admin 实现了登录模块，包括 token 校验、网络请求等，可以简化我们的开发工作</p>
</div>
<h2 id="项目配置" tabindex="-1">项目配置</h2>
<p>通过 src/settings.js 进行全局配置：</p>
<ul>
<li>title：站点标题，进入某个页面后，格式为：</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>页面标题 - 站点标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>showSettings：是否显示右侧悬浮配置按钮</li>
<li>tagsView：是否显示页面标签功能条</li>
<li>fixedHeader：是否将头部布局固定</li>
<li>sidebarLogo：菜单栏中是否显示LOGO</li>
<li>errorLog：默认显示错误日志的环境</li>
</ul>
<h2 id="源码调试" tabindex="-1">源码调试</h2>
<p>如果需要进行源码调试，需要修改 vue.config.js：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>config
  <span class="token comment">// https://webpack.js.org/configuration/devtool/#development</span>
  <span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'development'</span><span class="token punctuation">,</span>
    <span class="token parameter">config</span> <span class="token operator">=></span> config<span class="token punctuation">.</span><span class="token function">devtool</span><span class="token punctuation">(</span><span class="token string">'cheap-source-map'</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 cheap-source-map 改为 source-map，如果希望提升构建速度可以改为 eval</p>
<blockquote>
<p>通常建议开发时保持 eval 配置，以增加构建速度，当出现需要源码调试排查问题时改为 source-map</p>
</blockquote>
<h2 id="项目结构" tabindex="-1">项目结构</h2>
<ul>
<li>api：接口请求</li>
<li>assets：静态资源</li>
<li>components：通用组件</li>
<li>directive：自定义指令</li>
<li>filters：自定义过滤器</li>
<li>icons：图标组件</li>
<li>layout：布局组件</li>
<li>router：路由配置</li>
<li>store：状态管理</li>
<li>styles：自定义样式</li>
<li>utils：通用工具方法
<ul>
<li>auth.js：token 存取</li>
<li>permission.js：权限检查</li>
<li>request.js：axios 请求封装</li>
<li>index.js：工具方法</li>
</ul>
</li>
<li>views：页面</li>
<li>permission.js：登录认证和路由跳转</li>
<li>settings.js：全局配置</li>
<li>main.js：全局入口文件</li>
<li>App.vue：全局入口组件</li>
</ul>
</div></template>


