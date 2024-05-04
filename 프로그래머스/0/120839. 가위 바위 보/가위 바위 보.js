function solution(rsp) {
    let rsp_list = rsp.split("");
    let res = [];
    const r = {
        0: 5,
        2: 0,
        5: 2
    };
    rsp_list.map((item)=>res.push(r[item]));
    return res.toString().replace(/,/g,"");
}