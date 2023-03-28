import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1e6a71f2.js";const i=JSON.parse('{"title":"美团前端笔试3.25","description":"","frontmatter":{},"headers":[],"relativePath":"articles/美团前端笔试3.25.md"}'),p={name:"articles/美团前端笔试3.25.md"},o=l(`<h1 id="美团前端笔试3-25" tabindex="-1">美团前端笔试3.25 <a class="header-anchor" href="#美团前端笔试3-25" aria-label="Permalink to &quot;美团前端笔试3.25&quot;">​</a></h1><h2 id="编程题" tabindex="-1">编程题 <a class="header-anchor" href="#编程题" aria-label="Permalink to &quot;编程题&quot;">​</a></h2><p>1.火车进站与出站。相当于栈的结构：例如可能1号火车驶入了火车站中的休息区s，在驶出之前2号火车驶入了。那么在这种情况下，1号火车需要等待2号火车倒车出去后才能出去（显然被后面驶入的2号火车挡住了，这个休息区s只有一个出入口）。<br> 给定火车驶入休息区s的顺序、火车驶出休息区s的顺序，判断是否合理？</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validate_stack_sequences</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pushed</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">popped</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    st </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pushed</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    j </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        st</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pushed</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> st </span><span style="color:#89DDFF;">and</span><span style="color:#A6ACCD;"> st</span><span style="color:#89DDFF;">[-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> popped</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]:</span></span>
<span class="line"><span style="color:#A6ACCD;">            st</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">            j </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> st</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    T </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    ans </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> _ </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">T</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">        pushed </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">        popped </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validate_stack_sequences</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">pushed</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> popped</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        ans</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">res</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> ans</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Yes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">No</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>2.小美明天要去春游了。她非常喜欢吃巧克力，希望带尽可能多的巧克力在春游的路上吃。她现在有n个巧克力,很巧的是她所有的巧克力都是厚度一样的正方形的巧克力板。这n个巧克力板的边长分别是a1, a2, ... , an。因为都是厚度一致的正方形巧克力扳，我们认为第i个巧克力的重量为ai^2。小美现在准备挑选一个合适大小的包来装尽可能多的巧克力板，她十分需要你的帮助来在明天之前准备完成，请你帮帮她。<br> 输入描述<br> 第一行两个整数n和m,表示小美的巧克力数量和小美的询问数量。<br> 第二行n个整数a1,a2, ..., an，表示n块正方形巧克力板的边长。注意你不能将巧克力板进行拆分。<br> 第三行m个整数q1,q2,...,qm，第i个整数表示询问：如果小美选择一个能装qi重量的包，最多能装多少块巧克力板？<br> 1 &lt;= n,m &lt;= 50000, 1 &lt;= ai &lt;= 10000, 1 &lt;= qi &lt;= 10^18<br> 输出描述<br> 输出一行m个整数，分别表示每次询问的答案。</p><p>样例输入<br> 5 5<br> 1 2 2 4 5<br> 1 3 7 9 15<br> 样例输出<br> 1 1 2 3 3<br> 以下是常规写法，用例只能通过18%。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_chocolate_cnt</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">length</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">bag_weight</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    dp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bag_weight </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> j </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">bag_weight</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> length</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> length</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">            dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">max</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">dp</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">j</span><span style="color:#89DDFF;">],</span><span style="color:#82AAFF;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">j </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;"> length</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> length</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">]]</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">+</span><span style="color:#82AAFF;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> dp</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">bag_weight</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    q </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    ans </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">q</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">        res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_chocolate_cnt</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> q</span><span style="color:#89DDFF;">[</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">        ans</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">res</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> ans</span><span style="color:#89DDFF;">)))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>优化后的写法：前缀和+二分。</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">    cho </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    cho </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">**</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> cho</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    aq </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cho</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cho</span><span style="color:#89DDFF;">)):</span></span>
<span class="line"><span style="color:#A6ACCD;">      aq</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> aq</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> cho</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span></span>
<span class="line"><span style="color:#A6ACCD;">    bags </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">list</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> bag </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> bags</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      l</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">cho</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> l </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        m </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> r</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> cho</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">m</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> bag</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          r </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> m</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          l </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> m</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">r</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> __name__ </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">__main__</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div>`,9),t=[o];function e(F,c,D,r,y,A){return a(),n("div",null,t)}const _=s(p,[["render",e]]);export{i as __pageData,_ as default};
