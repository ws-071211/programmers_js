function solution(myString) {
    let res = myString.split("").map((item)=>item<"l"?"l":item);
    return res.toString().replace(/,/g,"");
}