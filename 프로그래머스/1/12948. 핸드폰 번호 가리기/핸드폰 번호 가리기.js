function solution(phone_number) {
    let fir = phone_number.slice(0,phone_number.length-4)
    let las = phone_number.slice(-4,phone_number.length);
    return fir.replace(/[0-9]/g,'*')+las;
}