function solution(n)
{
    let arr = [...n.toString()];
    let res = 0;
    arr.forEach((e)=>{
        res += +e;
    })
    return res
}