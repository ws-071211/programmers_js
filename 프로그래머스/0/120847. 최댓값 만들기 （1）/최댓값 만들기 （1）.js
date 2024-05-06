function solution(numbers) {
    let res = numbers.sort((x,y)=>y-x);
    return res[0] * res[1];
}