function solution(num_list) {
    let res = num_list.filter(i=>i<0);
    return res.length==0?-1:num_list.indexOf(res[0]);
}