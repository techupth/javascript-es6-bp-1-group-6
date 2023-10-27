let height = undefined;
let result = check(height);

function check(height){
    let check = height ?? "Height is not defined";
    return check;
};

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
