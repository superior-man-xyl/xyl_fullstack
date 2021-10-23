function sum(...args) {
    const num = args.reduce((a, b) => a + b, 0)
    const fn = (...args) => {
      return sum(num, ...args)
    }
    fn.sumOf = () => num
    return fn
  }
  console.log(sum(1)(2)(3).sumOf())