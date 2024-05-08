function solution(sides) {
    let s = sides.sort((a,b)=>b-a);
    return s[0]<s[1]+s[2]?1:2;
}