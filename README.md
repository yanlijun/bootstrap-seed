##Bootstrap种子项目

<h1>
<a name="installation" class="anchor" href="#installation"><span class="mini-icon mini-icon-link"></span></a>开始</h1>

<p>需node.js工具初始，请先安装node.js。然后安装grunt，ruby，sass，compass，bootstrap-sass。</p>

<h2>
<a name="installation" class="anchor" href="#installation"><span class="mini-icon mini-icon-link"></span></a>安装依赖包</h2>

`npm install`

<h2>
<a name="installation" class="anchor" href="#installation"><span class="mini-icon mini-icon-link"></span></a>启动项目</h2>

`npm start`

<p>访问本地链接：<a href="http://localhost:8000">http://localhost:8000</a></p>

<h2>
<a name="installation" class="anchor" href="#installation"><span class="mini-icon mini-icon-link"></span></a>启动grunt</h2>

`grunt`

####目录介绍
* src： 开发环境静态资料夹
* src/sass： sass 开发目录，可使用compass API
* src/js： js 开发目录
* assets： 生产环境静态资料夹

####开发自动化简单流程
1. 清除生产环境资料夹内文件
2. 拷贝js库与字体文件
3. 检查JS代码规范
4. 合并JS文件为main.js
5. 压缩main.js
6. 编译scss
7. 检查css代码规范
8. 自动添加浏览器厂商前缀
9. 压缩css，添加头注释信息
10. 同步开发环境与生产环境的图片及字体文件夹