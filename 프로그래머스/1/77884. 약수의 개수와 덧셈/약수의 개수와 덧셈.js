function solution(left, right) {
    let arr = [];
    let res = 0;
    for(let i = left;i<=right;i++){ 
        for(let j = 1;j<=i;j++){
               if(i%j==0)
                   arr.push(j);
        }
        arr.length%2==0?res+=i:res-=i
        arr = []
    }
    return res;
}