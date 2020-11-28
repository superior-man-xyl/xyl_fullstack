package merge//包的声明

func merge(nums1 []int, m int, nums2 []int, n int)  {
    i:=m-1//从最后开始，go语言使用:=声明变量
    j:=n-1
    k:=m+n-1//总长度
    //下面第一个分号前空的是因为已经提前定义了
    for;i>=0&&j>=0;k--{//只要有一个先小于0就能退出循环
        if nums1[i]>nums2[j]{
            nums1[k]=nums1[i]
            i--
        } else {
            nums1[k]=nums2[j]
            j--
        }
    }
    for ;j>=0;k--{
        nums1[k]=nums2[j]
        j--
    }
}