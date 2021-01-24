/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
function justify(str, len) {
  var words = str.split(' ');
  var lines = [];
  //reduce从左到右处理成员，最终累计为一个值，第一个参数要是函数
  var lastLine = words.reduce(function (line, word) {
    if (line) {
      if (line.length + word.length + 1 <= len)
        return line + ' ' + word; //最后一个句子不会大于len就用一个常量来装
      lines.push(line); //将每一行句子放入数组
    }
    return word; //刚开始时第一个单词，返回成为line
  });
  // map方法将数组的每个成员依次传入参数函数，将执行结构以新数组返回
  lines = lines.map(function (line) { 
    if (line.indexOf(' ') >= 0)//防止一个单词一行，跳过，节约时间
      for (var lineLen = line.length; lineLen < len;)
        line = line.replace(/ +/g, function (spaces) {
          return spaces + (lineLen++ < len ? ' ' : '');
        });
    return line;
  });
  lastLine && lines.push(lastLine);//有lastLine才会执行后面的语句
  return lines.join('\n');
}