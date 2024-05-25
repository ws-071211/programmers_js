function solution(num) {
    let cnt = 0;
    let res = num;
    while(res != 1){
        if(res == 1){
            return 1;
        } else if(res%2 == 0){
            res=res/2;
        }else if(res%2 != 0){
            res = res*3+1
        }
        cnt++;
    }
    return cnt>500?-1:cnt;
}