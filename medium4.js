function med4(arr) {
    let num = arr

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] < num[j]) {
                [num[i], num[j]] = [num[j], num[i]];
            }
        }
    }

    return num
}
  
let array1 = [5, 2, 9, 1, 5, 6];
let array2 = [10, 20, 30, 40, 50];
let array3 = [1, -2, 3, 0, -4, 5];

console.log(med4(array1))

console.log(med4(array2))

console.log(med4(array3))

