function solution(my_string) {
    let res = 0;
    my_string.split(/[^0-9]/).map(item=>res+=Number(item));
    return res;
}