# 大致思路
要做前后端通讯的系统，首先要有需求和设计，包括前端UI，前后端通讯使用技术，后端架构与数据库。做好这些工作以后开始开发。

# 前端
虽然流行用vue，但是从模板网站上很容易得到类似模板，稍微改动一下即可使用。
* http://www.cssmoban.com/cssthemes/7727.shtml
* http://www.cssmoban.com/cssthemes/6678.shtml
* http://www.cssmoban.com/cssthemes/7681.shtml
* http://www.cssmoban.com/cssthemes/6033.shtml

## 搭建HBuilder工作环境
从模板之家下载四款登录页，挑一款开始工作。
选择 cpts_1121_brc 这一款。HBuilder建项目，名为EIS，把包中的内容拷贝到HBuilder项目目录下。

访问测试，能通了以后，开始改造。

## logo和title
改logo和title
```
<title>恒生软件EIS系统</title>
<link rel="shortcut icon" href="images/恒生软件logo.jpg" type="image/x-icon" />
```

## 企业网站meta的用例
meta标签的作用。

metadata 中文名叫做元数据，是用于描述数据的数据，他不会显示在页面上，但是机器可以识别，常用于定义页面的说明，关键字，最后修改日期，和其他信息，这些信息存储于浏览器，如何布局或者重新加载页面。搜索引擎和其他服务。

### html页面中文
```
<html lang="zh-cmn-Hans">
```
### 字符格式
```
<meta charset="UTF-8">
```

组成meta标签共有两个属性，分别是http-equiv属性和name属性。

* name属性

name属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为content，content中的内容是对name填入类型的具体描述，便于搜索引擎抓取。

### keywords(关键字)
说明：用于告诉搜索引擎，你网页的关键字。举例：
```
<meta name="keywords" content="恒生软件,建站,软件开发,小程序开发,APP开发">
```
### description(网站内容的描述)
说明：用于告诉搜索引擎，网站的主要内容。举例：
```
<meta name="description" content="恒生软件EIS系统">
```
### viewport(移动端的窗口)
说明：这个属性常用于设计移动端网页。在用bootstrap,AmazeUI等框架时候都有用过viewport。

举例（常用范例）：
```
<meta name="viewport" content="width=device-width, initial-scale=1">
```
### robots(定义搜索引擎爬虫的索引方式)
说明：robots用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。content的参数有all,none,index,noindex,follow,nofollow。默认是all。

举例：
```
<meta name="robots" content="none">
```
具体参数如下：

1. none : 搜索引擎将忽略此网页，等价于noindex，nofollow。
2. noindex : 搜索引擎不索引此网页。
3. nofollow: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。
4. all : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于index，follow。
5. index : 搜索引擎索引此网页。
6. follow : 搜索引擎继续通过此网页的链接索引搜索其它的网页。

### author(作者)
说明：用于标注网页作者举例：
```
<meta name="author" content="恒生软件,hundsunsoft@126.com">
```
### generator(网页制作软件)
说明：用于标明网页是什么软件做的举例:
```
<meta name="generator" content="html5 css3 js">
```
### copyright(版权)
说明：用于标注版权信息举例：
```
<meta name="copyright" content="粤ICP备18013766号">
```

### revisit-after(搜索引擎爬虫重访时间)
说明：如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。举例：
```
<meta name="revisit-after" content="30 days" >
```
### renderer(双核浏览器渲染方式)
说明：renderer是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。举例：
```
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

* http-equiv属性
http-equiv顾名思义，相当于http的文件头作用。

### content-Type(设定网页字符集)(推荐使用HTML5的方式)
说明：用于设定网页字符集，便于浏览器解析与渲染页面举例：
```
<meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐

<meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
```
### X-UA-Compatible(浏览器采取何种版本渲染当前页面)
说明：用于告知浏览器以何种版本来渲染页面。（一般都设置为最新模式，在各大框架中这个设置也很常见。）举例：
```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE和Chrome使用最新版本渲染当前页面
```
### cache-control(指定请求和响应遵循的缓存机制)
用法1.
说明：指导浏览器如何缓存某个响应以及缓存多长时间。
举例:
```
<meta http-equiv="cache-control" content="no-cache">
```
共有以下几种用法：

1. no-cache: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。

2. no-store: 不允许缓存，每次都要去服务器上，下载完整的响应。（安全措施）

3. public : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果

4. private : 只为单个用户缓存，因此不允许任何中继进行缓存。（比如说CDN就不允许缓存private的响应）

5. maxage : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：max-age=60表示响应可以再缓存和重用 60 秒。

用法2.(禁止百度自动转码)
说明：用于禁止当前页面在移动端浏览时，被百度自动转码。虽然百度的本意是好的，但是转码效果很多时候却不尽人意。所以可以在head中加入例子中的那句话，就可以避免百度自动转码了。举例：
```
<meta http-equiv="Cache-Control" content="no-siteapp" />
```
### expires(网页到期时间)
说明:用于设定网页的到期时间，过期后网页必须到服务器上重新传输。举例：
```
<meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" />
```
### refresh(自动刷新并指向某页面)
说明：网页将在设定的时间内，自动刷新并调向设定的网址。举例:
```
<meta http-equiv="refresh" content="2；URL=https://www.baidu.com/"> //意思是2秒后跳转
```
### Set-Cookie(cookie设定)
说明：如果网页过期。那么这个网页存在本地的cookies也会被自动删除。
```
<meta http-equiv="Set-Cookie" content="name, date"> //格式

