// # void : 아무것도 하지않겠다.
// void는 undefined만 할당할 수 있음.

function returnVoid(message: string) {
    console.log(message);

    return;
} // retunVoid typeof void

returnVoid("리턴은 없다.")


function returnVoid01(message: string) {
    console.log(message);

    return undefined;
}

