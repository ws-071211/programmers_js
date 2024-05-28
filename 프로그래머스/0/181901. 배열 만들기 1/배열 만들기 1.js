function solution(n, k) {
    return Array(n).fill().map((_,i)=>i+1).filter(i=>i%k==0)
}