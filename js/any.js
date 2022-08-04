"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("리턴은 아무거나");
// any : 어떤 타입이라도 상관없음 *최대한 안쓰는 것이 좋다.
// 안정성이 떨어진다.
// # any 사용을 하면서 누수 막기
// function leakingAny(obj : any) {
//     const a = obj.num;
//     const b = a +1;
//     return b;
// }
// const c = leakingAny({num: 0})
// c.indexof("0");
// >> a, b, c typeof any
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
// a: number 를 넣어주면, a,b,c 가 typeof number 이 된다.
