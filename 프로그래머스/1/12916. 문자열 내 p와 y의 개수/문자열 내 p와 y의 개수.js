function solution(s){
    let res = 0;
    s.split('').map((item)=>item.toLowerCase()==='p'?res++:item.toLowerCase()==='y'?res--:null)
    return !res;
}