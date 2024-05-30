function solution(my_string, index_list) {
    var res = '';
    index_list.map(item=>res+=my_string.split('')[item])
    return res;
}