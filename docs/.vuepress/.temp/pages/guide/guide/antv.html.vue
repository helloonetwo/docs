<template><div><h1 id="antv" tabindex="-1">AntV</h1>
<p><a href="https://antv.vision/zh" target="_blank" rel="noopener noreferrer">AntV<ExternalLinkIcon/></a> 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。</p>
<p>AntV 包括以下解决方案：</p>
<ul>
<li>G2：可视化引擎</li>
<li>G2Plot：图表库</li>
<li>G6：图可视化引擎</li>
<li>Graphin：基于 G6 的图分析组件</li>
<li>F2：移动可视化方案</li>
<li>ChartCube：AntV 图表在线制作</li>
<li>L7：地理空间数据可视化</li>
</ul>
<h2 id="g2-案例-折线图" tabindex="-1">G2 案例：折线图</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-g2.html"
  width="100%"
  height="400"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@antv/g2plot@latest/dist/g2plot.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g2-chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1991'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1992'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1993'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3.5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1994'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1995'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4.9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1996'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1997'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1998'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">9</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">'1999'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">13</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'g2-chart'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> plot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G2Plot<span class="token punctuation">.</span>Line</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'g2折线图示例'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        data<span class="token punctuation">,</span>
        <span class="token literal-property property">xField</span><span class="token operator">:</span> <span class="token string">'year'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yField</span><span class="token operator">:</span> <span class="token string">'value'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'折线图用于表示连续时间跨度内的数据，它通常用于显示某变量随时间的变化模式。'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#FE740C'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">point</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">visible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'white'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'#FE740C'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> v <span class="token operator">+</span> <span class="token string">'k'</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      plot<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>思考：Antv G2 的绘图流程是怎样的？</p>
