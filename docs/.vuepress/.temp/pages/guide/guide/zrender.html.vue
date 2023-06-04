<template><div><h1 id="zrender" tabindex="-1">zrender</h1>
<p><a href="https://ecomfe.github.io/zrender-doc/public/" target="_blank" rel="noopener noreferrer">zrender<ExternalLinkIcon/></a> 是二维绘图引擎，它提供 Canvas、SVG、VML 等多种渲染方式。ZRender 也是 ECharts 的渲染器。</p>
<h2 id="入门案例-绘制点、矩形、直线和圆形" tabindex="-1">入门案例：绘制点、矩形、直线和圆形</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-zrender.html"
  width="100%"
  height="300"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/zrender@4.3.0/dist/zrender.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">var</span> zr <span class="token operator">=</span> zrender<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'container'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Polyline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">points</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'blue'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">cx</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cy</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">50</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'green'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">zrender<span class="token punctuation">.</span>Polyline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">shape</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">points</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">301</span><span class="token punctuation">,</span> <span class="token number">301</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span>
      zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
      zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span>
      zr<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>思考：你能否总结出 zrender 绘图的流程？</p>
</blockquote>
<details class="custom-container details">
<ol>
<li>引入 zrender 库</li>
<li>编写 div 容器</li>
<li>初始化 zrender 对象</li>
<li>初始化 zrender 绘图对象</li>
<li>调用 zrender add 方法绘图</li>
</ol>
</details>
<p>想深入学习 zrender 的同学可以参考<a href="https://ecomfe.github.io/zrender-doc/public/examples/animation.html" target="_blank" rel="noopener noreferrer">官方案例<ExternalLinkIcon/></a>，源码可以在 <a href="https://github.com/ecomfe/zrender-doc/tree/master/public/examples" target="_blank" rel="noopener noreferrer">zrender-docs<ExternalLinkIcon/></a> 中找到</p>
</div></template>


