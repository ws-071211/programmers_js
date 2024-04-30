function solution(n) {
    let res = [];
    while(n>=0){
        n % 2 != 0 ? res.unshift(n) : null
        n -= 1;
    }
    return res;
}