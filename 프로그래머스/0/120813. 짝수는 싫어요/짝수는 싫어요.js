function solution(n) {
    let res = [];
    while(n>=0){
        n % 2 != 0 ? res.push(n) : null
        n -= 1;
    }
}