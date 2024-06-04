function solution(num_str) {
    let res = 0;
    num_str.split('').map(item=>res+=Number(item))
    return res;
}