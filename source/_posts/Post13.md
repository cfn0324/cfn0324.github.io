---
title: 泰勒公式以及常见展开
tags: 数学
categories: 学习
---

![](Post13/1.jpg)
<!-- more -->


### n次多项式的麦克劳林公式
$$
p(x)=p(0)+\frac{p'(0)}{1!}x+\frac{p''(0)}{2!}x^2+\frac{p'''(0)}{3!}x^3+\cdots+\frac{p^{(n)}(0)}{n!}x^n
$$

### n次多项式的泰勒公式
$$
p(x)=p(x_0)+\frac{p'(x_0)}{1!}(x-x_0)+\frac{p''(x_0)}{2!}(x-x_0)^2+\frac{p'''(x_0)}{3!}(x-x_0)^3+\cdots+\frac{p^{(n)}(x_0)}{n!}(x-x_0)^n
$$

### 拉格朗日余项
$$
r_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}
$$

### 佩亚诺余项
$$
r_n(x)=o((x-x_0)^n)
$$

### 常见的泰勒展开
$$
\begin{aligned}
&e^x=\sum_{n=0}^{\infty}\frac{1}{n!}x^{n}=1+x+\frac{1}{2!}x^2+\cdots,x\in(-\infty,+\infty) \\
&\sin x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}x^{2n+1}=x-\frac{1}{3!}x^3+\frac{1}{5!}x^5+\cdots,x\in(-\infty,+\infty) \\
&\cos x=\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n)!}x^{2n}=1-\frac{1}{2!}x^2+\frac{1}{4!}x^4+\cdots,x\in(-\infty,+\infty) \\
&\ln (1+x)=\sum_{n=0}^{\infty}\frac{(-1)^n}{n+1}x^{n+1}=x-\frac{1}{2}x^2+\frac{1}{3}x^3+\cdots,x\in(-1,1] \\
&\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n=1+x+x^2+x^3+\cdots,x\in(-1,1) \\
&\frac{1}{1+x}=\sum_{n=0}^{\infty}x^n=1-x+x^2-x^3+\cdots,x\in(-1,1) \\
&(1+x)^{\alpha}=1+\sum_{n=1}^{\infty}\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots,x\in(-1,1) \\
&\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}x^{2n+1}=x-\frac{1}{3}x^3+\frac{1}{5}x^5+\cdots,x\in[-1,1] \\
&\arcsin x=x+\frac{1}{6}x^3+\frac{3}{40}x^5+\cdots,x\in(-1,1) \\
&\tan x=x+\frac{1}{3}x^3+\frac{2}{15}x^5+\cdots,x\in(-\frac{\pi}{2},\frac{\pi}{2})
\end{aligned}
$$
