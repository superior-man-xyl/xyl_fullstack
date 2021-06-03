git reset 哈希值 --hard  回到上一次的commit
然后本次最新commit消失
想再回到最新commit
git reflog    查看操作记录，能找回最新commit的哈希值
接着  git reset 哈希值 --hard   就回去了

回滚：reset 
reset 三种模式：
- --hard：不保存所有变更
- --soft：保留变更，且变更内容处于staged
- --mixed（默认）：保留变更，且变更状态处于modified
git reset master~5   ：回退到之前五次的提交上
git reset --hard HEAD^  HEAD指的是最后一次提交

git revert 哈希值  
git revert(撤销)的作用通过反做创建一个新的版本，这个版本的内容与我们要回退到的目标版本一样，但是HEAD指针是指向这个新生成的版本，而不是目标版本。

例如:我们commit了三个版本（版本一、版本二、 版本三），突然发现版本二不行（如：有bug），想要撤销版本二，但又不想影响撤销版本三的提交，就可以用 git revert 命令来反做版本二，生成新的版本四，这个版本四里会保留版本三的东西，但撤销了版本二的东西。

git checkout -b {分支名字} {参考模板(不写就默认为当前模板)} 
git checkout -b {分支名字} origin {参考模板} 来自远程仓库要加origin

git branch 查看所有分支
git checkout {分支名}  切换分支

git merge {分支名} 合并分支

变基：rebase    base指commit

git rebase --continue  用于手动解决冲突时，排列commit