</blockquote>
<details class="custom-container details">
<ol>
<li>引入 js 库</li>
<li>编写渲染容器 DOM</li>
<li>准备渲染数据</li>
<li>获取渲染 DOM 对象</li>
<li>初始化 G2 绘图对象（如：G2Plot.Line），配置绘图参数</li>
<li>调用 render 完成渲染</li>
</ol>
</details>
<h2 id="g6-案例-绘制矢量图" tabindex="-1">G6 案例：绘制矢量图</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-g6.html"
  width="100%"
  height="400"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://gw.alipayobjects.com/os/antv/pkg/_antv.g6-3.4.8/dist/g6.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g6-chart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token comment">// 点集</span>
        <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'node1'</span><span class="token punctuation">,</span> <span class="token comment">// String，该节点存在则必须，节点的唯一标识</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 x 值</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 y 值</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'起始点'</span><span class="token punctuation">,</span> <span class="token comment">// 节点文本</span>
            <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// 元素的尺寸</span>
            <span class="token literal-property property">labelCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 标签配置属性</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span><span class="token comment">// 标签的属性，标签在元素中的位置</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 包裹标签样式属性的字段 style 与标签其他属性在数据结构上并行</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>     <span class="token comment">// 标签的文字大小</span>
                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>  <span class="token comment">// 标签的文字颜色</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>              <span class="token comment">// 包裹样式属性的字段 style 与其他属性在数据结构上并行</span>
              <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#ff0000'</span><span class="token punctuation">,</span>    <span class="token comment">// 样式属性，元素的填充色</span>
              <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'#888'</span><span class="token punctuation">,</span>     <span class="token comment">// 样式属性，元素的描边色</span>
              <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>       <span class="token comment">// 节点描边粗细</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span> <span class="token comment">// String，该节点存在则必须，节点的唯一标识</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 x 值</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 y 值</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'目标点1'</span><span class="token punctuation">,</span> <span class="token comment">// 节点文本</span>
            <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 元素的尺寸</span>
            <span class="token literal-property property">labelCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 标签配置属性</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span><span class="token comment">// 标签的属性，标签在元素中的位置</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 包裹标签样式属性的字段 style 与标签其他属性在数据结构上并行</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>     <span class="token comment">// 标签的文字大小</span>
                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>  <span class="token comment">// 标签的文字颜色</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>              <span class="token comment">// 包裹样式属性的字段 style 与其他属性在数据结构上并行</span>
              <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#333'</span><span class="token punctuation">,</span>    <span class="token comment">// 样式属性，元素的填充色</span>
              <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>     <span class="token comment">// 样式属性，元素的描边色</span>
              <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>       <span class="token comment">// 节点描边粗细</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'node3'</span><span class="token punctuation">,</span> <span class="token comment">// String，该节点存在则必须，节点的唯一标识</span>
            <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 x 值</span>
            <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// Number，可选，节点位置的 y 值</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'目标点2'</span><span class="token punctuation">,</span> <span class="token comment">// 节点文本</span>
            <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 元素的尺寸</span>
            <span class="token literal-property property">labelCfg</span><span class="token operator">:</span> <span class="token punctuation">{</span>           <span class="token comment">// 标签配置属性</span>
              <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span><span class="token comment">// 标签的属性，标签在元素中的位置</span>
              <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>            <span class="token comment">// 包裹标签样式属性的字段 style 与标签其他属性在数据结构上并行</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>     <span class="token comment">// 标签的文字大小</span>
                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>  <span class="token comment">// 标签的文字颜色</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>              <span class="token comment">// 包裹样式属性的字段 style 与其他属性在数据结构上并行</span>
              <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'green'</span><span class="token punctuation">,</span>    <span class="token comment">// 样式属性，元素的填充色</span>
              <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span>     <span class="token comment">// 样式属性，元素的描边色</span>
              <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>       <span class="token comment">// 节点描边粗细</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">// 边集</span>
        <span class="token literal-property property">edges</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'node1'</span><span class="token punctuation">,</span> <span class="token comment">// String，必须，起始点 id</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span> <span class="token comment">// String，必须，目标点 id</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'连接线1'</span><span class="token punctuation">,</span> <span class="token comment">// 边的文本</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'node2'</span><span class="token punctuation">,</span> <span class="token comment">// String，必须，起始点 id</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'node3'</span><span class="token punctuation">,</span> <span class="token comment">// String，必须，目标点 id</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'连接线2'</span><span class="token punctuation">,</span> <span class="token comment">// 边的文本</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">G6<span class="token punctuation">.</span>Graph</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'g6-chart'</span><span class="token punctuation">,</span> <span class="token comment">// String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token comment">// Number，必须，图的宽度</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// Number，必须，图的高度</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      graph<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取 Step 2 中的数据源到图上</span>
      graph<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 渲染图</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>思考：Antv G6 的绘图流程是怎样的？</p>
</blockquote>
<details class="custom-container details">
<ol>
<li>引入 js 库</li>
<li>编写渲染容器 DOM</li>
<li>准备渲染数据</li>
<li>获取渲染 DOM 对象</li>
<li>初始化 G6 绘图对象（如：G6.Graph），配置绘图参数</li>
<li>调用 render 完成渲染</li>
</ol>
</details>
<h2 id="l7-案例-气泡图" tabindex="-1">L7 案例：气泡图</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-l7.html"
  width="100%"
  height="600"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>创建地图场景<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
       <span class="token selector">html,body</span><span class="token punctuation">{</span><span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
    	<span class="token selector">#map</span> <span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span>100%<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@antv/l7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">

  <span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L7<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'map'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">map</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">L7<span class="token punctuation">.</span>GaodeMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span> <span class="token comment">// 样式URL</span>
      <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120.19382669582967</span><span class="token punctuation">,</span> <span class="token number">30.258134</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token string">'***'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  scene<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'loaded'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>
      <span class="token string">'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json'</span>
    <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        data<span class="token punctuation">.</span>features <span class="token operator">=</span> data<span class="token punctuation">.</span>features<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>properties<span class="token punctuation">.</span>capacity <span class="token operator">></span> <span class="token number">800</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> pointLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">L7<span class="token punctuation">.</span>PointLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token string">'circle'</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token string">'capacity'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">16</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token string">'capacity'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string">'#34B6B7'</span><span class="token punctuation">,</span>
            <span class="token string">'#4AC5AF'</span><span class="token punctuation">,</span>
            <span class="token string">'#5FD3A6'</span><span class="token punctuation">,</span>
            <span class="token string">'#7BE39E'</span><span class="token punctuation">,</span>
            <span class="token string">'#A1EDB8'</span><span class="token punctuation">,</span>
            <span class="token string">'#CEF8D6'</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">active</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        scene<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>pointLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<blockquote>
<p>思考：Antv L7 的绘图流程是怎样的？</p>
</blockquote>
<details class="custom-container details">
<ol>
<li>引入 js 库</li>
<li>编写渲染容器 DOM</li>
<li>初始化地图对象 L7.Scene</li>
<li>请求数据</li>
<li>数据清洗</li>
<li>初始化绘图对象（如：L7.PointLayer）</li>
<li>调用 L7.Scene.addLayer 方法绘图</li>
</ol>
</details>
<blockquote>
<p><a href="https://l7.antv.vision/zh/docs/tutorial/map/amap" target="_blank" rel="noopener noreferrer">查看<ExternalLinkIcon/></a>高德地图 key 获取方法</p>
</blockquote>
</div></template>


