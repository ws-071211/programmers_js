function solution(num_list) {
    let res=[0,0];
    num_list.filter((i)=>i%2===0?res[0]+=1:res[1]+=1);
    return res;
}