"use strict";
// const aNumber: number = maybe;  >> Err
// 타입 가이드
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe; >> Err
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean : boolean = maybe; >> Err
}
// #unknown : any보다 type-safe / any와 같이 아무거나 할당 가능 
// 컴파일러가 타입을 추론할 수 있게 타입의 유형을 좁히거나, 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용불가
// unknown 타입으로 런타임 err 줄일수있다.
// 사용전 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있다.
