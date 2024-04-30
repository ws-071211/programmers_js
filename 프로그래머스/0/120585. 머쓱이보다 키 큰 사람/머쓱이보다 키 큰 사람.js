function solution(array, height) {
    let res = array.filter((h)=>h > height);
    return res.length;
}