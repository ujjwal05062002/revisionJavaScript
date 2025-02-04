<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .main{
            width: 50vw;
            height: 50vh;
            display: grid;
            place-items: center;
            background-color: aqua;
            color: navy;
        }
    </style>
  </head>
  <body>
    <div
      class="main"
      onmouseover="fun1()"
      onmouseenter="fun2()"
      onmousedown="fun3()"
      onmouseleave="fun4()"
      onclick="fun5()"
      ondblclick="fun6()"
      onmousemove="fun7()"
      onmousewheel="fun8()"
      onmouseout="fun9()"
      onmouseleave="fun10()"
    >
    No Event 
    </div>
    <script>
        var main = document.querySelector(".main")

        function fun1(){
            main.style.backgroundColor = "red"
            main.style.color = "white"
            main.innerHTML = "On mouse over event"
            console.log("On mouse over");
        }
    </script>
  </body>
</html>
