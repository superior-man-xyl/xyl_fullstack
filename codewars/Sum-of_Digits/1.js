// function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }
//   console.log(digital_root(493193));

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }
  console.log(digital_root(493193));
//   使用了reduce方法
  