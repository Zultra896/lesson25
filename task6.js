function fun6(arrStr) {
    let length = []
    for (let i = 0; i < arrStr.length; i++) {
        length.push(arrStr[i].length)
    }
    return length
}

let str = ["dsdfaf", "dsdfsfsesfd", "sd", "ssfdsds", "s"]

console.log(fun6(str))