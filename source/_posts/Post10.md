---
title: 践踏 题解
tags: 算法
categories: 题解
---

![](Post10/1.jpg)
<!-- more -->

# [践踏](https://ac.nowcoder.com/acm/contest/26896/1002)

## Description
首先给定一个定值k，支持如下操作（在数轴上）

1. 加入一条线段$[l,r]$
2. 删除一条已经存在的线段
3. 给定$x$，问有多少个区间包含$x+kt$，其中t是一个整数变量，即$t ∈ Z$
   比如说当$x=2,k=3$的时候，区间$[7,10]$是应该算入答案的，因为$x+2k=8$，且$7 ≤ 8 ≤ 10$

如果$n=0$，那么你只需要输出一行"fafa"然后结束程序即可（注意不输出双引号）

## Input

第一行两个整数$n,k$，分别表示操作次数以及定值$k$
之后有$n$行，每行先输入一个整数$op$，之后分类讨论：

1. $op=1$，此时再输入$[l,r]$，表示加入一个区间$[l,r]$
2. $op=2$，此时再输入$[l,r]$，表示删除区间$[l,r]$，保证这个区间存在（如果存在多个相同的区间，那么只需要删除其中的任意一个）
3. $op=3$，此时再输入$x$，之后需要输出答案并换行.

## Output

对于每一个$op=3$的操作，输出查询结果后换行

## Samples

### input1
```
10 7
1 3393 14151
3 13229
1 3427 18356
1 7602 20138
1 8566 28714
1 1076 32552
2 3427 18356
2 8566 28714
3 10962
1 387 7783
```
### output1
```
1
3
```
### input2
```
0 0
```
### output2
```
fafa
```

## Limitation

一共有20个测试点，每个测试点5分

有4个测试点保证：n≤1000

有另外5个测试点保证：n≤10000

对于全部数据，保证：

$0 ≤ n,k ≤ 10^5$

$0 ≤ l ≤ r ≤ 10^9$
$0 ≤ x ≤ 10^9$

# 题解

我们首先考虑k为0的情况怎么做，也就是查有多少个区间包含了点x，我们考虑什么样的区间不会对答案产生贡献，也就是右端点小于点x的区间和左端点大于点x的区间，那么我们离散化之后，利用树状数组维护差分前缀和即可，对于操作1，add(L, 1),add(R+1,-1),操作二add(L,-1),add(R+1,1),操作3，query(x)即可

我们考虑k不为0的情况，我们需要查询所有满足$y = x + k \times t$的点，肯定是不能够暴力的，对于这一类点，我们可以发现他们在模k意义下是相等的，那么我们也可以想到将所有的区间变成模k意义下的区间，查询其是否包含点$x$模$k$后的值，我们所有的区间，x都是正数，所有这样肯定是没有问题的，如果有负数的话，就会复杂一些。因为我们需要使用树状数组，假如我们在树状数组上查询或者修改小于等于0的问题，就g了，建议自己试一下，所有我们取模的时候，将其模k后加1就可以避免查询或者修改为0的位置。

接下来我们考虑如何在树状数组上实现，如果区间[L, R]的长度大于等于k，对于任意的点x，我们假设其模k并加1后的值为y，我们一定是包含他的，所以我们直接add(1, 1), add(k + 1, -1), 我们设经过处理之后的L为L1,处理之后的R为R1,那么如果$L_1≤R_1$，我们直接add(L, 1), add(R + 1, -1),否则满足条件的区间是[L1, k]和[1, R1]，所以我们需要add(1,1),add(R1 + 1, -1), add(L1, 1), add(k + 1, -1); 查询的时候直接query(y)即可

```c++
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int n,tr[100005];
vector<int> vt;

int lowbit(int x){
	return x&-x;
}

void add(int x,int num){
	for(int i=x;i<=n;i+=lowbit(i)){
		tr[i]+=num;
	}
}

int find(int x){
	int sum=0;
	for(int i=x;i>0;i-=lowbit(i)){
		sum+=tr[i];
	}
	return sum;
}

int ls(int x){
	return lower_bound(vt.begin(),vt.end(),x)-vt.begin()+1;
}

int main(){
	int k,op[100005],l[100005],r[100005];
	cin>>n>>k;
	if(n==0){
		cout<<"fafa"<<endl;
        return 0;
	}
	for(int i=1;i<=n;i++){
		cin>>op[i];
		if(op[i]==1||op[i]==2){
			cin>>l[i]>>r[i];
			vt.push_back(l[i]);
			vt.push_back(r[i]);
		}else{
			cin>>l[i];
			vt.push_back(l[i]);
		}
	}
	sort(vt.begin(),vt.end());
	vt.erase(unique(vt.begin(),vt.end()),vt.end());
	if(k==0){
		for(int i=1;i<=n;i++){
			if(op[i]==1){
				add(ls(l[i]),1);
				add(ls(r[i])+1,-1);
			}else if(op[i]==2){
				add(ls(l[i]),-1);
				add(ls(r[i])+1,1);
			}else if(op[i]==3){
				int ans=find(ls(l[i]));
				cout<<ans<<endl;
			}
		}
	}else{
		for(int i=1;i<=n;i++){
			if(op[i]==1){
				if(r[i]-l[i]>=k){
					add(1,1);
					add(k+1,-1);
				}else{
					int ll=l[i]%k+1;
					int rr=r[i]%k+1;
					if(rr>=ll){
						add(ll,1);
						add(rr+1,-1);
					}else{
						add(1,1);
						add(rr+1,-1);
						add(ll,1);
						add(k+1,-1);
					}
				}
			}else if(op[i]==2){
				if(r[i]-l[i]>=k){
					add(1,-1);
					add(k+1,1);
				}else{
					int ll=l[i]%k+1;
					int rr=r[i]%k+1;
					if(rr>=ll){
						add(ll,-1);
						add(rr+1,1);
					}else{
						add(1,-1);
						add(rr+1,1);
						add(ll,-1);
						add(k+1,1);
					}
				}
			}else{
				int ans=find(l[i]%k+1);
				cout<<ans<<endl;
			}
		}
	}
	
	return 0;
}
```
