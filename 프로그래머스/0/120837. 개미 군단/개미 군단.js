function solution(hp) {
    let res = 0;
    res = ~~(hp/5) + ~~((hp%5)/3) + ((hp%5)%3); 
    return res;
}