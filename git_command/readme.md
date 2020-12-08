# 企业协作开发工具
git clone +地址。将远程仓库克隆到本地仓库

- 你写的代码->入仓库->入远程仓库
1.git status 查看有没有文件提交
输入下面三条就能提交代码
2.git add . 添加修改后的文江
``git add .\git_command\readme``只添加这个文件
3.git commit -m 'git command' 确认修改，加个备注
//git remote add origin +仓库地址
4.git push origin main 提交代码，推送本地分支到远程分支
注意分支是main还是master ，现在main是默认分支。

有一种更加简洁的做法，就是直接使用vscode提交，都不要输入命令
提交步骤
1.在源代码管理处点击 勾号 保存所有的修改 弹框中点击yes确认
2.输入描述信息，没有就输入空格，不然没法推送
3.然后在源代码管理处点击右上方的那三个点，然后选择push，就能在GitHub看到内容更新了。