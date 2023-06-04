<template><div><h1 id="常见问题" tabindex="-1">常见问题</h1>
<h2 id="vue-create-失败" tabindex="-1">vue create 失败</h2>
<p>npm 安装有可能会导致失败，建议加上淘宝镜像：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>vue create imooc-datav-report-dev <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="echarts-绘图后没有图像" tabindex="-1">ECharts 绘图后没有图像</h2>
<p>ECharts 绘图后没有任何报错，但是没有图像。可以检查容器是否设置了宽高。因为 ECharts 不会设置默认宽高，如果容器没有设置宽高，则不会展示：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total-orders-chart<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ width: '100%', height: '100%' }<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


