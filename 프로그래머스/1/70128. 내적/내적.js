function solution(a, b) {
    let cnt = 0;
    for(let i = 0;i<a.length;i++){
        cnt += a[i]*b[i];
    }
    return cnt;
}