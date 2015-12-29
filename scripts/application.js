$(function() {
	var quotes = [
		{ quote: "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.", quoter: "A. A. Milne" },
		{ quote: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.", quoter: "Ambrose Redmoon" },
		{ quote: "We are what we repeatedly do; excellence, then, is not an act but a habit.", quoter: "Aristotle" },
		{ quote: "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.", quoter: "Lao-Tze" },
		{ quote: "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.", quoter: "John Rushkin" },
		{ quote: "Even if you’re on the right track, you’ll get run over if you just sit there.", quoter: "Will Rogers" },
		{ quote: "You miss 100 percent of the shots you never take.", quoter: "Wayne Gretzky" },
		{ quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", quoter: "Antoine de Saint-Exupery" },
		{ quote: "You can do anything, but not everything.", quoter: "David Allen" },
		{ quote: " To the man who only has a hammer, everything he encounters begins to look like a nail.", quoter: "Abraham Maslow" }
	]
	
	var numberQuotes = quotes.length;
	var quoteNumber = Math.floor((Math.random() * numberQuotes) + 1);
	var quoteText = "&ldquo;";
	quoteText += quotes[quoteNumber].quote;
	quoteText += "&rdquo;";
	
	var quoterText = quotes[quoteNumber].quoter;
	
	$("blockquote").html(quoteText);
	$("p").html(quoterText);
	
	$("#newQuote").on("click", function() {
	    quoteNumber = Math.floor((Math.random() * numberQuotes) + 1);
		quoteText = "&ldquo;";
		
		quoteText += quotes[quoteNumber].quote;
		
		quoteText += "&rdquo;";
		
		quoterText = quotes[quoteNumber].quoter;
		
		$("blockquote").html(quoteText);
		$("p").html(quoterText);
	});
});