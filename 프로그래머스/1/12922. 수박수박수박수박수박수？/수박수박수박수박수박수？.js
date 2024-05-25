function solution(n) {
    let res = "";
    for(let i = 0;i<n;i++){
        i%2==0?res+="수":res+="박"
    }
    return res;
}