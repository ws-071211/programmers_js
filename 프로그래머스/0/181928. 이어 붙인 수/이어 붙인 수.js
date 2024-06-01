function solution(num_list) {
    let odd = [];
    let even = [];
    num_list.map(item=>item%2==0?odd.push(item):even.push(item));
    return +odd.join('')+(+even.join(''));
}