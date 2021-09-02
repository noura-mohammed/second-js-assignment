var author=document.getElementById("author");
var quote=document.getElementById("quote");
var qlist=[
    {
        author:"Frank Zappa",
        quote:"So many books, so little time."
    },
    {
        author:"Marcus Tullius Cicero",
        quote:"A room without books is like a body without a soul."
    },
    {
        author:"Mae West",
        quote:"You only live once, but if you do it right, once is enough."
    },
    {
        author:" Mahatma Gandhi",
        quote:"Be the change that you wish to see in the world."
    },
    {
        author:"Elbert Hubbard",
        quote:"A friend is someone who knows all about you and still loves you."
    },
    {
        author:"Oscar Wilde",
        quote:"Always forgive your enemies; nothing annoys them so much."
    }
];
function quotes(){
    var i=Math.floor(Math.random()*qlist.length);
    author.innerHTML=qlist[i].author;
    quote.innerHTML=qlist[i].quote;
}
