var Like = function(like_finger, like_number, on_color, leave_color) {
    document.getElementById(like_finger).onmouseover = function() {
        document.getElementById(like_finger).style.backgroundColor = on_color;
        document.getElementById(like_number).style.color = on_color;
    }
    document.getElementById(like_number).onmouseover = function() {
        document.getElementById(like_finger).style.backgroundColor = on_color;
        document.getElementById(like_number).style.color = on_color;
    }
    document.getElementById(like_finger).onmouseleave = function() {
        document.getElementById(like_finger).style.backgroundColor = leave_color;
        document.getElementById(like_number).style.color = leave_color;
    }
    document.getElementById(like_number).onmouseleave = function() {
        document.getElementById(like_finger).style.backgroundColor = leave_color;
        document.getElementById(like_number).style.color = leave_color;
    }
    document.getElementById(like_number).onclick = function() {
        document.getElementById(like_number).innerText = String(parseInt(document.getElementById(like_number).innerText) + 1);
    }

    document.getElementById(like_finger).onclick = function() {
        document.getElementById(like_number).innerText = String(parseInt(document.getElementById(like_number).innerText) + 1);
    }
}
let information = {
    "version": "v0.0.1",
    "copyright": "Base_man",
    "How to use the method": "In 'like-1.js'",
    "What did I update": "Remove all IDs and colors to parameters you can pass"
}
