function solution(ineq, eq, n, m) {
    if(ineq=="<"){
        if(eq=="!"){
            return +(n<m);
        }
        else{
            return +(n<=m);
        }
    }else{
        if(eq=="!"){
            return +(n>m);
        }else{
            return +(n>=m);
        }
    }
}