function solution(name, yearning, photo) {
    let res = [];
    photo.forEach(item => {
        let cnt = 0;
        item.forEach(item2 => {
            if (name.includes(item2)) {
                let index = name.indexOf(item2);
                cnt += yearning[index];
            }
        });
        res.push(cnt);
    });
    
    return res;
}