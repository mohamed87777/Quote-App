const quotes = [
  {
    Quote: "Be yourself; everyone else is already taken.",
    Author: "Oscar Wilde",
  },
  {
    Quote: "So many books, so little time.",
    Author: "Frank Zappa",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "Marcus Tullius Cicero",
  },
  {
    Quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    Author: "Robert Frost",
  },
  {
    Quote: "You only live once, but if you do it right, once is enough.",
    Author: "Mae West",
  },
  {
    Quote: "I'm selfish, impatient and a little insecure. I make mistakes.",
    Author: "Marilyn Monroe",
  },
  {
    Quote: "Two things are infinite: the universe and human stupidity.",
    Author: "Albert Einstein",
  },
  {
    Quote: "A room without books is like a body without a soul.",
    Author: "Marcus Tullius Cicero",
  },
  {
    Quote: "Be the change that you wish to see in the world.",
    Author: "Mahatma Gandhi",
  },
  {
    Quote: "A friend is someone who knows all about you and still loves you.",
    Author: "Elbert Hubbard",
  },
  {
    Quote: "Always forgive your enemies; nothing annoys them so much.",
    Author: "Oscar Wilde",
  },
  {
    Quote: "We accept the love we think we deserve.",
    Author: "Stephen Chbosky",
  },
  {
    Quote: "Without music, life would be a mistake.",
    Author: "Friedrich Nietzsche",
  },
  {
    Quote: "Insanity is doing the same thing, over and over again.",
    Author: "Narcotics Anonymous",
  },
];

let lastIndex = -1;

function showRandomQuote() {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  console.log(lastIndex);

  const quoteObj = quotes[randomIndex];
  document.getElementById("quote-box").innerHTML = `
    "${quoteObj.Quote}"<br><br>
    <strong>— ${quoteObj.Author}</strong>
  `;
}
