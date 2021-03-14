学习笔记
### 第一周
简单的TicTacToe小游戏,补全前端知识体系脑图
### 第二周
异步编程，使用广度优先搜索算法实现一个地图寻路功能，并采取可视化的方式展现寻路过程，利用A*启发式搜索算法计算最短路径
### 第三周
使用LL语法分析算法构建AST抽象语法树,了解了产生式
#### RegExpObject.exec();
当RegExpObject是一个全局正则表达式时，会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string,
它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回
  null，并把 lastIndex 属性重置为 0。
#### AST
```
<Expression> ::= 
    <AdditiveExpression><EOF>

<AdditiveExpression> ::= 
    <MultiplicativeExpression>
    |<AdditiveExpression><+><MultiplicativeExpression>
    |<AdditiveExpression><-><MultiplicativeExpression>

<MultiplicativeExpression> ::= 
    <Number>
    |<MultiplicativeExpression><*><Number>
    |<MultiplicativeExpression></><Number>

```
### 第四周
字符串分析算法。Trie字典树，KMP字符串匹配，Wildcard通配符匹配
### 第五周
学习proxy的基本用法，通过模仿reactive实现了解reactive的根本原理。通过实现基本拖拽掌握对DOM的精确操作
### 第六周
语言分类，产生式，jS的几大类型
### 第七周
运算符和表达式，类型之间的相互转换，宏任务和微任务的定义，JS当中的函数调用
### 第八周
使用状态机处理字符串，实现一个玩具浏览器。创建一个服务器→实现一个HTTP请求→发送请求→response解析
### 第九周
承接上周内容，HTML parse模块拆分→解析标签→创建元素→构建DOMs树→收集CSS规则→生成computed属性→specificity计算逻辑
### 第十周
根据浏览器属性进行排版：收集元素→计算主轴→计算交叉轴→绘制元素→绘制DOM树。完整呈现玩具浏览器过程

### 总结
一开始完善了前端知识图谱，让我对自己掌握的和欠缺的有了比较清晰的认知，接着通过几周的编程算法练习，跟着老师的思路走，在编程思想和动手能力方面有了比较明显的提升，在重学js阶段，掌握了js的一些基础但又重要的知识，最后，在浏览器工作原理3周的学习中，对浏览器的整个工作过程有了清晰的认识。总的来说，在这10周的学习当中，整体还是比较吃力，许多知识点都要反复琢磨或是结合查找的资料才能够真正的理解，不过在这个过程中，还是得到了一定的提升。在最近几周里，上交的作业不够用心，在接下来的时间，要努力改进。