"use strict";
// # never : return 사용
// # 일반적인 never 예제
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('failed');
}
function infinieLoop() {
    while (true) { }
}
// #never : 모든 타입의 서브 타입, 모든 타입에 할당 가능
// But, never 에는 어떤 것도 할당 불가
// any도 never에게는 할당 불가
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함.
let a = 'hello';
if (typeof a !== 'string') {
    let b = a;
} // a type of never
if (typeof ab !== 'string') {
    ab;
} // ab type of number
