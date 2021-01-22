# Befunge Interpreter
- Befunge口译员
难以理解的语言很难编程，但是为它们编写解释器非常有趣！

您的任务是编写一个将解释Befunge-93代码的方法！Befunge-93是一种语言，其中的代码不是以一系列指令的形式出现，而是以散布在2D平面上的指令形式出现；您的指针从左上角开始，默认为在代码中向右移动。请注意，指令指针环绕屏幕！有一个奇异的堆栈，我们将假定它是无界的并且仅包含整数。虽然Befunge-93代码应该限制为80x25，但您不必担心代码大小。Befunge-93支持以下说明（来自Wikipedia）：

0-9 将此号码压入堆栈。
+另外：流行a和b，然后推a+b。
-减法：流行a和b，然后推b-a。
*乘法：流行a和b，然后推a*b。
/整数除法：弹出a和b，然后按b/a，四舍五入。如果a为零，则推零。
%模：流行a和b，然后推b%a。如果a为零，则推零。
! 逻辑非：弹出一个值。如果值为零，请按1；否则，推零。
`（反引号）大于：流行a和b，然后推入1如果b>a，否则推零。
> 开始向右移动。
< 开始向左移动。
^ 开始向上移动。
v 开始向下移动。
? 开始朝随机的基本方向移动。
_弹出一个值；如果向右移动value = 0，否则向左移动。
|弹出一个值；如果下移value = 0，否则下移。
"开始字符串模式：将每个字符的ASCII值一直推到下一个"。
:堆栈顶部的值重复。如果堆栈顶部没有东西，请按0。
\在堆栈顶部交换两个值。如果只有一个值，请假装0堆栈底部有一个多余的值。
$ 从堆栈中弹出值并将其丢弃。
. 弹出值并以整数形式输出。
, 弹出值并输出由存储在值中的整数代码表示的ASCII字符。
# 蹦床：跳过下一个单元格。
p“放置”调用（一种存储值以备后用的方法）。流行y，x并且v，然后在位置改变字符(x,y)在节目中与ASCII值的字符v。
g“获取”调用（一种检索存储中数据的方法）。弹出y和x，然后将字符的ASCII值推入程序中的该位置。
@ 结束程序。
（即空格）无操作。什么也没做。
上面的列表稍作修改：如果您查看Wikipedia页面，您会发现我们不使用用户输入指令，而被零除只会产生零。

这是一个例子：

>987v>.v
v456<  :
>321 ^ _@
将创建输出123456789。

因此，您必须做的是创建一个函数，以便在传递Befunge代码时，该函数返回将由该代码生成的输出。因此，例如：

"123456789".equals(new BefungeInterpreter().interpret(">987v>.v\nv456<  :\n>321 ^ _@")