/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function (line, word) {
        if (line) {
            if (line.length + word.length + 1 <= len) {
                return line + ' ' + word; //最后得到最后一行句子
            } else {
                lines.push(line); //得到一行数据
            }
        }
        return word; //新的line值
    });
    lines = lines.map(function (line) {
        if (line.indexOf(' ') >= 0){
            for (var lineLen = line.length; lineLen < len;)
                line = line.replace(/ +/g, function (spaces) {
                    return spaces + (lineLen++ < len ? ' ' : '');
                });
        }    
        return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
};
console.log(justify("Lorem ipsum dolor sit amet aaaaaaaaaaa a", 30));