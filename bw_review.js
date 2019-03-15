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
         document.addEventListener("mouseenter", lightStars());
   }
   document.getElementById("commentField").addEventListener("keyup", Count());
}

function lightStars() {
      var starNumber = event.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber.length; i++) {
            stars[i].src = "url(bw_star2.png)";
      }
}


  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   