<meta http-equiv="Set-Cookie" content="User=Lxxyx; path=/; expires=Sunday, 10-Jan-16 10:00:00 GMT"> //具体范例
```

### 企业网站实例
```
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="description" content="恒生软件EIS系统">
    <meta name="keywords" content="恒生软件,建站,软件开发,小程序开发,APP开发">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="author" content="恒生软件,hundsunsoft@126.com">
    <meta name="copyright" content="粤ICP备18013766号">
    <title>恒生软件EIS系统</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="Pragma" content="no-cache" />
    <link rel="shortcut icon" href="images/恒生软件logo.jpg" type="image/x-icon" />
</head>
```

## 页面主体
再找一个模板做页面主体。twts_153_MaterialAdmin

### 改head
包括编码，设备，关键字，描述，标题，作者，图标
```
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="description" content="恒生软件EIS系统">
<meta name="keywords" content="恒生软件,建站,软件开发,小程序开发,APP开发">
<meta name="author" content="恒生软件,hundsunsoft@126.com">
<meta name="copyright" content="粤ICP备18013766号">
<title>恒生软件EIS系统</title>
<meta name="renderer" content="webkit">
<meta http-equiv="Pragma" content="no-cache" />
<link rel="shortcut icon" href="images/恒生软件logo.ico" type="image/x-icon" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

### 改UI及其form表单
action=""代表调用自己，即本页面不跳转
```
<form method="post" action="">
										  
    <section class="mdc-card__primary">
        <h1 class="mdc-card__title mdc-card__title--large">选择产品</h1>
    </section>
    <section class="mdc-card__supporting-text" >
        <div class="template-demo">
        <div id="hero-js-select" class="mdc-select" role="listbox" >
            <div class="mdc-select__surface" tabindex="0">
            <div class="mdc-select__label">选择一款产品</div>
            <div class="mdc-select__selected-text"></div>
            <div class="mdc-select__bottom-line"></div>
            </div>
            <div class="mdc-simple-menu mdc-select__menu">
            <ul class="mdc-list mdc-simple-menu__items">
                <li class="mdc-list-item" role="option" tabindex="0">
                手机壳
                </li>
                <li class="mdc-list-item" role="option" tabindex="0">
                尾插
                </li>
                <li class="mdc-list-item" role="option" tabindex="0">
                Fruit
                </li>
                <li class="mdc-list-item" role="option" tabindex="0">
                Milk, Yogurt, and Cheese
                </li>
                <li class="mdc-list-item" role="option" tabindex="0">
                Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                </li>
                <li class="mdc-list-item" role="option" tabindex="0">
                Fats, Oils, and Sweets
                </li>
            </ul>
            </div>
        </div>
        </div>
    </section>										
    <!-- </div> -->
<!-- </div> -->

<section class="mdc-card__supporting-text">
    <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop">
            <div class="template-demo">
                <div id="demo-tf-box-wrapper">
                    <div id="tf-box-example" class="mdc-text-field mdc-text-field--box w-100">
                        <input type="text" id="tf-box" class="mdc-text-field__input" aria-controls="name-validation-message" name="prodtype">
                        <label for="tf-box" class="mdc-text-field__label">产品型号</label>
                        <div class="mdc-text-field__bottom-line"></div>
                    </div>	
                </div>
            </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop">
            <div class="template-demo">
                <div id="demo-tf-box-leading-wrapper">
                    <div id="tf-box-leading-example" class="mdc-text-field mdc-text-field--box mdc-text-field--with-leading-icon w-100">
                        <i class="material-icons mdc-text-field__icon" tabindex="0">event</i>
                        <input type="text" id="tf-box-leading" class="mdc-text-field__input">
                        <label for="tf-box-leading" class="mdc-text-field__label">查询起始日期</label>
                        <div class="mdc-text-field__bottom-line"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop">
            <div class="template-demo">
                <div id="demo-tf-box-leading-wrapper">
                    <div id="tf-box-leading-example" class="mdc-text-field mdc-text-field--box mdc-text-field--with-leading-icon w-100">
                        <i class="material-icons mdc-text-field__icon" tabindex="0">event</i>
                        <input type="text" id="tf-box-leading" class="mdc-text-field__input">
                        <label for="tf-box-leading" class="mdc-text-field__label">查询截止日期</label>
                        <div class="mdc-text-field__bottom-line"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第二排 -->
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop">
            <div class="template-demo">
                <div id="demo-tf-box-wrapper">
                    <div id="tf-box-example" class="mdc-text-field mdc-text-field--box w-100">
                        <input type="text" id="tf-box" class="mdc-text-field__input" aria-controls="name-validation-message">
                        <label for="tf-box" class="mdc-text-field__label">库存</label>
                        <div class="mdc-text-field__bottom-line"></div>
                    </div>
                    <!-- 								          <p class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" id="name-validation-msg">
        Must be at least 8 characters
        </p> -->
                </div>
            </div>
        </div>
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop">
            <div class="template-demo">
                <input class="mdc-button mdc-button--raised" name="select" type="submit" value="查询">
            </div>
        </div>
    </div>
</section>																		
</form>
```

# PHP部分
## 启动apache和mysql
直接双击 Wampserver64 启动即可。

php默认端口80，默认应用路径 www 。

mysql默认端口3306，默认用户 root，默认密码 空 。

## 建表
利用工具MySql Workbench建表

## 改写html为php
首先，改名为php结尾。
### 先写静态php
```
<?php
    function insert() {
    $x = 100.00;
    echo '<tr>';
    echo '<td class="text-left">热干面</td>';
    echo '<td>';
    echo $x;
    echo '</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    echo '<td>haha</td>';
    }
    if(isset($_POST['prodtype'])){
    insert(); 
    }
?>
```

## 再写动态php
### 数据库设计

写MYSQL查询部分
### 数据库连接
query.php
```
<?php
$servername = "localhost";
$username = "root";
$password = "";
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password);
 
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "连接成功";

mysqli_close($conn);
?>
```
### 查询单笔并显示

### 查询多笔并返回
