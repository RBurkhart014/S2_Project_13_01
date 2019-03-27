"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Ryan Burkhart
   Date: 3/13/19  
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;

function init() {
   var stars = document.querySelectorAll("span#stars img");
   for (var i = 0; i < stars.length; i++) {
         stars[i].style.cursor = "pointer";
         stars[i].addEventListener("mouseenter", lightStars);
   }
   document.getElementById("comment").addEventListener("keyup", updateCount);
}

//This made it therefore the textbox displaying "Stars" appears next to the actual stars

function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = starNumber + " star(s)";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click", function() {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

//This made it so when you click on a star itll highlight yellow/gold and if you move the mouse off itll disappear

function turnOffStars(e) {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";      
      document.getElementById("rating").value = "";
}
}

//This allowed the stars to be clicked on & held in position when the mouse moves off

function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText) ;
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}

//This allowed the word count to not submit anything past 1000 characters





 
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   