let height = undefined;
let result = checkHeight(height);

function checkHeight(height) {
    let result = height ?? "Height is not defined";
    return result;
}

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
