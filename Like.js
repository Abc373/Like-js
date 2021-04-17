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