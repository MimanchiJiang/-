let style = document.querySelector('#style');
let div1 = document.querySelector('#div1');
let html = document.querySelector('#html');
let string = `
/* 你好，我叫小蒋
接下来我来演示一下我的前端功底
首先我要准备一个div*/
#div1{
    
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要将它变成八卦图
首先，让他变成圆圈
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*加两个球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

`;
let string2 = "";
//由于JS会自动将所有回车转换成空格，replace可以将空格变成html的回车,但是只能变第一个空格
//运用正则表达式，选择所有的空格

let n = 0

//substring  显示从0到第n个字符。不好用 不用
//函数的回调
let step = () => {
    setTimeout(() => {
        //如果不是回车，就照搬
        //如果是回车，就不照搬
        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            string2 += "&nbsp;";
        }
        else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scroll(0, 9999);
        html.scroll(0, 9999);
        if (n + 1 < string.length) {
            n = n + 1;
            step();
        }
    }, 10);
}
step();





