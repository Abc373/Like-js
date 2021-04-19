var Like = function() {
    document.getElementById("like_finger").onmouseover = function() {
        document.getElementById("like_finger").style.backgroundColor = "blue";
        document.getElementById("like_number").style.color = "blue";
    }
    document.getElementById("like_number").onmouseover = function() {
        document.getElementById("like_finger").style.backgroundColor = "blue";
        document.getElementById("like_number").style.color = "blue";
    }
    document.getElementById("like_finger").onmouseleave = function() {
        document.getElementById("like_finger").style.backgroundColor = "gray";
        document.getElementById("like_number").style.color = "gray";
    }
    document.getElementById("like_number").onmouseleave = function() {
        document.getElementById("like_finger").style.backgroundColor = "gray";
        document.getElementById("like_number").style.color = "gray";
    }
    document.getElementById("like_number").onclick = function() {
        document.getElementById("like_number").innerText = String(parseInt(document.getElementById("like_number").innerText) + 1);
    }
    document.getElementById("like_finger").onclick = function() {
        document.getElementById("like_number").innerText = String(parseInt(document.getElementById("like_number").innerText) + 1);
    }
}
let information={
    "version":"v0.0.1",
    "copyright":"Base_man",
    "How to use the method":"If you are not good at the IT,please read it:First invoke this function{like this:[function_name](parameter),function_name like:Object or you make the function's name.}.Second,Ginseng."
}
