console.log(Symbol('foo') === Symbol('foo')); //false

const sym = Symbol();

// const obj = {
//     sym : "value",
// }

// obj["sym"]  //>> value값에 접근이 가능함
// 그렇기에 벨류에 접근을 못하도록

const obj = {
    [sym] : "sangGil",
}

obj[sym];
