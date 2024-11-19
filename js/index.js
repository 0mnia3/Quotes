var quotes = [
  { quote: '“Be yourself; everyone else is already taken.”', author: '--Oscar Wilde' },
  { quote: '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”', author: '--Albert Einstein' },
  { quote: '“To live is the rarest thing in the world. Most people exist, that is all.”', author: '--Oscar Wilde' },
  { quote: '“A friend is someone who knows all about you and still loves you.”', author: '--Elbert Hubbard' },
  { quote: '“Without music, life would be a mistake.”', author: '--Friedrich Nietzsche' },
  { quote: '“If you tell the truth, you dont have to remember anything. ”', author: '--Mark Twain' }
];

var lastQuote = -1;

function createRandomQuote() {
  var randomIndex;

  randomIndex = Math.floor(Math.random() * quotes.length);
  if (randomIndex === lastQuote) {
      randomIndex = (randomIndex + 1) % quotes.length; 
  }

  lastQuote = randomIndex;
  var randomQuote = quotes[randomIndex];

  document.getElementById('quote').innerHTML = randomQuote.quote;
  document.getElementById('author').innerHTML = randomQuote.author;
}
