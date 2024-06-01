function solution(num_list) {
    let cnt = [1,0];
    num_list.map((item)=>{
        cnt[0]*=item;
        cnt[1]+=item;
    })
    return cnt[0]>cnt[1]**2?0:1;
}