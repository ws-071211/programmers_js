function solution(t, p) {
    let res = [];
    for(let i = 0; i <= t.length-p.length;i++){
        let s = t;
        res.push(s.slice(i,i+p.length));
    };
    res = res.filter((item)=>Number(item)<=Number(p));
    return res.length;
}