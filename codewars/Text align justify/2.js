/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    //reduce求出所有成员和，从左到右
    var lastLine = words.reduce(function(line, word) {
      if (line) {
        if (line.length + word.length + 1 <= len)
          return line + ' ' + word;
        lines.push(line);
      }
      return word;
    });
    lines = lines.map(function(line) {
      if (line.indexOf(' ') >= 0)
        for (var lineLen = line.length; lineLen < len; )
          line = line.replace(/ +/g, function(spaces) { 
            return spaces + (lineLen++ < len ? ' ' : '');
          });
      return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
  }