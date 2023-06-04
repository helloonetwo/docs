<template><div><h1 id="后端框架搭建" tabindex="-1">后端框架搭建</h1>
<h2 id="node-简介" tabindex="-1">Node 简介</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://github.com/nodejs/node" target="_blank" rel="noopener noreferrer">查看<ExternalLinkIcon/></a> node 源码</p>
</div>
<p>Node 是一个基于 V8 引擎的 Javascript 运行环境，它使得 Javascript 可以运行在服务端，直接与操作系统进行交互，与文件控制、网络交互、进程控制等</p>
<blockquote>
<p>Chrome 浏览器同样是集成了 V8 引擎的 Javascript 运行环境，与 Node 不同的是他们向 Javascript 注入的内容不同，Chrome 向 Javascript 注入了 window 对象，Node 注入的是 global，这使得两者应用场景完全不同，Chrome 的 Javascript 所有指令都需要通过 Chrome 浏览器作为中介实现</p>
</blockquote>
<h2 id="express-简介" tabindex="-1">Express 简介</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p><a href="https://github.com/expressjs/express" target="_blank" rel="noopener noreferrer">查看<ExternalLinkIcon/></a> express 源码</p>
</div>
<p>express 是一个轻量级的 Node Web 服务端框架，同样是一个人气超高的项目，它可以帮助我们快速搭建基于 Node 的 Web 应用</p>
<h2 id="项目初始化" tabindex="-1">项目初始化</h2>
<p>创建项目</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> admin-imooc-node
<span class="token builtin class-name">cd</span> admin-imooc-node
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-S</span> express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 app.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>

<span class="token comment">// 创建 express 应用</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 监听 / 路径的 get 请求</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello node'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 使 express 监听 5000 端口号发起的 http 请求</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> address<span class="token punctuation">,</span> port <span class="token punctuation">}</span> <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Http Server is running on http://%s:%s'</span><span class="token punctuation">,</span> address<span class="token punctuation">,</span> port<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="express-三大基础概念" tabindex="-1">Express 三大基础概念</h2>
<h3 id="中间件" tabindex="-1">中间件</h3>
<p>中间件是一个函数，在请求和响应周期中被顺序调用</p>
<blockquote>
<p>Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">myLogger</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'myLogger'</span><span class="token punctuation">)</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myLogger<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>提示：中间件需要在响应结束前被调用</p>
</div>
<h3 id="路由" tabindex="-1">路由</h3>
<p>应用如何响应请求的一种规则</p>
<blockquote>
<p>Routing refers to how an application’s endpoints (URIs) respond to client requests.</p>
</blockquote>
<p>响应 / 路径的 get 请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello node'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应 / 路径的 post 请求：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'hello node'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>规则主要分两部分：</p>
<ul>
<li>请求方法：get、post......</li>
<li>请求的路径：/、/user、/.*fly$/......</li>
</ul>
<h3 id="异常处理" tabindex="-1">异常处理</h3>
<p>通过自定义异常处理中间件处理请求中产生的异常</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'something has error...'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'errorHandler...'</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'down...'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>errorHandler<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>使用时需要注意两点：</p>
<ul>
<li>第一，参数一个不能少，否则会视为普通的中间件</li>
<li>第二，中间件需要在请求之后引用</li>
</ul>
</div>
<h2 id="项目框架搭建" tabindex="-1">项目框架搭建</h2>
<h3 id="路由-1" tabindex="-1">路由</h3>
<p>安装 boom 依赖：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-S</span> boom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建 router 文件夹，创建 router/index.js：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> boom <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'boom'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> userRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./user'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">CODE_ERROR</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'../utils/constant'</span><span class="token punctuation">)</span>

<span class="token comment">// 注册路由</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'欢迎学习小慕读书管理后台'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 通过 userRouter 来处理 /user 路由，对路由处理进行解耦</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> userRouter<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span>boom<span class="token punctuation">.</span><span class="token function">notFound</span><span class="token punctuation">(</span><span class="token string">'接口不存在'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 自定义路由异常处理中间件
 * 注意两点：
 * 第一，方法的参数不能减少
 * 第二，方法的必须放在路由最后
 */</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token punctuation">(</span>err <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'系统错误'</span>
  <span class="token keyword">const</span> statusCode <span class="token operator">=</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>output <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>output<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">500</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> errorMsg <span class="token operator">=</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>output <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>output<span class="token punctuation">.</span>payload <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>output<span class="token punctuation">.</span>payload<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token operator">||</span> err<span class="token punctuation">.</span>message
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token constant">CODE_ERROR</span><span class="token punctuation">,</span>
    msg<span class="token punctuation">,</span>
    <span class="token literal-property property">error</span><span class="token operator">:</span> statusCode<span class="token punctuation">,</span>
    errorMsg
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 router/use.js：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/info'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'user info...'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 utils/constant：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">CODE_ERROR</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证 /user/info：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token string">"user info..."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证 /user/login：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"code"</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span><span class="token property">"msg"</span><span class="token operator">:</span><span class="token string">"接口不存在"</span><span class="token punctuation">,</span><span class="token property">"error"</span><span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">,</span><span class="token property">"errorMsg"</span><span class="token operator">:</span><span class="token string">"Not Found"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


