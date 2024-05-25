function solution(s) {
    let i = Math.floor(s.length/2);
    return s.length%2!=0?s[i]:s[i-1]+s[i];
}