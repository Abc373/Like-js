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
    "What did I update": "Remove all IDs and colors to parameters you can pass",
    "How to invoke the function":{
        "Example(HTML invoke)":{
            "line1":"<!DOCTYPE html>",
            "line2":"<html lang='en'>",
            "line3":"<head>",
            "line4":"   <meta charset='utf-8'>",
            "line5":"   <meta name='author' content='Base_man'>",
            "line6":"   <title>Invoke JavaScript function",
            "line7":"</head>",
            "line8":"<body style="background-image: url(&quot;https://i0.hdslb.com/bfs/live/d4fab7a666bc627cc2bcb4f00aa6d2a7958cee80.png@1365w.webp&quot;);">",
            "line9":"   <div id='like_finger'></div>",
            "line10":"  <div id='like_finger'>233</div>",
            "line11":"   <script type='text/javascript' src='[driver]:[path]\Like-2.js'></script>",
            "line12":"  <script>Like("like_finger","like_number","blue","gray");</script>",
            "line13":"</body>"
        }
}
