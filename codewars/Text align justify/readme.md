# Text align justify
文字对齐

您在此Kata中的任务是模拟等宽字体的文本对齐方式。系统会为您提供单行文字和预期的对齐宽度。最长的字永远不会大于此宽度。

规则如下：

使用空格填充单词之间的空白。
每行应包含尽可能多的单词。
使用“ \ n”分隔行。
单词之间的差异不能超过一个空格。
行应该以单词而不是空格结尾。
'\ n'不包括在行长中。
首先是大的差距，然后是较小的差距（“ Lorem-ipsum-dolor-sit-amet”（2、2、2、1个空格））。
最后一行不应该是合理的，单词之间只能使用一个空格。
最后一行不应包含“ \ n”
一个单词的字符串不需要空格（'somelongword \ n'）。
宽度= 30的示例：

Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
您也可以随时查看对齐方式在文本编辑器中或直接在HTML中的工作方式（css：text-align：justify）。