<template><div><h1 id="高德地图进阶" tabindex="-1">高德地图进阶</h1>
<h2 id="自定义弹窗" tabindex="-1">自定义弹窗</h2>
<iframe 
  src="https://www.youbaobao.xyz/datav-res/examples/test-amap-info.html"
  width="100%"
  height="400"
/>
<details class="custom-container details">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initial-scale=1.0, user-scalable=no, width=device-width<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>默认样式信息窗体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">html, body, #container</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.content-window-card</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
            <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.content-window-card p</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.custom-info</span> <span class="token punctuation">{</span>
            <span class="token property">border</span><span class="token punctuation">:</span> solid 1px silver<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-top</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> none repeat scroll 0 0 #F9F9F9<span class="token punctuation">;</span>
            <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #CCC<span class="token punctuation">;</span>
            <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px 5px 0 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-top div</span> <span class="token punctuation">{</span>
            <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #333333<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
            <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 31px<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-top img</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
            <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
            <span class="token property">transition-duration</span><span class="token punctuation">:</span> 0.25s<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-top img:hover</span> <span class="token punctuation">{</span>
            <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 5px #000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-middle</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 10px 6px<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-bottom</span> <span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
            <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">div.info-bottom img</span> <span class="token punctuation">{</span>
            <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
            <span class="token property">z-index</span><span class="token punctuation">:</span> 104<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">span</span> <span class="token punctuation">{</span>
            <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">.info-middle img</span> <span class="token punctuation">{</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    点击地图上的点标记，打开所添加的自定义信息窗体
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://webapi.amap.com/maps?v=1.4.15&amp;key=您申请的key值<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">    <span class="token comment">//地图初始化时，在地图上添加一个marker标记,鼠标点击marker可弹出自定义的信息窗体</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"container"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resizeEnable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.784902</span><span class="token punctuation">,</span><span class="token number">32.044077</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">16</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">addMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加marker标记</span>
<span class="token keyword">function</span> <span class="token function">addMarker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">clearMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> marker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">map</span><span class="token operator">:</span> map<span class="token punctuation">,</span>
			<span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">118.784902</span><span class="token punctuation">,</span><span class="token number">32.044077</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//鼠标点击marker弹出自定义的信息窗体</span>
    AMap<span class="token punctuation">.</span>event<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>marker<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			infoWindow<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>map<span class="token punctuation">,</span> marker<span class="token punctuation">.</span><span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//实例化信息窗体</span>
<span class="token keyword">var</span> title <span class="token operator">=</span> <span class="token string">'南京德基广场&lt;span style="font-size:11px;color:#F00;">周末促销&lt;/span>'</span><span class="token punctuation">,</span>
    content <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
content<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"&lt;img src='https://bkimg.cdn.bcebos.com/pic/962bd40735fae6cdc054821d03b30f2443a70fed?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg' style='width:200px;height:140px'>地址：南京市玄武区中山路18号"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
content<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"电话：025-88888888"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
content<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"&lt;a href='https://m.dejiplaza.com/vmall/index'>详细信息&lt;/a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> infoWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>InfoWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">isCustom</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//使用自定义窗体</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token function">createInfoWindow</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> content<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"&lt;br/>"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Pixel</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">45</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//构建自定义信息窗体</span>
<span class="token keyword">function</span> <span class="token function">createInfoWindow</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    info<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"custom-info input-card content-window-card"</span><span class="token punctuation">;</span>

    <span class="token comment">//可以通过下面的方式修改自定义窗体的宽高</span>
    <span class="token comment">//info.style.width = "400px";</span>
    <span class="token comment">// 定义顶部标题</span>
    <span class="token keyword">var</span> top <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> titleD <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> closeX <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    top<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"info-top"</span><span class="token punctuation">;</span>
    titleD<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> title<span class="token punctuation">;</span>
    closeX<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"https://webapi.amap.com/images/close2.gif"</span><span class="token punctuation">;</span>
    closeX<span class="token punctuation">.</span>onclick <span class="token operator">=</span> closeInfoWindow<span class="token punctuation">;</span>

    top<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>titleD<span class="token punctuation">)</span><span class="token punctuation">;</span>
    top<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>closeX<span class="token punctuation">)</span><span class="token punctuation">;</span>
    info<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义中部内容</span>
    <span class="token keyword">var</span> middle <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    middle<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"info-middle"</span><span class="token punctuation">;</span>
    middle<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'white'</span><span class="token punctuation">;</span>
    middle<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> content<span class="token punctuation">;</span>
    info<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>middle<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 定义底部内容</span>
    <span class="token keyword">var</span> bottom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bottom<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">"info-bottom"</span><span class="token punctuation">;</span>
    bottom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'relative'</span><span class="token punctuation">;</span>
    bottom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">'0px'</span><span class="token punctuation">;</span>
    bottom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>margin <span class="token operator">=</span> <span class="token string">'0 auto'</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> sharp <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"img"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sharp<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"https://webapi.amap.com/images/sharp.png"</span><span class="token punctuation">;</span>
    bottom<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>sharp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    info<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> info<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//关闭信息窗体</span>
<span class="token keyword">function</span> <span class="token function">closeInfoWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">clearInfoWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


