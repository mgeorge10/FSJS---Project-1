/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Matthew George - 10/6/2019
******************************************/

/***
Coding Project - Part 1
An array of 5 or more quotes with 4 properties - quote, source, citation, year.
Some quotes are without citation and/or year property to check for conditional statement later in the program.
***/

var quotes = [
  {
    quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: that all men are created equal.",
    source: "Martin Luther King",
    citation: "http://changingminds.org/analysis/i_have_a_dream.htm",
    year: 1963
  },  
  {
    quote: "Ask not what your country can do for you, but what you can do for your country.",
    source: "John F. Kennedy"
    //A sample of quote without Citation and Year properties
  }, 
  { 
    quote: "Non-violence is the greatest force at the disposal of mankind. It is mightier than the mightiest weapon of destruction devised by the ingenuity of man.",
    source: "Mahatma Gandhi",
    citation: "https://www.brainyquote.com/quotes/mahatma_gandhi_166284"
    //A sample of quote without Year property
  }, 
  {
    quote: "I am the way, the truth and the life.",
    source: "Jesus Christ",
    citation: "https://biblehub.com/john/14-6.htm",
    year: 32
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin Delano Roosevelt",    
    year: 1933
    //A sample of quote without Citation property
  } 
];


// console.log(quotes);  //Commented out for Final project - Console Test passed.

/***
Coding Project - Part 2
Function selects a random quote from the Quotes array
***/

function getRandomQuote() {    
    var randomNum = Math.floor(Math.random()*(quotes.length));
    return quotes[randomNum];      
}

// console.log(getRandomQuote()); //Commented out for Final project - Console Test passed.

/***
printQuote() function: grabs a random quote using the getRandomQuote() function, and then adds the quote 
to the HTML by targeting the 'quote-box' div. Checks if the randomly chosen quote has a citation or year
and then adds those fields if necessary.
***/

function printQuote(){
  var randomQuote = getRandomQuote();
  
  //empty var for the html message
  var html= '';

  //using 'class' and 'id' to use the needed CSS styles and placement.
  html+='<p class="quote">'+ randomQuote.quote +' </p><br>';
  html+='<p class="source" >'+ randomQuote.source + '  <br>';

  //'if' conditional statments for Year, Citation when needed
  if(randomQuote.year){
    html+='<span class="year"> Year: ' + randomQuote.year + ' </span><br>';
  }
  if(randomQuote.citation){
    html+='<span class="citation"> Citation: ' + randomQuote.citation + ' </span><br>';
  }
  
  html+= '</p>';

  var div = document.getElementById('quote-box');
  div.innerHTML = html;  
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call the printQuote function.
  So do not make any changes to the line of code below this comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
