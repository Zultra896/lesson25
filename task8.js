function fun8(str, num) {
    if (num < 0) {
        return ''
    }
    let result = ""
    for (let i = 0; i < num; i++) {
        if(i == num-1) {
            result += str
            break
        }
        result += str + " "
    }
    return result
}

console.log(fun8('Hello', 5))
