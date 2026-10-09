const quotes = [
  {text:"The secret of getting ahead is getting started.",author:"Mark Twain"},
  {text:"It always seems impossible until it's done.",author:"Nelson Mandela"},
  {text:"Great things are done by a series of small things brought together.",author:"Vincent van Gogh"},
  {text:"You miss 100% of the shots you don't take.",author:"Wayne Gretzky"},
  {text:"Act as if what you do makes a difference. It does.",author:"William James"},
  {text:"The future depends on what you do today.",author:"Mahatma Gandhi"},
  {text:"Believe you can and you're halfway there.",author:"Theodore Roosevelt"},
  {text:"Well done is better than well said.",author:"Benjamin Franklin"},
  {text:"It is never too late to be what you might have been.",author:"George Eliot"},
  {text:"If opportunity doesn't knock, build a door.",author:"Milton Berle"},
  {text:"Success is the sum of small efforts, repeated day in and day out.",author:"Robert Collier"},
  {text:"The journey of a thousand miles begins with one step.",author:"Lao Tzu"}
];
let currentIndex = -1;
const $ = id => document.getElementById(id);
function showRandomQuote(){
  let nextIndex;
  if(quotes.length===1) nextIndex=0;
  else {do{nextIndex=Math.floor(Math.random()*quotes.length)}while(nextIndex===currentIndex)}
  currentIndex=nextIndex;
  const quote=quotes[currentIndex];
  $("quoteText").textContent=quote.text;
  $("quoteAuthor").textContent=quote.author;
  $("authorMark").textContent=quote.author.split(/\s+/).map(word=>word[0]).join("").slice(0,2).toUpperCase();
  $("quoteNumber").textContent=`${String(currentIndex+1).padStart(2,"0")} / ${String(quotes.length).padStart(2,"0")}`;
  $("feedback").textContent="";
}
$("newQuote").addEventListener("click",showRandomQuote);
$("copyQuote").addEventListener("click",async()=>{
  const text=`“${$("quoteText").textContent}” — ${$("quoteAuthor").textContent}`;
  try{
    await navigator.clipboard.writeText(text);
    $("feedback").textContent="Quote copied to clipboard.";
  }catch{
    const area=document.createElement("textarea");area.value=text;area.setAttribute("readonly","");area.style.position="absolute";area.style.left="-9999px";document.body.append(area);area.select();
    const copied=document.execCommand("copy");area.remove();
    $("feedback").textContent=copied?"Quote copied to clipboard.":"Copy isn't available here. You can select and copy the quote manually.";
  }
});
showRandomQuote();