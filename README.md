# webapp
跨平台作业

2018/5/28
问题
1、页面跳转无法加载 js 和 css
原因：
jqm的ajax页面跳转，实际上是通过一个ajax请求，将目标页面的 <div data-role="page" > </div>以内的dom结构复制过来
假如有a.html,b.html二个页面，a的源页面，b是目标页面
如果b.html做为目标页面，则不需要加载jquery mobile的js和css资源，跳转并没有实际发生，还是在a.html，只不过把b.html的dom复制到了a.html

解决办法：
经过测试，发现b.html页面在加载过去后(按以上做法，可以加载)，但又发现b.html内自定义的css，加写的js脚本，全部通通无用，经过一番折腾，终于知道为什么了．可想而知，因为只会加载 <div data-role="page"></div>以内的dom，因此，我们要把自定义的css，加写的js脚本，也要放在这里边．而且要放在<div  data-role="content" ></div>区域内，放在<div  data-role="header" ></div>及<div  data-role="footer" ></div>都不行，结果如下


为了解决这个，在网上找了好多办法，原文连接https://blog.csdn.net/java_mars/article/details/22571961，感谢！
