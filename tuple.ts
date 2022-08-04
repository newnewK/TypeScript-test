let x: [string, number];
x = ['hello', 30];
// x = [ 10, 'mark']; >> Err

// x[2] = 'newnew'; >> Err :: x 인덱스가 0,1 밖에 없으므로
// x[2] >> Err 

const person: [string, number] = ['mark', 39];
// const [first, second, thir] = person; >>Err :: person 인덱스 0,1 밖에 없으므로 