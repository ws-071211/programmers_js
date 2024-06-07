function solution(arr, delete_list) {
    let res = [];
    let cnt = 0;
    for(let i = 0; i<arr.length;i++){
        for(let j = 0; j<delete_list.length;j++){
            if(arr[i]==delete_list[j]){
                cnt++;
            }
        }
        cnt>0?null:res.push(arr[i])
        cnt = 0;
    }
    return res;
}