function solution(arr, n) {
    return arr.map((v,i)=> arr.length%2 !== i%2 ? v+n : v);
}