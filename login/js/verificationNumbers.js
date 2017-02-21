/**
 * Created by Administrator on 2017/1/12.
 */
/**生成一个随机数**/
function randomNum(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}


/**生成一个随机色**/
function randomColor(min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
};



function showCheck(a){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var width=c.width;
    var height=c.height;

    ctx.clearRect(0,0,1000,1000);
    ctx.font = "80px 'Microsoft Yahei'";
    ctx.fillText(a,0,100);
    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    /**绘制干扰线**/
    for(var i=0; i<8; i++){
        ctx.strokeStyle = randomColor(40,180);
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo( randomNum(0,width), randomNum(0,height) );
        ctx.lineTo( randomNum(0,width), randomNum(0,height) );
        ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<100; i++){
        ctx.fillStyle = randomColor(0,255);
        ctx.beginPath();
        ctx.arc(randomNum(0,width),randomNum(0,height), 3, 0, 2*Math.PI);
        ctx.fill();
    }

}
var code ;
function createCode(){
    code = "";
    var codeLength = 4;
    var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*57);
        code +=selectChar[charIndex];
    }
/*
    if(code.length != codeLength){
        createCode();
    }
*/
    showCheck(code);
    console.log(code)

}

function validate () {
    console.log(code)
    var inputCode = document.getElementById("J_codetext").value.toUpperCase();
    var codeToUp=code.toUpperCase();
    if(inputCode.length <=0) {
        document.getElementById("J_codetext").setAttribute("placeholder","输入验证码");
        createCode();
        return false;
    }
    else if(inputCode != codeToUp ){
        document.getElementById("J_codetext").value="";
        document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");
        createCode();
        return false;
    }
    else {
        //window.open(document.getElementById("J_down").getAttribute("data-link"));
        document.getElementById("J_codetext").value="";
        createCode();
        return true;
    }

}
