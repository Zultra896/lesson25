function med2(str) {
    let len = ""
    for (let i = str.length - 1 ; i >= 0; i--) {
        len += str[i]
    }
    return len
}

console.log(med2("Hello!"))