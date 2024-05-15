function solution(seoul) {
    let res = 0;
    seoul.map((item,index)=>item==='Kim'&&res<=0?res=index:null)
    return '김서방은 '+res+'에 있다';
}