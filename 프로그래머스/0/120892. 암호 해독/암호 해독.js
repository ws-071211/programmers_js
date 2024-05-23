function solution(cipher, code) {
    let p = cipher.split('');
    let res = [];
    for(let i = code-1;i<p.length;i+=code){
        res.push(p[i]);
    }
    return res.join('');
}