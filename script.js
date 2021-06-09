var secn = 0;
var min = 0;
var temp;
var dis = document.getElementById("clk");
var bool = "t";

function start(){
    /*function to start the stopClock*/
    bool = "t";
    min = 0;
    secn = 0;
    temp = setInterval(tick, 1000);
    dis.innerHTML = min + ":" + "0" + secn
    return;
}

function tick(){
    /*Stop clock logic*/
    secn += 1;
    if (bool == "f"){
        clearInterval(temp);
        return;
    }
    else if (secn <= 9){
                   
        dis.innerHTML = min + ":" + "0" + secn;
    }
    else if (secn >= 60){
        secn = 0;
        min += 1;
        dis.innerHTML = min + ":" + "0" + secn;
    }
    else{
        dis.innerHTML = min + ":" +secn;
    }
    return;
}

function stop(){
    /*function to stop the clock*/
    bool = "f";
    return;
}