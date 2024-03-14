function solution(s) {
    let str = [...s];
    let str2 = [];
    let answer = [];
    for(let i = 0; i < str.length; i++){
        if(str2.includes(str[i])){
            answer.push(str2.length-str2.lastIndexOf(str[i]));
        }else{
            answer.push(-1)
        }
        str2.push(str[i]);
    }
    return answer;
}