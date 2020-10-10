"use strict";

window.onload = function()
{
    let player = 1; //var that keeps track of whos turn
    var board = document.getElementById("board");
    var squares = board.querySelectorAll("div");
    var status = document.getElementById("status");
    var tiles = [9]; // stores all board div elements in the correct position
    var game = ["","","","","","","","",""]; //keeps track of the X and O positions

    //Creates the board and all features (click,hover and moree style classes)
    for (var i= 0;i < squares.length; i++)
    {
        squares[i].classList.add("square");
        tiles[i] = squares[i];
        click(squares[i]);
        hover(squares[i]);
    }

    //Function for the hover feature
    function hover(item)
    {
        //pink when mouse is over square
        item.onmouseover = function(element)
        {
            console.log("Mouse Over Square");
            element.target.className += " hover";
        }
        //disables when mouse is no longer on square
        item.onmouseout = function(element)
        {
            console.log("Mouse Off Square");
            element.target.classList.remove("hover");
        }
    }
    
    /*Function for click feature 
    After a play, the click is disabled so that it can not be changed */
    function click(item)
    {
        item.onclick = function(element)
        {
            console.log("Clicked Square ");

            //When clicked by player 1 an X appears on the square
            if (player == 1)
            {
                element.target.innerHTML = "X";
                element.target.classList.remove("O");
                element.target.className += " X";
                console.log("Play X");
                element.target.onclick = null; //Disables click
                player = 2; //Switch to player 2 for next move
                position(item,"X");
                checkBoard("X");
            }
             //When clicked by player 2 an O appears on the square
            else
            {
                element.target.innerHTML = "O";
                element.target.classList.remove("X");
                element.target.className += " O";
                console.log("Play O");
                element.target.onclick = null;
                player = 1;
                position(item,"O");
                checkBoard("O");
            }
        }

    }

    /*Function to input the position of the X or O in the 
    list that tracks thee position*/
    function position(square,play)
    {
        var num = tiles.indexOf(square);
        game[num] = play;
    }
    
    //Function that checks the board for "XXX" or "OOO" (winning play)
    function checkBoard(item)
    {
        console.log("Checking " + item);
       
        if (game[0] == item && game[1] == item && game[2] == (item))
        {
            win(item);
        }
       else if (game[3] == item && game[4] == item && game[5] == item)
        {
            win(item);
        }
        else if (game[6] == item && game[7] == item && game[8] == item)
        {
            win(item);
        }
        else if (game[0] == item && game[3] == item && game[6] == item)
        {
            win(item);
        }
        else if (game[1] == item  && game[4] == item && game[7] == item)
        {
            win(item);
        }
        else if (game[2] == item && game[5] == item && game[8] == item)
        {
            win(item);
        }
        else if (game[2] == item && game[4] == item && game[6] == item)
        {
            win(item);
        }
        else if (game[0] == item && game[4] == item && game[8] == item)
        {
            win(item);
        }
    }

    /*Function that is used to display the winner and 
    not allow anymore moves to bee played*/
    function win(str)
    {
        status.classList.add("you-won");
        status.innerHTML = "Congratulations! " + str + " is the Winner!";
        for(var i = 0; i < squares.length; i++)
        {
            squares[i].onclick = null;
        }
    }

    //Below is all the features for thee button
    var button = document.querySelector("button");

    // hover feature
    button.onmouseover = function(element)
    {
        console.log("Mouse Over Button");
        button.classList.add("btn:hover");
    }

    // click feature
    button.onclick = function(element)
    {
        console.log("Clicked Button");
        for (var i=0;i < squares.length;i++)
        {
            squares[i].innerHTML = "";
            click(squares[i]);
        }
        player = 1;
        game = ["","","","","","","","",""];
        status.className = null;
        status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        console.log("Clear Board");
    }
}