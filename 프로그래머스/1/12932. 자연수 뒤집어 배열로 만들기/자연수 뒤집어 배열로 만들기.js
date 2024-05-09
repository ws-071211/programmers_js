function solution(n) {
    let res = ((""+n).split("").reverse());
    return res.map((item)=>Number(item));
}