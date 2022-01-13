var cop = document.getElementById("heli1");

var cop2 = document.getElementById("heli2");

var body = document.getElementById("body");

var cloud = document.getElementById("c1");

var cloud1 = document.getElementById("c2");

pos = 350;
len = 1;
cp = 0;
cp1 = 0;

function fly(){
    
    if(pos <= -320){
        alert("Bye Bye!")
        clearInterval(t);
    }
    if(len >= 26){
        len = 0;
    }
    if(cp >= 200){
        cp = 0;
    }
    if(cp1 >= 200){
        cp1 = 0;
    }
    else{
        cloud.style.visibility = "visible";
        cloud1.style.visibility = "visible";
        body.style.backgroundColor = "skyblue";
        len += 1;
        pos -= 1;
        cp += 0.2;
        cp1 += 0.4;
        cop.style.width = len+"px";
        cop.style.marginTop = pos + "px";
        cop2.style.width = len+"px";
        cloud.style.left = cp +"px";
        cloud1.style.left = cp1 + "px";
    }
}



