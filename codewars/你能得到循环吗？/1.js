function loop_size(node) {
    var loopArr = [];
    while (node && loopArr.indexOf(node) < 0) {
        //判断是否到了循环的那个节点，没有就继续添加到数组
      loopArr.push(node);
      node = node.next;
    }
    //看是0节点开始还是后面
    var firstIndex = Math.max(0, loopArr.indexOf(node));
    return loopArr.length - firstIndex;
  }