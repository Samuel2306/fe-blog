// 实现柯里化函数
function currying(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : (...args2) => currying(fn, ...args, ...args2)
}
console.log(currying(2, 2)(3)(4))