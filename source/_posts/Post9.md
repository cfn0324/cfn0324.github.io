---
title: 圆形加法 题解
tags: 算法
categories: 题解
---

![](Post9/1.jpg)
<!-- more -->
# [圆形加法](http://172.25.5.128/p/185)(需要校园网访问)

## Description

你有一个长度为 $n$ 的序列 $x$，其中元素由 $0$ 到 $n-1$编号。序列各元素初始全为 $0$。

你可以进行若干次如下操作：每次操作选取一组 $i$ 和 $k$ $(0 \leq i \leq n - 1, 1 \leq k \leq n)$，对所有满足 $i \leq j \leq i +k-1$ 的 $j$，执行 $x_{j \bmod n} \leftarrow x_{j \bmod n} + 1$。（通俗地讲就是将序列首尾相接拼成一个环，每次选取环上的一段，将其上元素的值全部加 $1$。）

现给定另一个序列 $A$，求出由 $x$ 变换为 $A$ 所需的最小操作数。

## Format

### Input

标准输入以下格式给出：

$ N $

$ A_0 $ $ A_1 $ $ \cdots $ $ A_{N-1} $

### Output

一个整数，表示由 $x$ 变换为 $A$ 所需的最小操作数。

## Samples

### input1
```
4
1 2 1 2
```
### output1
```
2
```

**样例解释:**

您可以按如下方式操作:

最初，$x=(0,0,0,0)$;

$i = 1,k = 3$ 时进行操作，$x=( 0，1，1，1)$;

$i = 3,k = 3$ 时进行操作，$x=( 1，2，1，2)$ ;

```input2
5
3 1 4 1 5
```

```output2
7
```

```input3
1
1000000000
```

```output3
1000000000
```

## Limitation

$ 1\ \leq\ N\ \leq\ 200000 $

$ 1\ \leq\ A_i\ \leq\ 10^9 $

所有输入均为整数

# 题解

很有趣的一个思维题，首先我们把这个数列转化成差分形式，例如1 2 1 2转化成-1 1 -1 1，例如3 1 4 1 5转化成-2 2 3 -3 4（第一个-1和第一个-2是因为首位与末尾相接），这样我们就知道有多少组1 -1对而不用考虑他们怎样匹配的。

但是这样我们少考虑了一种情况，也就是首尾相接时，1和-1在同一个位置导致他们相消了，但是在这种情况下是整体加+1，所以也只需考虑数列里面最大的数和1-1对数的差值，就是首位相连的个数。

这样我们就得到了所有的1 -1对（包括首尾相接的1 -1对），所以我们只要统计所有正数之和加上相消的1 -1对数就是题目的答案了。（注意开longlong）

洛谷有个类似题，可以去尝试一下[P1969 [NOIP2013 提高组] 积木大赛 - 洛谷 | 计算机科学教育新生态 (luogu.com.cn)](https://www.luogu.com.cn/problem/P1969)

AC代码如下

```c++
#include <iostream>
using namespace std;
typedef long long ll;

ll n,num[200005],maxx,ans;

int main(){
	cin>>n;
	for(int i=0;i<n;i++){
		scanf("%lld",&num[i]);
		maxx=max(maxx,num[i]);
	}
	for(int i=1;i<n;i++)
	if(num[i]-num[i-1]>0)
	ans+=num[i]-num[i-1];
	if(num[0]-num[n-1]>0)
	ans+=num[0]-num[n-1];
	cout<<max(maxx,ans);
	
	return 0;
}
```
