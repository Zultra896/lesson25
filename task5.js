function fun5(int) {
    if(int < 0) {
        return int * -1
    } else {
        return int
    }
}

console.log(fun5(prompt("random number")))