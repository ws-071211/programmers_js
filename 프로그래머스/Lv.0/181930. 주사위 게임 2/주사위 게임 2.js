const solution = (a,b,c) => {
    let key;
    let res = 1;
    a===b&&b===c?key=1:a===b||b===c||a===c?key=2:key=3;
    switch(key){
        case 1:
            res=(a**3+b**3+c**3);
        case 2:
            res*=(a**2+b**2+c**2);
        case 3:
            res*=(a+b+c);
    }
    return res;
}