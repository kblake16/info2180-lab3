"use strict";

window.onload = function()
{
    var board = document.getElementById("board");
    var squares = board.querySelectorAll("div");
    var i;
    for (i=0;i < squares.length;i++)
    {
        squares[i].classList.add("square");
    }

    var button = document.querySelector("button");

    button.onmouseover = function(element)
    {
        console.log("Mouse Over");
        button.classList.add("btn:hover");
    }
    button.onclick = function(element)
    {
        for (i=0;i < squares.length;i++)
        {
        squares[i].classList.add("square");
        }
    }
}