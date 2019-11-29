//let masoCount = 0;
//document.getElementById("counter").innerHTML = "Counter = " + masoCount;


function multiplier() {
    let count = arguments[0];
//  let tocheck = arguments[1];
    let tmp = "";
    let string1 = "";
/**
    if (fadnimaso(tocheck)){
        tmp = "cieee. aku udah fix ini kok :). kamu gabisa macam2 beneran lagi. fadni nggabisa maso. kamu aja yang bisa lalalalalalalala"
    }

    else tmp = arguments[1];
 **/
    tmp = arguments[1];
    for (i = 0; i < count; i++){
        string1 = string1 + "<br>" + tmp;
    }
    return string1;

}

/**
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
**/

function showimg() {
    let img = document.createElement("IMG");
    let num = Math.random(0,9) * 10;
    let s1 = num.toFixed(0);
    if (s1 == 1) {
        img.src = "assets/img/6";
        console.log("1");
    } else if (s1 == 2) {
        img.src = "assets/img/7";
        console.log("2");
    } else if (s1 == 3) {
        img.src = "assets/img/cuddle1";
        console.log("3");
    } else if (s1 == 4) {
        console.log("4");
        img.src = "assets/img/cuddle2";
    } else if (s1 == 5) {
        console.log("5");
        img.src = "assets/img/cuddle3";
    } else if (s1 == 6) {
        console.log("6");
        img.src = "assets/img/wht1";
    } else if (s1 == 7) {
        console.log("7");
        img.src = "assets/img/wht2";
    } else if (s1 == 8) {
        console.log("8");
        img.src = "assets/img/cat3";
    } else if (s1 == 9) {
        console.log("9");
        img.src = "assets/img/cuddle4";
    } else {
        img.src = "assets/img/2kitten";
        console.log("0");
    }
    img.size = "800x600";
    document.getElementById("image").appendChild(img);

}

function iloveyou() {
    let n = 3000;
    let str = "I love you 3000 boo. Good work for today. Get rid of all the tiring thoughts. Hope you get home safely <3";
    document.getElementById("output").innerHTML = multiplier(n, str);
}

function aishiteru() {
    let n = 3000;
    let str = "アイステル。 グーグル翻訳を使用しないでください >w<";
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function saranghae() {
    let n = 3000;
    let str = "사랑해 여보. 구글 번역을 시도하지 마십시오 :)";
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function sayangkamu() {
    let n = 3000;
    let str = "Aku sayang kamu <3. Capek banget ya hari ini UwU. capek2 tapi lebih dari 1000 juga :(. Gapapa, ntar dirumah bisa langsung tepar. Hati2 ya dijalan boo";
    document.getElementById("output").innerHTML = multiplier(n, str)
}

function customtext() {
    let str = document.getElementById("input1").value;
    let n = document.getElementById("input2").value;
    document.getElementById("output").innerHTML = multiplier(n, str);
}
