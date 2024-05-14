function solution(arr) {
    let res=0;
    arr.map((item)=>res+=item)
    return res/arr.length;
}