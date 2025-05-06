const x = 10;
const y = 20;
console.log(x, y)

//%s format variable to string
//%d number
//%i intiger
//%o 
// console.log("i am %s and my age is %d", "bharath", 25)
// console.clear()
// console.count('i am bharath')
// console.count('i am bharath')
// console.count('i am virat')
// console.countReset('i am bharath')
// console.log('i am bharath')

// const fun1 = () => console.trace();
// const fun2 = () => fun1();
// fun2();

const sum = () => console.log(`sum of two number ${10+20}`)
const mul = () => console.log(`multipication of two numbers ${2*3}`)

const measureTime = () => {
    console.time("sum()");
    sum()
    console.timeEnd("sum()")
    console.time("mul()");
    mul()
    console.timeEnd("mul()")
}

measureTime()