<template><div><h1 id="webgl" tabindex="-1">WebGL</h1>
<p>WebGL（Web Graphics Library）是一种 3D 绘图协议，WebGL可以为 HTML5 Canvas 提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。</p>
<h2 id="webgl-案例分享" tabindex="-1">WebGL 案例分享</h2>
<ul>
<li><a href="http://www.randelshofer.ch/webgl/rubikscube/" target="_blank" rel="noopener noreferrer">案例1：3D 魔方<ExternalLinkIcon/></a></li>
<li><a href="https://web.chemdoodle.com/demos/molgrabber-3d" target="_blank" rel="noopener noreferrer">案例2：化学模型<ExternalLinkIcon/></a></li>
<li><a href="http://www.webglearth.com/" target="_blank" rel="noopener noreferrer">案例3：3D 地球<ExternalLinkIcon/></a></li>
<li><a href="https://www.biodigital.com/" target="_blank" rel="noopener noreferrer">案例4：3D 大脑<ExternalLinkIcon/></a></li>
</ul>
<h2 id="webgl-绘制点" tabindex="-1">WebGL 绘制点</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-webgl.html"
  width="100%"
  height="300"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//顶点着色器程序</span>
      <span class="token keyword">var</span> <span class="token constant">VSHADER_SOURCE</span> <span class="token operator">=</span>
          <span class="token string">"void main() {"</span> <span class="token operator">+</span>
              <span class="token comment">//设置坐标</span>
          <span class="token string">"gl_Position = vec4(0.0, 0.0, 0.0, 1.0); "</span> <span class="token operator">+</span>
              <span class="token comment">//设置尺寸</span>
          <span class="token string">"gl_PointSize = 10.0; "</span> <span class="token operator">+</span>
          <span class="token string">"} "</span><span class="token punctuation">;</span>
    
      <span class="token comment">//片元着色器</span>
      <span class="token keyword">var</span> <span class="token constant">FSHADER_SOURCE</span> <span class="token operator">=</span>
          <span class="token string">"void main() {"</span> <span class="token operator">+</span>
              <span class="token comment">//设置颜色</span>
          <span class="token string">"gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);"</span> <span class="token operator">+</span>
          <span class="token string">"}"</span><span class="token punctuation">;</span>
      <span class="token comment">//获取canvas元素</span>
      <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'canvas'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//获取绘制二维上下文</span>
      <span class="token keyword">var</span> gl <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'webgl'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>gl<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//编译着色器</span>
      <span class="token keyword">var</span> vertShader <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">VERTEX_SHADER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">shaderSource</span><span class="token punctuation">(</span>vertShader<span class="token punctuation">,</span> <span class="token constant">VSHADER_SOURCE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">compileShader</span><span class="token punctuation">(</span>vertShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
      <span class="token keyword">var</span> fragShader <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createShader</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">FRAGMENT_SHADER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">shaderSource</span><span class="token punctuation">(</span>fragShader<span class="token punctuation">,</span> <span class="token constant">FSHADER_SOURCE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">compileShader</span><span class="token punctuation">(</span>fragShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//合并程序</span>
      <span class="token keyword">var</span> shaderProgram <span class="token operator">=</span> gl<span class="token punctuation">.</span><span class="token function">createProgram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">attachShader</span><span class="token punctuation">(</span>shaderProgram<span class="token punctuation">,</span> vertShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">attachShader</span><span class="token punctuation">(</span>shaderProgram<span class="token punctuation">,</span> fragShader<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">linkProgram</span><span class="token punctuation">(</span>shaderProgram<span class="token punctuation">)</span><span class="token punctuation">;</span>
      gl<span class="token punctuation">.</span><span class="token function">useProgram</span><span class="token punctuation">(</span>shaderProgram<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
      <span class="token comment">//绘制一个点</span>
      gl<span class="token punctuation">.</span><span class="token function">drawArrays</span><span class="token punctuation">(</span>gl<span class="token punctuation">.</span><span class="token constant">POINTS</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


