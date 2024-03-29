---
title: Markdown的基本语法
tags: Markdown
categories: 学习
---

![](Post2/1.png)
<!-- more -->
# 标题

## 标题
用 # 号来表示 1-6 级标题
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 段落格式

## 字体
用 * 和 _ 来表示字体
```
*斜体*
**粗体**
***粗斜体***

_斜体_
__粗体__
___粗斜体___
```
示例：

*斜体*

**粗体**

***粗斜体***

_斜体_

__粗体__

___粗斜体___

## 分隔线

用三个以上的 * - _ 来表示分隔线
```
***
---
___
```
示例：

***
---
___

## 删除线
用 ~~ 来表示删除线
```
~~删除线~~
```
示例：

~~删除线~~

## 下滑线
用 < u > < /u > 来表示表示下划线
```
<u>下划线</u>
```
示例：

<u>下划线</u>

## 脚注
用[^]来表示脚注
```
文本[^脚注]

[^脚注]:这是脚注
```
示例：

文本[^脚注]

[^脚注]:这是脚注

# 列表

## 无序列表
用 * + - 来表示无序列表
```
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项
```
示例：
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项

- 第一项
- 第二项
- 第三项

## 有序列表
用 . 并加上数字来表示无有序列表
```
1. 第一项
2. 第二项
3. 第三项
```
示例：
1. 第一项
2. 第二项
3. 第三项

## 嵌套列表
在子列表中的选项前面加3个空格表示
```
1. 第一项
   1. 第一节
   2. 第二节
1. 第二项
   1. 第一节
   2. 第二节

* 第一项
   * 第一节
* 第二项
   * 第一节
```
示例：
1. 第一项
   1. 第一节
   2. 第二节
1. 第二项
   1. 第一节
   2. 第二节

* 第一项
   * 第一节
* 第二项
   * 第一节

# 区块

## 区块引用
用 > 来表示区块
```
> 区块
```
示例：
> 区块

## 区块嵌套
用 > 的数量来表示第几层嵌套
```
> 第一层
>> 第二层
>>> 第三层
```
示例：
> 第一层
>> 第二层
>>> 第三层

## 区块中使用列表
在列表前使用 >
```
> 1. 第一项
> 2. 第二项
> 3. 第三项
```
示例：
> 1. 第一项
> 2. 第二项
> 3. 第三项

## 列表中使用区块
在区块前使用列表
```
1. 第一项
   > 第一节
2. 第二项
   > 第一节
```
示例：
1. 第一项
   > 第一节
2. 第二项
   > 第一节

# 代码

## 片段代码
用 ` 来表示代码片段
```
`printf("hello world");`
```
示例：

`printf("hello world");`

## 代码区块
用 \`\`\` 来表示代码区块并可以指定语言
```
`ˋ`c
printf("hello world");
`ˋ`
```

# 链接

## 文本链接
用 [] 或者 <> 来表示需要被链接的文本，用 () 来提供链接
```
[我的个人博客](https://cfn0324.github.io)
```
示例：

[我的个人博客](https://cfn0324.github.io)

## 直接链接
用 <> 来直接使用链接
```
<https://cfn0324.github.io>
```
示例：

<https://cfn0324.github.io>

## 高级链接
我们可以通过变量来设置一个链接，变量赋值在文档末尾进行
```
[我的个人博客][1]

[1]:https://cfn0324.github.io
```
示例：

[我的个人博客][1]

[1]:https://cfn0324.github.io

# 图片

## 基本图片引用
在链接格式前加一个 ! 表示图片()里面可以是路径也可以是网址
```
![图片](Post2/1.png)
```
示例：

![图片](Post2/1.png)

## 使用< img >标签
Markdown 还没有办法指定图片的高度与宽度，可以使用普通的 < img > 标签。
```html
<img src="Post2/1.png" width="50%">
```
示例：

<img src="Post2/1.png" width="50%">

# 表格

## 表格制作
使用 | 和 - 来制作表格
```
|表头|表头|
|---|---|
|单元格|单元格|
|单元格|单元格|
|单元格|单元格|
```
示例：
|表头|表头|
|---|---|
|单元格|单元格|
|单元格|单元格|
|单元格|单元格|

## 对齐方式
使用`-:`右对齐
使用`:-`左对齐
使用`:-:`居中对齐
```
|左对齐|居中对齐|右对齐|
|:-|:-:|-:|
|单元格|单元格|单元格|
|短|短|短|
|长长长长|长长长长|长长长长|
```
示例：
|左对齐|居中对齐|右对齐|
|:-|:-:|-:|
|单元格|单元格|单元格|
|短|短|短|
|长长长长|长长长长|长长长长|

# 高级技巧

## HTML元素

<kbd>Ctrl</kbd>+<kbd>C</kbd>复制
```html
<kbd>Ctrl</kbd>+<kbd>C</kbd>复制
```
<kbd>Ctrl</kbd>+<kbd>V</kbd>粘贴
```html
<kbd>Ctrl</kbd>+<kbd>V</kbd>粘贴
```

## 转义
以下这些符号前面加上反斜杠来帮助插入普通的符号
```
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

## latex数学公式
用 $ 包含行内数学表达式

用 $$ 包含块内数学表达式
```latex
$1+1=2$

$$
1+1=2
$$
```
示例：

$1+1=2$

$$
1+1=2
$$