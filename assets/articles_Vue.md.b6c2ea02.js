import{_ as a,o as e,c as l,S as i}from"./chunks/framework.ad333ad2.js";const t="/shengmingzhouqi.png",o="/zujiantongxin.png",s="/vue2_xuanran.png",r="/shujubangding.png",q=JSON.parse('{"title":"Vue","description":"","frontmatter":{"tag":["前端"]},"headers":[],"relativePath":"articles/Vue.md","lastUpdated":1681714748000}'),n={name:"articles/Vue.md"},u=i('<h1 id="vue" tabindex="-1">Vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;Vue&quot;">​</a></h1><h2 id="vue核心特性" tabindex="-1">Vue核心特性 <a class="header-anchor" href="#vue核心特性" aria-label="Permalink to &quot;Vue核心特性&quot;">​</a></h2><h3 id="数据驱动-mvvm" tabindex="-1">数据驱动（MVVM） <a class="header-anchor" href="#数据驱动-mvvm" aria-label="Permalink to &quot;数据驱动（MVVM）&quot;">​</a></h3><ul><li>Model：模型层，负责处理业务逻辑以及和服务器端进行交互</li><li>View：视图层：负责将数据模型转化为UI展示出来，可以简单的理解为HTML页面</li><li>ViewModel：视图模型层，用来连接Model和View，是Model和View之间的通信桥梁</li></ul><h3 id="组件化" tabindex="-1">组件化 <a class="header-anchor" href="#组件化" aria-label="Permalink to &quot;组件化&quot;">​</a></h3><ul><li>降低整个系统的耦合度</li><li>调试方便</li><li>提高可维护性</li></ul><h3 id="指令系统" tabindex="-1">指令系统 <a class="header-anchor" href="#指令系统" aria-label="Permalink to &quot;指令系统&quot;">​</a></h3><p>常用指令：</p><ul><li>条件渲染指令v-if</li><li>列表渲染指令v-for</li><li>属性绑定指令v-bind</li><li>事件绑定指令v-on</li><li>双向数据绑定指令v-model</li></ul><h2 id="vue相较于原生js的优点" tabindex="-1">Vue相较于原生JS的优点 <a class="header-anchor" href="#vue相较于原生js的优点" aria-label="Permalink to &quot;Vue相较于原生JS的优点&quot;">​</a></h2><ul><li>1.数据的自动绑定</li><li>2.页面参数传递和页面状态管理</li><li>3.模块化开发、无刷新保留场景参数更新</li><li>4.代码的可阅读性（模块化开发带来的）</li><li>5.基于强大的nodejs，拥有npm包管理器，可以很好滴管理包的版本</li><li>6.各子组件样式不冲突</li><li>7.视图,数据,结构分离</li><li>8.虚拟dom</li><li>9.各种指令;过滤器</li></ul><h2 id="vue3为何比vue2快" tabindex="-1">Vue3为何比Vue2快 <a class="header-anchor" href="#vue3为何比vue2快" aria-label="Permalink to &quot;Vue3为何比Vue2快&quot;">​</a></h2><ul><li>proxy响应式，比如说对象深度监听的时候比Vue2的Object.defineProperty快，因为proxy不用监听所有的，深度监听只会递归触发getter的</li><li>patchFlag（diff算法优化）</li><li>hoistStatic</li><li>cacheHandler</li><li>SSR优化</li><li>tree-Shaking</li></ul><h2 id="vue和react对比" tabindex="-1">Vue和React对比 <a class="header-anchor" href="#vue和react对比" aria-label="Permalink to &quot;Vue和React对比&quot;">​</a></h2><h3 id="相同点" tabindex="-1">相同点 <a class="header-anchor" href="#相同点" aria-label="Permalink to &quot;相同点&quot;">​</a></h3><ul><li>都有组件化思想</li><li>都支持服务器端渲染</li><li>都有Virtual DOM（虚拟dom）</li><li>数据驱动视图</li><li>都有支持native的方案：Vue的weex、React的React native</li><li>都有自己的构建工具：Vue的vue-cli、React的Create React App</li></ul><h3 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h3><ul><li>数据流向的不同。react从诞生开始就推崇单向数据流，而Vue是双向数据流</li><li>数据变化的实现原理不同。react使用的是不可变数据，而Vue使用的是可变的数据</li><li>组件化通信的不同。react中我们通过使用回调函数来进行通信的，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数</li><li>diff算法不同。react主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。Vue 使用双向指针，边对比，边更新DOM</li></ul><h2 id="v-if和v-show" tabindex="-1">v-if和v-show <a class="header-anchor" href="#v-if和v-show" aria-label="Permalink to &quot;v-if和v-show&quot;">​</a></h2><h3 id="相同点-1" tabindex="-1">相同点 <a class="header-anchor" href="#相同点-1" aria-label="Permalink to &quot;相同点&quot;">​</a></h3><ul><li>都能控制DOM元素在页面的显示</li></ul><h3 id="区别-1" tabindex="-1">区别 <a class="header-anchor" href="#区别-1" aria-label="Permalink to &quot;区别&quot;">​</a></h3><ul><li>v-if是动态添加，当值为false时，是完全移除该元素，即DOM树中不存在该元素</li><li>v-show仅是隐藏/显示，值为false时，该元素依旧存在于DOM树中</li><li>v-if比v-show开销更大（直接操作DOM节点增加与删除）</li><li>如果需要非常频繁地切换，则使用 v-show 较好</li><li>如果在运行时条件很少改变，则使用 v-if 较好</li></ul><h2 id="v-if和v-for" tabindex="-1">v-if和v-for <a class="header-anchor" href="#v-if和v-for" aria-label="Permalink to &quot;v-if和v-for&quot;">​</a></h2><p>v-for比v-if优先级高，所以使用的话，每次v-for都会执行v-if,造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。</p><p>v-for为什么要设置key？</p><ul><li>通过只在循环渲染同级元素的时候才需要设置 key，设置 key 主要是为了提高 dom diff 的效率。</li><li>如果没有设置 key ，那么 Vue 就会 “就地复用”，如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素。</li></ul><h2 id="vue实例挂载的过程" tabindex="-1">Vue实例挂载的过程 <a class="header-anchor" href="#vue实例挂载的过程" aria-label="Permalink to &quot;Vue实例挂载的过程&quot;">​</a></h2><ul><li>new Vue的时候调用会调用_init方法 <ul><li>定义 $set、$get 、$delete、$watch 等方法</li><li>定义 $on、$off、$emit、$off等事件</li><li>定义 _update、$forceUpdate、$destroy生命周期</li></ul></li><li>调用$mount进行页面的挂载</li><li>挂载的时候主要是通过mountComponent方法</li><li>定义updateComponent更新函数</li><li>执行render生成虚拟DOM</li><li>_update将虚拟DOM生成真实DOM结构，并且渲染到页面中</li></ul><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><p><img src="'+t+'" alt="An image"></p><h2 id="组件间通信" tabindex="-1">组件间通信 <a class="header-anchor" href="#组件间通信" aria-label="Permalink to &quot;组件间通信&quot;">​</a></h2><h3 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h3><p><img src="'+o+`" alt="An image"></p><h3 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h3><p><strong>props传递数据</strong></p><ul><li>适用场景：父组件传递数据给子组件</li><li>子组件设置props属性，定义接收父组件传递过来的参数</li><li>父组件在使用子组件标签中通过字面量来传递值</li></ul><p><strong>$emit触发自定义事件</strong></p><ul><li>适用场景：子组件传递数据给父组件</li><li>子组件通过$emit触发自定义事件，$emit第二个参数为传递的数值</li><li>父组件绑定监听器获取到子组件传递过来的参数</li></ul><p><strong>ref</strong></p><ul><li>父组件在使用子组件的时候设置ref</li><li>父组件通过设置子组件ref来获取数据</li></ul><p><strong>EventBus</strong></p><ul><li>使用场景：兄弟组件传值</li><li>创建一个中央事件总线EventBus</li><li>兄弟组件通过$emit触发自定义事件，$emit第二个参数为传递的数值</li><li>另一个兄弟组件通过$on监听自定义事件</li></ul><p><strong>$parent或$root</strong></p><ul><li>通过共同祖辈 $parent 或者 $root 搭建通信桥连</li><li>兄弟组件</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">this.$parent.on(&#39;add&#39;,this.add)</span></span>
<span class="line"></span></code></pre></div><ul><li>另一个兄弟组件</li></ul><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">this.$parent.emit(&#39;add&#39;)</span></span>
<span class="line"></span></code></pre></div><h2 id="mixin" tabindex="-1">mixin <a class="header-anchor" href="#mixin" aria-label="Permalink to &quot;mixin&quot;">​</a></h2><ul><li>mixin 使我们能够为 Vue 组件编写可插拔和可重用的功能。如果希望在多个组件之间重用一组组件选项，例如生命周期 hook、 方法等，则可以将其编写为 mixin，并在组件中简单的引用它</li><li>替换型策略有props、methods、inject、computed，就是将新的同名参数替代旧的参数</li><li>合并型策略是data, 通过set方法进行合并和重新赋值</li><li>队列型策略有生命周期函数和watch，原理是将函数存入一个数组，然后正序遍历依次执行</li><li>叠加型有component、directives、filters，通过原型链进行层层的叠加</li></ul><h2 id="虚拟dom" tabindex="-1">虚拟DOM <a class="header-anchor" href="#虚拟dom" aria-label="Permalink to &quot;虚拟DOM&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><ul><li>它是一层对真实DOM的抽象，以JavaScript 对象 (VNode 节点) 作为基础的树，用对象的属性来描述节点，最终可以通过一系列操作使这棵树映射到真实环境上。</li><li>在Javascript对象中，虚拟DOM表现为一个Object对象。并且最少包含标签名 (tag)、属性 (attrs) 和子元素对象 (children) 三个属性。</li><li>创建虚拟DOM就是为了更好将虚拟的节点渲染到页面视图中，所以虚拟DOM对象的节点与真实DOM的属性一一照应。</li></ul><h3 id="为什么要用虚拟dom" tabindex="-1">为什么要用虚拟DOM <a class="header-anchor" href="#为什么要用虚拟dom" aria-label="Permalink to &quot;为什么要用虚拟DOM&quot;">​</a></h3><p>操作DOM的代价是昂贵的，频繁操作会出现页面卡顿，影响用户的体验。</p><h3 id="虚拟dom解析过程" tabindex="-1">虚拟DOM解析过程 <a class="header-anchor" href="#虚拟dom解析过程" aria-label="Permalink to &quot;虚拟DOM解析过程&quot;">​</a></h3><ul><li>首先对将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 TagName、props 和 Children 这些属性。然后将这个js 对象树给保存下来，最后再将 DOM 片段插入到文档中。</li><li>当页面的状态发生改变，需要对页面的 DOM 的结构进行调整的时候，首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。</li><li>最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。</li></ul><h3 id="如何实现虚拟dom" tabindex="-1">如何实现虚拟DOM <a class="header-anchor" href="#如何实现虚拟dom" aria-label="Permalink to &quot;如何实现虚拟DOM&quot;">​</a></h3><p>createElement 创建 VNode 的过程，每个 VNode 有 children，children 每个元素也是一个VNode，这样就形成了一个虚拟树结构，用于描述真实的DOM树结构。</p><h3 id="diff算法概述" tabindex="-1">diff算法概述 <a class="header-anchor" href="#diff算法概述" aria-label="Permalink to &quot;diff算法概述&quot;">​</a></h3><p>在新老虚拟DOM对比时：</p><ul><li>首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换</li><li>如果为相同节点，进行patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的children没有子节点，将旧的子节点移除)</li><li>比较如果都有子节点，则进行updateChildren，判断如何对这些新老节点的子节点进行操作（diff核心）</li><li>匹配时，找到相同的子节点，递归比较子节点</li></ul><p>在diff中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从O(n3)降低至O(n)，也就是说，只有当新旧children都为多个子节点时才需要用核心的Diff算法进行同层级比较。</p><h2 id="vue2渲染过程" tabindex="-1">Vue2渲染过程 <a class="header-anchor" href="#vue2渲染过程" aria-label="Permalink to &quot;Vue2渲染过程&quot;">​</a></h2><ul><li>ComponentRenderFunciton是一个Render函数，此时模板已经编译完成，生成render函数</li><li>render函数生成一个V-DOMTree</li><li>在render函数执行render到V-DOMTree时，会touch数据，也就是执行函数的时候会触发data中的getter</li><li>当触发了getter后这个data就会被wather观察起来，其实就是我们在编译模板的时候触发了哪个数据哪个数据就会被观察起来</li><li>当我们修改data的时候，会触发setter，此时回去watcher中看这个data是否被观察</li><li>如果是被观察的data，那么就重新触发渲染re-render <img src="`+s+'" alt="An image"></li></ul><h2 id="双向绑定数据原理" tabindex="-1">双向绑定数据原理 <a class="header-anchor" href="#双向绑定数据原理" aria-label="Permalink to &quot;双向绑定数据原理&quot;">​</a></h2><p>Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。主要分为以下几个步骤：</p><ol><li>需要observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化</li><li>compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</li><li>Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:</li></ol><ul><li>在自身实例化时往属性订阅器(dep)里面添加自己</li><li>自身必须有一个update()方法</li><li>待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退</li></ul><ol start="4"><li>MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 &gt; 视图更新；视图交互变化(input) &gt; 数据model变更的双向绑定效果 <img src="'+r+`" alt="An image"></li></ol><h2 id="vue3-0与vue2-0的区别" tabindex="-1">Vue3.0与Vue2.0的区别 <a class="header-anchor" href="#vue3-0与vue2-0的区别" aria-label="Permalink to &quot;Vue3.0与Vue2.0的区别&quot;">​</a></h2><h3 id="双向数据绑定原理不同" tabindex="-1">双向数据绑定原理不同 <a class="header-anchor" href="#双向数据绑定原理不同" aria-label="Permalink to &quot;双向数据绑定原理不同&quot;">​</a></h3><ul><li>vue2-ES5的API-Object.definePropert()对数据进行劫持，结合发布订阅模式的方式来实现的。通过Object.defineProperty()方法来劫持（监听）各属性的getter、setter，并在当监听的属性发生变动时通知订阅者是否需要更新，若更新就会执行对应的更新函数；在我们使用数据其实就会触发getter，当我们触发getter之后就会将这个数据放入watcher中进行观察，如果数据发生了改变，我们就会去watcher中查找看是否已经观测了这个数据，观测的话就触发setter进行数据更新。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zhangsan</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">get</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">set</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">newVal</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">set</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newVal</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 测试</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name) </span><span style="color:#676E95;font-style:italic;">// get zhangsan</span></span>
<span class="line"><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lisi</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// set</span></span>
<span class="line"></span></code></pre></div><ul><li>vue3-ES6的Proxy API对数据代理，优势：1、defineProperty只能监听某个属性，不能对全对象监听；2、可以省去for in，闭包等内容来提升效率(直接绑定整个对象即可)；3、可以监听数组，不用再去单独的对数组做特异性操作，vue3.x可以检测到数组内部数据的变化。</li></ul><h3 id="是否支持碎片" tabindex="-1">是否支持碎片 <a class="header-anchor" href="#是否支持碎片" aria-label="Permalink to &quot;是否支持碎片&quot;">​</a></h3><p>vue3支持，就是说可以拥有多个根节点。</p><h3 id="api类型不同" tabindex="-1">API类型不同 <a class="header-anchor" href="#api类型不同" aria-label="Permalink to &quot;API类型不同&quot;">​</a></h3><ul><li>vue2-选项类型API在代码里分割了不同的属性</li><li>vue3-合成型API能让我们使用方法来分割</li></ul><h3 id="定义数据变量和方法不同" tabindex="-1">定义数据变量和方法不同 <a class="header-anchor" href="#定义数据变量和方法不同" aria-label="Permalink to &quot;定义数据变量和方法不同&quot;">​</a></h3><ul><li>vue2-数据变量：data(){}，方法：methods:{}；</li><li>vue3-使用一个新的setup()方法，此方法在组件初始化构造的时候触发，使用以下三个步骤建立反应性数据：1、从vue引入reactive；2、使用reactive（）方法来声明数据为响应型数据；3、使用setup()方法来返回响应性数据，从而template可以获取这些响应型数据</li></ul><h3 id="生命周期钩子函数不同" tabindex="-1">生命周期钩子函数不同 <a class="header-anchor" href="#生命周期钩子函数不同" aria-label="Permalink to &quot;生命周期钩子函数不同&quot;">​</a></h3><p>vue2：</p><ul><li>beforeCreate 组件创建之前</li><li>created 组件创建之后</li><li>beforeMount 组价挂载到页面之前执行</li><li>mounted 组件挂载到页面之后执行</li><li>beforeUpdate 组件更新之前</li><li>updated 组件更新之后</li></ul><p>vue3：</p><ul><li>setup 开始创建组件</li><li>onBeforeMount 组价挂载到页面之前执行</li><li>onMounted 组件挂载到页面之后执行</li><li>onBeforeUpdate 组件更新之前</li><li>onUpdated 组件更新之后</li></ul><h3 id="父子传参不同" tabindex="-1">父子传参不同 <a class="header-anchor" href="#父子传参不同" aria-label="Permalink to &quot;父子传参不同&quot;">​</a></h3><ul><li>vue2：父传子，用props,子传父用事件 Emitting Events。在vue2中，会调用this$emit然后传入事件名和对象。</li><li>vue3：父传子，用props,子传父用事件 Emitting Events。在vue3中的setup()中的第二个参数content对象中就有emit，那么我们只要在setup()接收第二个参数中使用分解对象法取出emit就可以在setup方法中随意使用了。</li></ul><h3 id="指令与插槽不同" tabindex="-1">指令与插槽不同 <a class="header-anchor" href="#指令与插槽不同" aria-label="Permalink to &quot;指令与插槽不同&quot;">​</a></h3><ul><li>vue2：使用pototype(原型)的形式去进行操作，引入的是构造函数。</li><li>vue3：使用结构的形式进行操作，引入的是工厂函数；vue3中app组件中可以没有根标签。</li></ul><h3 id="main-js文件不同" tabindex="-1">main.js文件不同 <a class="header-anchor" href="#main-js文件不同" aria-label="Permalink to &quot;main.js文件不同&quot;">​</a></h3><h2 id="vue3响应式原理" tabindex="-1">Vue3响应式原理 <a class="header-anchor" href="#vue3响应式原理" aria-label="Permalink to &quot;Vue3响应式原理&quot;">​</a></h2><p>proxy：ES6新特性，Proxy对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。为什么用proxy代替defineProperty？</p><h3 id="object-defineproperty" tabindex="-1">Object.defineProperty() <a class="header-anchor" href="#object-defineproperty" aria-label="Permalink to &quot;Object.defineProperty()&quot;">​</a></h3><ul><li>Object.defineProperty()方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</li><li>为什么能实现响应式？-通过get和set属性。</li><li>缺点： <ul><li>检测不到对象属性的添加和删除</li><li>数组API方法无法监听到</li><li>需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题</li></ul></li></ul><h3 id="proxy" tabindex="-1">proxy <a class="header-anchor" href="#proxy" aria-label="Permalink to &quot;proxy&quot;">​</a></h3><ul><li>定义：用于定义基本操作的自定义行为。</li><li>用法：Proxy为构造函数，用来生成Proxy实例。</li><li>使用场景： <ul><li>拦截和监视外部对对象的访问</li><li>降低函数或类的复杂度</li><li>在复杂操作前对操作进行校验或对所需资源进行管理</li></ul></li><li>proxy的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就可以完全代理所有属性了。</li><li>好处： <ul><li>深度监听，性能更好。因为<strong>深度监听是在get中进行的，而Vue2的原理中的Object.defineProperty是在最开始的时候监听，因此需要一次全部递归完，而在get中进行的Proxy是根据我们调用到那个数据，那个数据才会触发递归</strong></li><li>可以监听 新增/删除 的属性</li><li>可以监听数组的变化</li></ul></li></ul><h2 id="setup中如何获取组件实例" tabindex="-1">setup中如何获取组件实例 <a class="header-anchor" href="#setup中如何获取组件实例" aria-label="Permalink to &quot;setup中如何获取组件实例&quot;">​</a></h2><ul><li>在setup和其他CompositionAPI中没有this，其实是因为setup在生命周期中其实相当于beforeCreate和Created这个阶段，此时就是没有this的</li><li>可以通过getCurrentInstance获取当前实例</li><li>若使用OptionAPI可以使用this</li></ul><h2 id="computed-和-watch-的区别" tabindex="-1">Computed 和 Watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-label="Permalink to &quot;Computed 和 Watch 的区别&quot;">​</a></h2><ul><li>computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</li><li>watch 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。</li></ul><p>应用场景：</p><ul><li>当需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时都要重新计算。</li><li>当需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch选项允许执行异步操作 ( 访问一个 API )，限制执行该操作的频率，并在得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</li></ul><h2 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;slot&quot;">​</a></h2><p>slot又名插槽，是Vue的内容分发机制，组件内部的模板引擎使用slot元素作为承载分发内容的出口。插槽slot是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。</p><h3 id="分类-1" tabindex="-1">分类 <a class="header-anchor" href="#分类-1" aria-label="Permalink to &quot;分类&quot;">​</a></h3><p>slot分三类，默认插槽，具名插槽和作用域插槽。</p><ul><li>默认插槽：又名匿名插槽，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有一个匿名插槽。</li><li>具名插槽：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。</li><li>作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。</li></ul><h3 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h3><p>当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在 vm.$slot 中，默认插槽为 vm.$slot.default ，具名插槽为 vm.$slot.xxx ，xxx 为插槽名，当组件执行渲染函数时候，遇到slot标签，使用 $slot 中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。</p><h2 id="常见事件修饰符" tabindex="-1">常见事件修饰符 <a class="header-anchor" href="#常见事件修饰符" aria-label="Permalink to &quot;常见事件修饰符&quot;">​</a></h2><ul><li>.stop ：等同于 JavaScript 中的 event.stopPropagation() ，防止事件冒泡；</li><li>.prevent ：等同于 JavaScript 中的 event.preventDefault() ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；</li><li>.capture ：与事件冒泡的方向相反，事件捕获由外到内；</li><li>.self ：只会触发自己范围内的事件，不包含子元素；</li><li>.once ：只会触发一次</li></ul><h2 id="vue-router路由" tabindex="-1">vue-router路由 <a class="header-anchor" href="#vue-router路由" aria-label="Permalink to &quot;vue-router路由&quot;">​</a></h2><h3 id="vue-router的理解" tabindex="-1">vue-router的理解 <a class="header-anchor" href="#vue-router的理解" aria-label="Permalink to &quot;vue-router的理解&quot;">​</a></h3><ul><li>vue的一个插件库，专门用来实现SPA应用。</li></ul><h3 id="spa应用" tabindex="-1">SPA应用 <a class="header-anchor" href="#spa应用" aria-label="Permalink to &quot;SPA应用&quot;">​</a></h3><ul><li>单页Web应用</li><li>整个应用只有一个完整的页面</li><li>点击页面中的导航链接不会刷新页面，只会做页面的局部更新</li><li>数据需要通过ajax获取</li></ul><h3 id="路由的理解" tabindex="-1">路由的理解 <a class="header-anchor" href="#路由的理解" aria-label="Permalink to &quot;路由的理解&quot;">​</a></h3><ul><li>一个路由就是一组映射关系(key-value)</li><li>key为路径，value可能是function或component</li></ul><h3 id="路由分类" tabindex="-1">路由分类 <a class="header-anchor" href="#路由分类" aria-label="Permalink to &quot;路由分类&quot;">​</a></h3><p>后端路由：</p><ul><li>理解：value是function，用于处理客户端提交的请求</li><li>工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据</li></ul><p>前端路由：</p><ul><li>理解：value是component，用于展示页面内容</li><li>工作过程：当浏览器的路径改变时，对应的组件就会显示</li></ul><h2 id="vue-router原理" tabindex="-1">vue-router原理 <a class="header-anchor" href="#vue-router原理" aria-label="Permalink to &quot;vue-router原理&quot;">​</a></h2><ul><li>vue-router是一个基于vue的路由管理器，它可以让我们用vue构建单页应用（SPA），实现不同的url对应不同的组件。</li><li>vue-router有两种模式：hash模式和history模式。hash模式是利用浏览器的hashchange事件来监听url的变化，并根据hash值来匹配路由；history模式是利用HTML5的history API来操作浏览器历史记录，并根据路径名来匹配路由。</li><li>vue-router主要包括两部分：一部分是浏览器地址的监听，将url改变监听到并存入vueRouter类中；另一部分是将vueRouter与vue连接起来，这部分主要是靠vue的插件机制实现的。</li><li>vue-router提供了一些组件和指令来方便我们使用路由功能，例如router-link组件用来生成链接，router-view组件用来渲染匹配到的组件，v-bind:to指令用来绑定目标地址等。</li><li>vue-router还支持一些高级功能，例如路由懒加载、动态路由、嵌套路由、导航守卫等。</li></ul><h3 id="路由的hash模式和history模式区别" tabindex="-1">路由的hash模式和history模式区别 <a class="header-anchor" href="#路由的hash模式和history模式区别" aria-label="Permalink to &quot;路由的hash模式和history模式区别&quot;">​</a></h3><ul><li>二者都是利用浏览器的两种特性实现前端路由，history是利用浏览历史记录栈的API实现，hash是监听location对象hash值变化事件来实现</li><li>history的url没有&#39;#&#39;号，hash反之</li><li>相同的url，history会触发添加到浏览器历史记录栈中，hash不会触发，history需要后端配合，如果后端不配合刷新页面会出现404，hash不需要</li></ul><h2 id="tree-shaking" tabindex="-1">Tree shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree shaking&quot;">​</a></h2><p><code>Tree shaking</code>是一种通过清除多余代码方式来优化项目打包体积的技术。主要做了两件事：</p><ul><li>编译阶段利用ES6 Module判断哪些模块已经加载</li><li>判断那些模块和变量未被使用或者引用，进而删除对应代码</li></ul><p>好处：</p><ul><li>减少程序体积（更小）</li><li>减少程序执行时间（更快）</li><li>便于将来对程序架构进行优化（更友好）</li></ul><h2 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;SSR&quot;">​</a></h2><p>SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端。</p><p>优势：</p><ul><li>更好的SEO（搜索引擎优化）</li><li>首屏加载速度更快</li></ul><p>缺点：</p><ul><li>开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子；</li><li>当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境；</li><li>更多的服务端负载</li></ul><h2 id="vue性能优化" tabindex="-1">Vue性能优化 <a class="header-anchor" href="#vue性能优化" aria-label="Permalink to &quot;Vue性能优化&quot;">​</a></h2><h3 id="编码阶段" tabindex="-1">编码阶段 <a class="header-anchor" href="#编码阶段" aria-label="Permalink to &quot;编码阶段&quot;">​</a></h3><ul><li>尽量减少data中的数据，因为data中的数据会增加getter和setter，会筹集对应的watcher</li><li>v-if和v-for不能连用</li><li>SPA页面（单页应用）采用keep-alive缓存组件</li><li>v-for时key保持唯一</li><li>使用v-if代替v-show <ul><li>v-if：满足条件的会被渲染，不满足条件的不会被渲染到DOM上</li><li>v-show：不管是否满足条件都会添加到DOM上，但是不满足条件的会被使用</li></ul></li><li>display：none隐藏掉</li><li>使用路由懒加载和异步组件</li><li>图片懒加载</li><li>模块按需导入</li></ul><h3 id="seo优化" tabindex="-1">SEO优化 <a class="header-anchor" href="#seo优化" aria-label="Permalink to &quot;SEO优化&quot;">​</a></h3><ul><li>预渲染</li><li>服务端渲染SSR</li></ul><h3 id="打包优化" tabindex="-1">打包优化 <a class="header-anchor" href="#打包优化" aria-label="Permalink to &quot;打包优化&quot;">​</a></h3><ul><li>压缩代码</li><li>cdn加载第三方模块</li></ul><h3 id="用户体验" tabindex="-1">用户体验 <a class="header-anchor" href="#用户体验" aria-label="Permalink to &quot;用户体验&quot;">​</a></h3><ul><li>骨架屏：骨架屏基本就是详细页面元素未展现时，把DOM结构通过线条勾勒出来</li><li>PWA：渐进式Web应用</li><li>使用缓存</li></ul><h2 id="vue3性能提升主要在哪些方面" tabindex="-1">Vue3性能提升主要在哪些方面 <a class="header-anchor" href="#vue3性能提升主要在哪些方面" aria-label="Permalink to &quot;Vue3性能提升主要在哪些方面&quot;">​</a></h2><h3 id="编译阶段" tabindex="-1">编译阶段 <a class="header-anchor" href="#编译阶段" aria-label="Permalink to &quot;编译阶段&quot;">​</a></h3><p>回顾 Vue2 ，我们知道每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把用到的数据 property 记录为依赖，当依赖发生改变，触发 setter ，则会通知 watcher ，从而使关联的组件重新渲染。Vue3 在编译阶段，做了进一步优化：</p><ul><li>diff算法优化：vue3 在 diff 算法中相比 vue2 增加了静态标记，其作用是为了会发生变化的地方添加一个 flag 标记，下次 发生变化的时候直接找该地方进行比较</li><li>静态提升：Vue3 中对不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用，这样就免去了重复的创建节点，大型应用会受益于这个改动，免去了重复的创建操作，优化了运行时候的内存占用</li><li>事件监听缓存：默认情况下绑定事件行为会被视为动态绑定，所以每次都会去追踪它的变化</li><li>SSR优化：当静态内容大到一定量级时候，会用 createStaticVNode 方法在客户端去生成一个static node，这些静态 node 会被直接 innerHtml ，就不需要创建对象，然后根据对象渲染</li></ul><h3 id="源码体积" tabindex="-1">源码体积 <a class="header-anchor" href="#源码体积" aria-label="Permalink to &quot;源码体积&quot;">​</a></h3><p>相比 Vue2 ， Vue3 整体体积变小了，除了移出一些不常用的API，更重要的是 Treeshanking。任何一个函数，如 ref、reavtived 、 computed 等，仅仅在用到的时候才打包，没用到的模块都被摇掉，打包的整体体积变小。</p><h3 id="响应式系统" tabindex="-1">响应式系统 <a class="header-anchor" href="#响应式系统" aria-label="Permalink to &quot;响应式系统&quot;">​</a></h3><ul><li>vue2 中采用 defineProperty 来劫持整个对象，然后进行深度遍历所有属性，给每个属性添加 getter 和 setter ，实现响应式。</li><li>vue3 采用 proxy 重写了响应式系统，因为 proxy 可以对整个对象进行监听，所以不需要深度遍历。可以监听动态属性的添加；可以监听到数组的索引和数组 length 属性；可以监听删除属性。</li></ul><h2 id="vue3采用的composition-api与vue2-x使用的options-api区别" tabindex="-1">Vue3采用的Composition Api与Vue2.x使用的Options Api区别 <a class="header-anchor" href="#vue3采用的composition-api与vue2-x使用的options-api区别" aria-label="Permalink to &quot;Vue3采用的Composition Api与Vue2.x使用的Options Api区别&quot;">​</a></h2><p>Composition API 可以说是 Vue3 的最大特点，它解决了什么问题？</p><ul><li>通常使用 Vue2 开发的项目，普遍会存在以下问题：代码的可读性随着组件变大而变差；每一种代码复用的方式，都存在缺点；TypeScript支持有限。以上通过使用 Composition Api 都能迎刃而解。</li></ul><h3 id="options-api" tabindex="-1">Options API <a class="header-anchor" href="#options-api" aria-label="Permalink to &quot;Options API&quot;">​</a></h3><p>Options API ，即大家常说的选项API，即以 vue 为后缀的文件，通过定义methods ， computed ， watch ， data 等属性与方法，共同处理页面逻辑，当组件变得复杂，导致对应属性的列表也会增长，这可能会导致组件难以阅读和理解。</p><h3 id="compositionapi" tabindex="-1">CompositionAPI <a class="header-anchor" href="#compositionapi" aria-label="Permalink to &quot;CompositionAPI&quot;">​</a></h3><p>在 Vue3 Composition API 中，组件根据逻辑功能来组织的，一个功能所定义的所有API 会放在一起（更加的高内聚，低耦合），即使项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有 API。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li>在逻辑组织和逻辑复用方面， Composition API 是优于 Options API的，因为 Composition API 几乎是函数，会有更好的类型推断</li><li>Composition API 对 tree-shaking 友好，代码也更容易压缩</li><li>Composition API 中见不到 this 的使用，减少了 this 指向不明的情况</li><li>如果是小型组件，可以继续使用 Options API ，也是十分友好的</li></ul><h2 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;nextTick&quot;">​</a></h2><h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3><p>Vue在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新。如果想要在修改数据后立刻得到更新后的DOM结构，可以使用Vue.nextTick()。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p>this.$nextTick(回调函数)。</p><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><p>在下一次DOM更新结束后执行其指定的回调。</p><h3 id="什么时候用" tabindex="-1">什么时候用 <a class="header-anchor" href="#什么时候用" aria-label="Permalink to &quot;什么时候用&quot;">​</a></h3><p>当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。</p><h2 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><ul><li>vue框架中状态管理。在main.js引入store，注入。新建一个目录store，...export。</li><li>应用场景：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车。</li></ul><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><p>有五种，分别是State、Getter、Mutation、Action、Module。</p>`,179),p=[u];function h(c,d,m,b,f,v){return e(),l("div",null,p)}const D=a(n,[["render",h]]);export{q as __pageData,D as default};
