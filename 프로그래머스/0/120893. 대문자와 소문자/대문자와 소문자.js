function solution(my_string) {
    let res =my_string.split("").map((item)=>!(/[a-z]/.test(item))?item.toLowerCase():item.toUpperCase());
    return res.toString().replace(/,/g,"");
}