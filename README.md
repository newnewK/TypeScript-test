# Type Script

## Annotation
- 타입을 선언

```ts
let a: string = 'newnew';
let b: number = 30;
let c: boolean = true;
```


## JavaScript vs TypeScript

TypeScript | JavaScript
-- | --
static Types |  dynamic Types
개발하는 중간에 타입을 체크 | 개발하는 동안은 알 수 없고, 런타임이 돌아갈 때 알 수 있음.

# Primitive Types
- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준) 6가지
      : boolean, number, string, symbol, null, undefined


# Boolean
- false, true 값만 할당

```ts
let isDone:boolean = false;
isDone = true;

console.log(typeof isDone); //boolean 

```

# number 
- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값
- TypeScript는 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원
- NaN
- 1_000_000 과 같은 표기 가능

```ts
let decimal: number = 6;

let hex: number = 0xf00d;

let binary: number = 0b1010;

let octal: number = 0o744;

let notANumver: number = NaN;

let underscoreNum: number = 1_000_000;
```

## string
- 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 `string` 형식을 사용
- JavaScript와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 "" or '' 사용

```ts
let myName:string = 'newnew';


let fullName: string = 'newnew Kim'
let age: number = 30;

let sentence: string = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;

console.log(sentence);

```

## Symbol
- ECMAScript 2015의 Symbol 
- new Symbol 사용 불가
- Symbol을 함수로 사용해서 Symbol 타입을 만들 수 있음
- 프리미티브 타입의 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만들어줌.
- 그래서 주로 접근을 제어하는데 쓰는 경우가 많음.

```ts
onsole.log(Symbol('foo') === Symbol('foo')); //false
```

```ts
const sym = Symbol();
const obj = {
    sym : "sangGil",
}

obj["sym"];
```

```ts
const sym = Symbol();
const obj = {
    [sym] : "sangGil",
}

obj[sym];
```

## null & undefined
- TypeScript에서 undefined와 null은 실제로 각각 undefined 및 null 이라는 타입을 가짐.
- void와 마찬가지로, 그 자체로는 그다지 유용하지는 않음
- 둘다 소문자만 존재

```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.

let u: undefined = undifined;

let n: null = null;

```


# undefined & null are subtypes of all other types
- 설정을 하지 않으면
- number 에 null or undefined를 할당할 수 있다는 의미
- But, 컴파일 옵션에서 `--strictNullChecks` 사용하면 null, undefined는 void나 자기 자신들에게만 할당할 수 있다.
- 이 경우 null, undefined를 할당할 수 있게 하려면, union type을 이용

```ts
// let u: undefinde = null;
// >> Err

let v: void = undefined;

// let v: void = null;
// >> Err

// union Type: type | type
let union: string | null = null;
union = 'Mark'
```

# null in JavaScript
- null 이라는 값으로 할당된 것을 null
= 무언가 있지만, 사용할 준비가 덜 된 상태
- null이라는 타입은 null이라는 값만 가질 수 있다.
- `런타임에서 typeof 연산자를 이용해서 알아내면, object 이다.`

```ts
 let n: null = null;

 console.log(n); //null
 console.log(typeof n); //object
```

# undefined in JavaScript
- 값을 할당하지 않은 변수는 undefined라는 값을 가짐.
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined
- `런타임에서 typeof 연산자를 이용해서 알아내면, undefined 이다.`

```ts
let u: undefined = undefined;

console.log(u) // undefined
console.log(typeof u) // undefined
```


## Object 
- non-primitive type
- `prinitive type이 아닌 것`을 나타내고 싶을 때 사용
- non-primitive type : `not` number, string, boolean, bigint, symbol, null or undefined

```ts
const person1 = { name: "Mark", age: 39 };

const person2 = Object.create({ name: "Mark", age: 39 });

```

## Array
- 원래 자바스크립트에서는 array는 객체
- 사용방법 : Array<타입> , 타입[]

```ts
let list:number[] = [1, 2, 3];

// let list1:number[] = [1, 2, 3, '4']; 
//>>Err

let list1:(number | string)[] = [1, 2, 3, '4'];
```

## Tuple
- Tuple의 타입 순서에 맞지 않게 데이터를 넣으려고 하면 에러가 표시
- Tuple의 정해진 길이에 맞지 않아도 에러가 발생합니

```ts
let x: [string, number];
x = ['hello', 30];
// x = [ 10, 'mark']; 
// >> Err

// x[2] = 'newnew';
// >> Err 
// x[2] 
// >> Err 

const person: [string, number] = ['mark', 39];
// const [first, second, thir] = person; 
// >>Err 
```

## any
- 어떤 타입이어도 상관없는 타입
- `최대한 사용하지 않는 것이 핵심` 
- 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않으므로
- 컴파일 옵션 중에서는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션이 있음. `nolmplicitAny`
- any는 계속해서 개체를 통해 전파
- 결국, 모든 편의는 타입 안정성을 잃는 대가로 온다는 것을 명심!
- 타입 안정성은 TypeScript를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 

```ts
function leakingAny(obj : any) {
    const a = obj.num;
    const b = a +1;
    return b;
}

const c = leakingAny({num: 0})
c.indexof("0");
// >> a, b, c typeof any
```

```ts
function leakingAny(obj : any) {
    const a: number = obj.num;
    const b = a +1;
    return b;
}

const c = leakingAny({num: 0})
// a: number 를 넣어주면, a,b,c 가 typeof number 이 된다.
```

## unknown
- 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있음.
- 이러한 값은 동적 콘텐츠(ex 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있음)
- 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공
- any 보다 `type-safe`한 타입 
  <br>: any와 같이 아무거나 할당 가능
  <br>: 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나
  <br>: 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같음.
  <br>: 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.

```ts
declare const maybe: unknown;

// const aNumber: number = maybe;  >> Err

// 타입 가이드
if (maybe === true) {
    const aBoolean : boolean = maybe;

    // const aString: string = maybe; >> Err
}

if (typeof maybe === 'string') {
    const aString: string = maybe;

    // const aBoolean : boolean = maybe; >> Err
}
```

## never
- never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당할 수 있다.
- But, never 에는 그 어떤 것도 할당이 불가
- any 조차도 never 에게 할당 불가
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함.

```ts
// # 일반적인 never 예제
function error(message: string) : never {
    throw new Error(message);
}

function fail() {
    return error('failed');
}

function infinieLoop(): never {
    while (true) {}
}
```

```ts
let a: string = 'hello';

if (typeof a !== 'string') {
    let b: never = a;
} // a typeof never


declare const ab: string | number;

if (typeof ab !== 'string') {
    ab;
} // ab typeof number
```


## void
- 아무것도 반환하지 않는 함수에 사용하는 타입
- void는 undefined만 할당할 수 있음.

```ts
function returnVoid(message: string) {
    console.log(message);

    return;
} // retunVoid typeof void

returnVoid("리턴은 없다.")


function returnVoid01(message: string) {
    console.log(message);

    return undefined;
}
```




