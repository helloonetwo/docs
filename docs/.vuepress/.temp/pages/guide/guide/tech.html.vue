<template><div><h1 id="数据可视化前端技术选型" tabindex="-1">数据可视化前端技术选型</h1>
<h2 id="数据可视化解决方案" tabindex="-1">数据可视化解决方案</h2>
<p>前端数据可视化解决方案如下：</p>
<p><img src="https://book.youbaobao.xyz/datav-res/datav/datav-tech-arch.png" alt="可视化解决方案"></p>
<h2 id="skia" tabindex="-1">Skia</h2>
<p><a href="https://github.com/google/skia" target="_blank" rel="noopener noreferrer">Skia<ExternalLinkIcon/></a> 是 Chrome 和 Android 的底层 2D 绘图引擎，具体可参考<a href="https://baike.baidu.com/item/skia/1287196" target="_blank" rel="noopener noreferrer">百度百科<ExternalLinkIcon/></a>，Skia 采用 C++ 编程，由于它位于浏览器的更底层，所以我们平常接触较少</p>
<blockquote>
<p>对底层绘图感兴趣的同学可以从这个<a href="http://www.kevinbeason.com/smallpt/" target="_blank" rel="noopener noreferrer">案例<ExternalLinkIcon/></a>入手，了解一下 C++ 的可视化编程。</p>
</blockquote>
<h2 id="opengl" tabindex="-1">OpenGL</h2>
<p>OpenGL（Open Graphics Library）是2D、3D图形渲染库，它可以绘制从简单的2D图形到复杂的3D景象。OpenGL 常用于 CAD、VR、数据可视化和游戏等众多领域。</p>
<h2 id="chrome" tabindex="-1">Chrome</h2>
<p>Chrome 使用 Skia 作为绘图引擎，向上层开放了 canvas、svg、WebGL、HTML 等绘图能力。</p>
</div></template>


