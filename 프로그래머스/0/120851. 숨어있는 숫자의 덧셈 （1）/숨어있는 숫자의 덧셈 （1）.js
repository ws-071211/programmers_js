function solution(my_string) {
    let s = my_string.split("");
    let res = 0;
    let reg = /[0-9]/;
    s.map((item)=>reg.test(item)?res=res+parseInt(item):null)
    return res;
}