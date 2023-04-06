import{_ as l,c as i,o as e,N as a}from"./chunks/framework.1e6a71f2.js";const g=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"articles/浏览器.md"}'),o={name:"articles/浏览器.md"},t=a('<h1 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h1><h2 id="重绘-repaint-和回流-reflow" tabindex="-1">重绘（Repaint）和回流（Reflow） <a class="header-anchor" href="#重绘-repaint-和回流-reflow" aria-label="Permalink to &quot;重绘（Repaint）和回流（Reflow）&quot;">​</a></h2><ul><li>回流：对DOM树进行渲染，只要修改DOM或修改元素的形状大小，就会触发reflow，reflow的时候，浏览器会使已渲染好受到影响的部分失效，并重新构造这部分，完成reflow后，浏览器会重新绘制受影响的部分到屏幕中。</li><li>重绘：当对DOM的修改导致样式变化，但未影响几何属性时，浏览器不需要重新计算元素的几何属性，直接可以为该元素绘制新的样式，跳过了回流环节，这个过程就叫重绘。</li><li>回流必定会发生重绘，重绘不一定会引发回流！</li><li>如何减少回流、重绘？（减少回流、重绘就是减少对DOM的操作） <ul><li>直接改变className，如果动态改变样式，则使用cssText（减少设置多项内联样式）</li><li>让要操作的元素进行“离线处理”，处理完后一起更新</li><li>不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存</li><li>让元素脱离动画流，减少render树的规模</li><li>牺牲平滑度换取速度</li><li>避免使用table布局</li><li>IE中避免使用javascript表达式</li></ul></li></ul><h2 id="浏览器缓存" tabindex="-1">浏览器缓存 <a class="header-anchor" href="#浏览器缓存" aria-label="Permalink to &quot;浏览器缓存&quot;">​</a></h2><ul><li>定义：把一个已经请求过的web资源（如html页面，图片，js，数据等）拷贝一份副本储存在浏览器中，缓存会根据进来的请求保存输出内容的副本</li><li>为什么使用缓存？-（1）减少网络带宽消耗；（2）降低服务器压力；（3）减少网络延迟，加快页面打开速度</li><li>浏览器端的缓存规则：新鲜度（过期机制）+校验值（验证机制）两个维度</li></ul><h2 id="sessionstorage和localstorage和cookie的区别" tabindex="-1">sessionstorage和localstorage和cookie的区别 <a class="header-anchor" href="#sessionstorage和localstorage和cookie的区别" aria-label="Permalink to &quot;sessionstorage和localstorage和cookie的区别&quot;">​</a></h2><p><strong>共同点</strong></p><p>三者都是浏览器的本地存储。</p><p><strong>区别</strong></p><ul><li>cookie是由服务器端写入的，而sessionstorage和localstorage都是由前端写入的</li><li>cookie的生命周期是由服务器端在写入时就设置好的，localstorage是写入就一直存在，除非手动清除，sessionstorage是页面关闭的时候就会自动清除。</li><li>cookie的存储空间比较小大概4KB，sessionstorage和localstorage存储空间比较大，大概5M</li><li>sessionstorage和localstorage和cookie数据共享都遵循同源原则，sessionstorage还限制必须是同一个页面</li></ul><h2 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h2><p>跨域：当前页面中的某个接口请求的地址和当前页面的地址如果协议、域名、端口其中有一项不同，就说明该接口跨域了。<br> 跨域限制的原因：浏览器为了保证网页的安全，出的同源协议策略。<br> 跨域解决方案：</p><ul><li>cors：通过设置后端允许跨域实现</li><li>nodejs中间件、nginx反向代理</li><li>JSONP</li><li>document.domain + iframe跨域</li><li>postmessage：H5新增API，通过发送和接收API实现跨域通信</li><li>后端在头部信息里设置安全域名</li></ul><p>跨域场景：前后端分离式开发、调用第三方接口。</p><h2 id="浏览器内核线程" tabindex="-1">浏览器内核线程 <a class="header-anchor" href="#浏览器内核线程" aria-label="Permalink to &quot;浏览器内核线程&quot;">​</a></h2><ul><li>浏览器内核是指浏览器的渲染引擎，负责解析和渲染网页。</li><li>浏览器内核包括多个线程，每个线程负责相关工作，常见的线程有： <ul><li>GUI渲染线程：负责调用GPU进行界面渲染，包括解析HTML、CSS、构建DOM树、CSSOM、Layout、Layer等。</li><li>JS引擎线程：负责处理执行JavaScript脚本，这是JS的主线程，所以JS是单线程的编程语言。</li><li>事件触发线程：负责管理事件队列，当事件符合触发条件时，将事件添加到待处理队列（宏任务）的队尾，等待JS引擎的处理。</li><li>定时器触发线程：负责管理定时器（setTimeout、setInterval等），当定时器到期时，将定时器回调函数添加到待处理队列（宏任务）的队尾，等待JS引擎的处理。</li><li>异步http请求线程：负责发送异步请求（XMLHttpRequest等），当请求完成或失败时，将回调函数添加到待处理队列（宏任务或微任务）的队尾，等待JS引擎的处理。</li></ul></li></ul><h2 id="前端安全" tabindex="-1">前端安全 <a class="header-anchor" href="#前端安全" aria-label="Permalink to &quot;前端安全&quot;">​</a></h2><ul><li>cookie挟持-防御：给cookie添加HttpOnly属性；在cookie中添加校验信息；cookie中session id的定时更换</li><li>XSS跨站脚本攻击（反射型；储存型；DOM型）-防御：标签过滤；编码</li><li>CSRF跨站点请求伪造-防御：验证码</li><li>点击挟持</li></ul>',18),s=[t];function r(n,c,h,u,d,p){return e(),i("div",null,s)}const f=l(o,[["render",r]]);export{g as __pageData,f as default};
