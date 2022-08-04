"use strict";
// let myName: string = null; >> Err
// let u:undefined = null; >> Err
let v = undefined;
// let v: void = null; >> Err
// # 빈 값을 주었다가 나중에 할당하려고 하면
// let union: string = null; >> Err
// union = 'Mark'
// union Type : type | type >> type과 type의 합집합
let union = null;
union = 'Mark';
