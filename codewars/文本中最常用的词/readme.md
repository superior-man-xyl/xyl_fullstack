# Most frequently used words in a text
- 文本中最常用的词
编写一个函数，给定一个文本字符串（可能带有标点符号和换行符），然后按出现次数的降序返回一个出现次数最高的前3个单词的数组。
单词是一串字母（A到Z），可以选择包含一个或多个ASCII撇号（'）。（无需处理花式标点符号。）
匹配项应区分大小写，结果中的单词应小写。
领带可以随意折断。
如果文本包含的唯一单词少于三个，则应返回top-2或top-1单词；如果文本不包含单词，则返回空数组。

assertDeepEquals(topThreeWords("a a a  b  c c  d d d d  e e e e e"), ['e','d','a'])
  
Test.assertDeepEquals(topThreeWords("a a c b b"), ['a','b','c'])
  
Test.assertDeepEquals(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),['e','ddd','aa'])

Test.assertDeepEquals(topThreeWords("  //wont won't won't "), ["won't", "wont"])
  
Test.assertDeepEquals(topThreeWords("  , e   .. "), ["e"])

Test.assertDeepEquals(topThreeWords("  ...  "), [])

Test.assertDeepEquals(topThreeWords("  '  "), [])
  