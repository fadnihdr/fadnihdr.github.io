function multiplier() {
    let count = arguments[0];
    let string1 = arguments[1];
    for (i = 0; i < 1000; i++){
        string1 = string1 + "<br>" + arguments[1];
    }
    return string1;

}
function defthanks1() {
    let n = 1000;
    let str = "Terimakasih yola atas semuanya, kamu bikin aku seneng. Aku seneng udah bikin kamu seneng";
    document.getElementById("output").innerHTML = multiplier(n, str);
}

function defthanks2() {
    let n = 5000;
    let str = "Terimakasih yola atas semuanya, kamu bikin aku seneng. Aku seneng udah bikin kamu seneng";
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function defsorry1() {
    let n = 1000;
    let str = "Maafin aku ya yola udah bikin masalah ke hidup kamu. Please stay strong, aku dan yang lain2 masih support kamu kok"
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function defsorry2() {
    let n = 5000;
    let str = "Maafin aku ya yola udah bikin masalah ke hidup kamu. Please stay strong, aku dan yang lain2 masih support kamu kok"
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function customtext() {
    let str = document.getElementById("input1").value;
    let n = document.getElementById("input2").value;
    if (str.toLowerCase() === "fadni maso" || str.toLowerCase() === "konti maso"){
        str = "fadni gabisa maso, cuman yola yang bisa maso lalalalalalala"
    }
    document.getElementById("output").innerHTML = multiplier(n, str);
}