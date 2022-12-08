const quotes = [
    { quote: "Faber est suae quisque fortunae.", author: "from White Collar" },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
        author: "Martin Fowler",
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde",
    },
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon",
    },
    {
        quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
        author: "Dan Salomon",
    },
    {
        quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
        author: "Antoine de Saint-Exupery",
    },
    {
        quote: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House",
    },
    {
        quote: "Fix the cause, not the symptom.",
        author: "Steve Maguire",
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
