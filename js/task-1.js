'use strict';
function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
  }
  slugify("Arrays for begginers");
  console.log(slugify("Arrays for begginers"));
  slugify("English for developer");
  console.log(slugify("English for developer"));
  slugify("Ten secrets of JavaScript");
  console.log(slugify("Ten secrets of JavaScript"));
  slugify("How to become a JUNIOR developer in TWO WEEKS");
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));