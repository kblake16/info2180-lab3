"use strict";

window.onload = function()
{
    let player = 1;
    var board = document.getElementById("board");
    var squares = board.querySelectorAll("div");
    var status = document.getElementById("status");
    var tiles = [];

    for (var i= 0;i < squares.length; i++)
    {
        squares[i].classList.add("square");
        click(squares[i]);
    }

    
    function click(item)
    {
        item.onclick = function(element)
        {
            console.log("Clicked Square ");

            if (player == 1)
            {
                element.target.innerHTML = "X";
                element.target.classList.remove("O");
                element.target.className += " X";
                console.log("Play X");
                element.target.onclick = null;
                player = 2;
            }
            else
            {
                element.target.innerHTML = "O";
                element.target.classList.remove("X");
                element.target.className += " O";
                console.log("Play O");
                element.target.onclick = null;
                player = 1;
            }

        }

    }

    /*function hover(item)
    {
        var text = element.target.innerHTML
        if (text === "O")
        {
            item.onmouseover = function(element)
            {
                console.log("Mouse Over Square");
                element.target.classList.add("hover.O");
            }

        }
        else
        {
            item.onmouseover = function(element)
            {
                console.log("Mouse Over Square");
                element.target.classList.add("hover");
            }

        }
    }*/


    var button = document.querySelector("button");

    button.onmouseover = function(element)
    {
        console.log("Mouse Over Button");
        button.classList.add("btn:hover");
    }
    button.onclick = function(element)
    {
        console.log("Clicked Button");
        for (var i=0;i < squares.length;i++)
        {
            squares[i].innerHTML = "";
            click(squares[i]);
        }
        console.log("Clear Board");
    }
}