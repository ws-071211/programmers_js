function solution(arr, queries) {
    let res = [];
    for(const [s,e,k] of queries){
        const sub = arr.filter((v,i)=> s<=i&&i<=e&&k<v);
        res.push(Math.min(...sub)===Infinity?-1:Math.min(...sub));
    }
    return res
}