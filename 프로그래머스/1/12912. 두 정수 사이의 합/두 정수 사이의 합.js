function solution(a, b) {
    let s = [a,b];
    let res = 0;
    s.sort((a,b)=>a-b);
    for(let i = s[0];i<=s[1];i++){
        res=res+i;
    }
    return res;
}