let list:number[] = [1, 2, 3];

// let list1:number[] = [1, 2, 3, '4']; >>Err
let list1:(number | string)[] = [1, 2, 3, '4'];
// number 이거나 string 
