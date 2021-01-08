# Greed is Good
贪婪是一种骰子游戏，有五个六面骰子。您的任务（如果您选择接受）是根据这些规则得分。您将始终得到一个包含五个六面骰子值的数组。

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
一个骰子每卷只能计数一次。例如，给定的“ 5”只能算作三元组的一部分（贡献500分）或算作一个50分，但不能计入同一卷中。

评分示例

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)