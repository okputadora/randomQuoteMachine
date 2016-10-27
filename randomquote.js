var xhr = new XMLHttpRequest();
xhr.open("GET: method=getQuote&key=457653&format=xml&lang=en", "http://forismatic.com/en/", true);
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);
