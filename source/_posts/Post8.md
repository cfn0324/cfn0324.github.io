---
title: 求m区间最小值 题解
tags: 算法
categories: 题解
---
<!-- more -->
# [求m区间内的最小值](https://www.luogu.com.cn/problem/P1440)

## 题目描述

一个含有 $n$ 项的数列，求出每一项前的 $m$ 个数到它这个区间内的最小值。若前面的数不足 $m$ 项则从第 $1$ 个数开始，若前面没有数则输出 $0$。

## 输入格式

第一行两个整数，分别表示 $n$，$m$。

第二行，$n$ 个正整数，为所给定的数列 $a_i$。

## 输出格式

$n$ 行，每行一个整数，第 $i$ 个数为序列中 $a_i$ 之前 $m$ 个数的最小值。

## 样例 #1

### 样例输入 #1

```
6 2
7 8 1 4 3 2
```

### 样例输出 #1

```
0
7
7
1
1
3
```

## 提示

对于 $100\%$ 的数据，保证 $1\le m\le n\le2\times10^6$，$1\le a_i\le3\times10^7$。

# 题解

本题有三种做法：st表，线段树，单调队列
这个题对于st表和线段树来说相当于模板题。
下面是用st表实现的代码

```c++
#include <iostream>
#include <cmath>
using namespace std;

int a[2000005],dp[2000005][21];

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);cout.tie(0);
	int n,m;
	cin>>n>>m;
	for(int i=1;i<=n;i++)
		cin>>a[i];
	for(int i=1;i<=n;i++)
		dp[i][0]=a[i];
	int t=log2(n)+1;
	for(int j=1;j<=t;j++){
		for(int i=1;i<=n-(1<<j)+1;i++){
			dp[i][j]=min(dp[i][j-1],dp[i+(1<<(j-1))][j-1]);
		}
	}
	int l,r;
	for(int i=1;i<=n;i++){
		if(i==1){
			cout<<"0"<<"\n";
			continue;
		}
		l=max(i-m,1);
		r=i-1;
		t=log2(r-l+1);
		cout<<min(dp[l][t],dp[r-(1<<t)+1][t])<<"\n";
	}
	
	return 0;
}
```

我们主要讲一些怎么用单调队列实现。
我们每次要找的都是前m个最大的，那么我们只要把前面的数以及他们的索引塞进单调队列里面，判断单调队列的头部元素是不是“过期”的，如果没有过期（在前m范围内）直接输出即可，对于那些过期的元素（不在m范围内）在头部时，我们只要pop出现，找到下一个没过期的元素即可。
下面是单调队列实现的代码

```c++
#include <iostream>
#include <queue>
using namespace std;
typedef pair<int,int> PII;

priority_queue<PII,vector<PII>,greater<PII>> qe;
int num[2000005];

int main(){
	ios::sync_with_stdio(0);
	cin.tie(0);cout.tie(0);
	int n,m;
	cin>>n>>m;
	for(int i=1;i<=n;i++){
		cin>>num[i];
	}
	cout<<"0"<<"\n";
	qe.push({num[1],1});
	for(int i=2;i<=n;i++){
		while(qe.top().second<i-m)qe.pop();
		cout<<qe.top().first<<"\n";
		qe.push({num[i],i});
	}
	
	return 0;
}
```

我们发现，一些问题我们可以套一些对应的算法模板（可能此算法很实现起来很复杂，例如线段树），也可以通过一些巧妙的方式使它能通过简单的数据结构也能解决。（有点像高中的圆锥曲线，有易想但是复杂的公式，也有难想但是简单的方法）但是对于我们来说都是需要掌握的，并不是每个问题都能巧妙地解决，也并不是每个问题都能套对应的算法模板。