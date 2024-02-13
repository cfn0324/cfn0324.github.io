---
title: ACM算法之博弈论
tags: 算法
categories: 学习
---

![](Post1/1.jpeg)
<!-- more -->
## 巴什博弈
一堆n个物品，两个人轮流从中取出1~m个，最后取光者胜。
```c++
if(n%(m+1)==0){
    return false;
else
    return true;
```

## 威佐夫博弈
两堆物品,两人轮流从一堆或者两堆中取相同1~不限个，最后取光者胜。
```c++
if(abs(x-y)*((sqrt(5)+1)/2)==min(x,y))
    return false;
else
    return true;
```

## 尼姆博弈
三堆物品，两人轮流取，每次取其中一堆1~不限个，最后取光者胜。
```c++
if(a^b^c==0)
    return false;
else
    return true;
```

## 斐波那契博弈
一堆物n个，两人轮流取，不能取完，不能取超过上次两倍，最后取光者胜。
```c++
int a=0,b=1,c=1;
for(int i=2;1;i++){
    int d=c;
    d=a+b;
    a=b;
    b=c;
    c=d;
    if(c==n){
        return false;
    else if(c>n)
        return true;
}
```