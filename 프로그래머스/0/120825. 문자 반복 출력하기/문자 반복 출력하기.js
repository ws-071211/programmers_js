function solution(my_string, n) {
    let str = my_string.split("");
    let res = [];
    str.forEach((ch)=>res.push(ch.repeat(n)))
    return res.toString().replace(/,/g,"");
}