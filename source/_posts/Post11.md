---
title: 小A的最短路 题解
tags: 算法
categories: 题解
---

![](Post11/1.jpg)
<!-- more -->
# [小A的最短路](https://ac.nowcoder.com/acm/problem/23482)

## 题目描述

小A这次来到一个景区去旅游，景区里面有 $N$ 个景点，景点之间有 $N-1$ 条路径。小A从当前的一个景点移动到下一个景点需要消耗一点的体力值。但是景区里面有两个景点比较特殊，它们之间是可以直接坐观光缆车通过，不需要消耗体力值。而小A不想走太多的路，所以他希望你能够告诉它，从当前的位置出发到他想要去的那个地方，他最少要消耗的体力值是多少。

### 输入描述

第一行一个整数 $N$ 代表景区的个数。
接下来 $N-1$ 行每行两个整数 $u,v$ 代表从位置u到v之间有一条路径可以互相到达。
接下来的一行两个整数 $U,V$ 表示这两个城市之间可以直接坐缆车到达。
接下来一行一个整数 $Q$ ，表示有 $Q$ 次询问。
接下来的 $Q$ 行每行两个整数 $x,y$ ,代表小A的位置在 $x$，而他想要去的地方是 $y$ 。

### 输入描述

对于每个询问下 $x,y$ 输出一个结果，代表 $x$ 到 $y$ 消耗的最少体力

## 样例

### input1
```
4
1 2
1 3
2 4
3 4
2
1 3
3 4
```
### output1
```
1
0
```

## Limitation

数据范围：
$1≤N≤5e5， 1≤Q≤2e6$

# 题解

因为这个题有n个点，n-1条边，所以我们发现这个图其实是个树，所以这题的核心点在于找到起点到终点的最近公共祖先，他们的最近公共祖先深度分别减去起点终点的深度之和就是答案（记作jl（起点，终点））。

不过我们意识到有两个特别的点，他们可以直接坐缆车到达。那么我们只要求jl（起点，第一个传送点）+jl（终点，第二个传送点）和jl（起点，第二个传送点）+jl（终点，第一个传送点）和jl（起点，终点）的最小值就是这个题的答案。
代码如下

```c++
#include <iostream>
#include <queue>
#include <cstring>
using namespace std;

struct edge{
    int to;
    int w;
    int next;
};

edge e[1000005];
queue<int> qe;
int head[500005],cnt=1,depth[500005];
int fa[500005][21];

void add(int u,int v,int w){
    e[cnt].next=head[u];
    e[cnt].to=v;
    e[cnt].w=w;
    head[u]=cnt++;
}

void bfs(){
    memset(depth,0x3f3f3f3f,sizeof depth);
    depth[0]=0;
    depth[1]=1;
    qe.push(1);
    while(!qe.empty()){
        int x=qe.front();
        qe.pop();
        for(int i=head[x];i!=0;i=e[i].next){
            int y=e[i].to;
            if(depth[y]>depth[x]){
                depth[y]=depth[x]+e[i].w;
                qe.push(y);
                fa[y][0]=x;
                for(int j=1;j<=20;j++){
                    fa[y][j]=fa[fa[y][j-1]][j-1];
                }
            }
        }
    }
}

int lca(int x,int y){
    if(depth[x]<depth[y]){
        swap(x,y);
    }
    for(int i=20;i>=0;i--){
        if(depth[fa[x][i]]>=depth[y]){
            x=fa[x][i];
        }
    }
    if(x==y){
        return x;
    }
    for(int i=20;i>=0;i--){
        if(fa[x][i]!=fa[y][i]){
            x=fa[x][i];
            y=fa[y][i];
        }
    }
    return fa[x][0];
}

int jl(int u,int v){
    return depth[u]+depth[v]-2*depth[lca(u,v)];
}

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);
    int n,q,u,v;
    cin>>n;
    for(int i=1;i<n;i++){
        cin>>u>>v;
        add(u,v,1);
        add(v,u,1);
    }
    cin>>u>>v;
    cin>>q;
    bfs();
    int x,y;
    for(int i=1;i<=q;i++){
        cin>>x>>y;
        int ans=jl(x,y);
        ans=min(ans,jl(x,u)+jl(y,v));
        ans=min(ans,jl(x,v)+jl(y,u));
        cout<<ans<<"\n";
    }
    
    return 0;
}
```
