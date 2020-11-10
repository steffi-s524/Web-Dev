let theBody = document.querySelector('body');
// console.log(theBody);
let theButton = document.querySelector("button");
let theText = document.querySelector('h2');
//
// triggering an event with a callback function
theButton.addEventListener('click', MouseClick);

function MouseClick(){
	console.log("cick!!!");
	theBody.style.backgroundColor = "#601683";
	theBody.style.color = '#f4fbfe';
	document.querySelector('h2').textContent = "I thought this reading was all over the place. I agree that the message can be the medium. However, I thought this book was trying to be more of a MOMA piece that a book with info.	Some quotes that stood out: Our Age of 30-million toy trucks were bought in the U.S. in 1966. Anxiety is, in great part, the result of trying to do today's job with yesterday's tools with yesterday's concepts, the book, an extension of the eye, clothing, an extension of the skin";
}

// triggering an event with ES6 arrow notation:
document.addEventListener('key', theEvent => {
	if (theEvent.keyCode === 13){
		theText.textContent = "Thanks for reading!";
	}
})

// common ways of triggering a function you'll often see online
document.addEventListener('key',function() {
})
