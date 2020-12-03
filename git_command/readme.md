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