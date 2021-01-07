# Where my anagrams at?

什么是字谜？好吧，如果两个单词都包含相同的字母，它们就是彼此的字谜。
例如：

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
编写一个函数，该函数将从列表中查找单词的所有字谜。您将获得两个输入，一个单词和一个带有单词的数组。您应该返回所有字谜的数组，如果没有，则返回一个空数组。
例如：

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []