function solution(s) {
    let res = s.split(" ").sort((a,b)=>b-a);
    let len = res.length-1;
    return res[len]+" "+res[0];
}