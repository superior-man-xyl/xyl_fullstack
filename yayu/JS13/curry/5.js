//第三版
// curry 函数写到4.js其实已经很完善了，
// 但是注意这个函数的传参顺序必须是从左到右，
// 根据形参的顺序依次传入，
// 如果我不想根据这个顺序传呢？

// 创建一个占位符  fn("a", _, "c")("b")

function curry(fn, args, holes) {
    length = fn.length;

    args = args || [];

    holes = holes || [];

    return function() {

        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg, i, index = 0;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
            if (arg === _ && holesLen) {
                index++
                if (index > holesLen) {
                    _args.push(arg);
                    _holes.push(argsLen - 1 + index - holesLen)
                }
            }
            // 处理类似 fn(1)(_) 这种情况
            else if (arg === _) {
                _args.push(arg);
                _holes.push(argsLen + i);
            }
            // 处理类似 fn(_, 2)(1) 这种情况
            else if (holesLen) {
                // fn(_, 2)(_, 3)
                if (index >= holesLen) {
                    _args.push(arg);
                }
                // fn(_, 2)(1) 用参数 1 替换占位符
                else {
                    _args.splice(_holes[index], 1, arg);
                    _holes.splice(index, 1)
                }
            }
            else {
                _args.push(arg);
            }

        }
        if (_holes.length || _args.length < length) {
            return curry.call(this, fn, _args, _holes);
        }
        else {
            return fn.apply(this, _args);
        }
    }
}

var _ = {};

var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
});

// 验证 输出全部都是 [1, 2, 3, 4, 5]
console.log(fn(1, 2, 3, 4, 5));
console.log(fn(_, 2, 3, 4, 5)(1));
console.log(fn(1, _, 3, 4, 5)(2));
console.log(fn(1, _, 3)(_, 4)(2)(5));
console.log(fn(1, _, _, 4)(_, 3)(2)(5));
console.log(fn(_, 2)(_, _, 4)(1)(3)(5));

