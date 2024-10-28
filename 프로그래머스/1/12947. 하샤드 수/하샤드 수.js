function solution(x) {
    const n = x.toString().split('').map((item)=>Number(item));
    return Number.isInteger(x/n.reduce((acc,cur)=>cur+acc));
}