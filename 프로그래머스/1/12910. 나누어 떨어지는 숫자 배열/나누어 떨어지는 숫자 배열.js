function solution(arr, divisor) {
    let fil = arr.filter(item=>item%divisor===0).sort((a,b)=>a-b);
    return fil.length!==0?fil:[-1];
}