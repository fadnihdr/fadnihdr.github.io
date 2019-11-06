var masoCount = 0;
document.getElementById("counter").innerHTML = "Counter = " + masoCount;


function multiplier() {
    let count = arguments[0];
    let tocheck = arguments[1];
    let tmp = "";
    let string1 = "";
    if (fadnimaso(tocheck)){
        tmp = "cieee. aku udah fix ini kok :). kamu gabisa macam2 beneran lagi. fadni nggabisa maso. kamu aja yang bisa lalalalalalalala"
    }
    else tmp = arguments[1];
    for (i = 0; i < count; i++){
        string1 = string1 + "<br>" + tmp;
    }
    return string1;

}

function fadnimaso() {
    let str = arguments[0];
    let uniq = "";
    for (var i = 0; i < str.length; i++){
        if (uniq.indexOf(str.charAt(i)) === -1){
            uniq += str[i];
        }
    }
    let list = ["padni mso", "fadni mso", "kontl mas", "fadni msho", "padni msho"];
    let isMaso = false;
    for (var j = 0; j < list.length; j++){
        if (list[j] === uniq){
            masoCount += 1;
            document.getElementById("counter").innerHTML = "Counter = " + masoCount;
            isMaso = true;
        }
    }
    if (masoCount >= 3){
        showimage();
    }
    return isMaso;

}

function showimage() {
    var img = document.createElement("IMG");
    img.src = "assets/img/unibrow.jpg";
    img.size = "800x450";
    document.getElementById("image").appendChild(img);
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
    document.getElementById("output").innerHTML = multiplier(n, str);
}
