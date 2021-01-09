# 字节h5面试题之Drag and drop
要求良好的用户体验，
1.基础一定要扎实，体现在细节，有能力增长的梯度
2.h5上要做一些比较复杂的特效

## github拖拽上传功能
1. 给要拖拽的元素，加上draggable属性，就能够拖拽，再使用样式curror:move就能改变箭头样式
2. 拖拽元素在上空的感觉
3. drag 有三个事件，
JS在前端是基于事件的语言，
Event集机制
小红书495页 DOM Event level
- dragstart
- drag
- dragend

drop 是异步的
- dragenter 开始进入的时候 border dashed classList.add
- dragover  执行多次，一直执行
- leave 离开

event.preventDefault();//非常重要

drap+drop 良好用户体验模拟的API 
draggable='true'属性
dragstart   drag dragend
dragenter dragover dragleave+drop
要阻止默认行为， event.preventDefault()
oForm submit


作业：完成拖回去 