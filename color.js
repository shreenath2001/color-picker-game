var numSquares = 6;
var colors =generateRandomColors(numSquares);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easy-btn");
var hardButton = document.getElementById("hard-btn");

colorDisplay.textContent=pickedColor;

for(var i = 0;i<squares.length;i++)
{
	//add initial colors to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare clickedcolor to pickedcolor
		if(pickedColor===clickedColor){
			messageDisplay.textContent="correct!";
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
			for(var i = 0;i<squares.length;i++){
				squares[i].style.backgroundColor=pickedColor;
			}
			resetButton.addEventListener("click",function(){
			resetButton.textContent="New Color";
		});
			hardButton.addEventListener("click",function(){
			resetButton.textContent="New Color";
		});
			easyButton.addEventListener("click",function(){
			resetButton.textContent="New Color";
		});
		}
		
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0;i<num;i++){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);

		var c="rgb("+r+", "+g+", "+b+")";
		arr.push(c);
	}
	//return that array
	return arr;
}

resetButton.addEventListener("click",function(){
	//generate random colors
	colors =generateRandomColors(numSquares);
	//pick a random color
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent=pickedColor;
	//change color of square
	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];		
	}
	//after winnig and again restting change the color of h1 to default
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";


});

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i = 0;i<3;i++){
		squares[i].style.backgroundColor=colors[i];		
	}
	squares[3].style.display="none";
	squares[4].style.display="none";
	squares[5].style.display="none";
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});

hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i = 0;i<6;i++){
		squares[i].style.backgroundColor=colors[i];		
	}
	squares[4].style.display="block";
	squares[3].style.display="block";
	squares[5].style.display="block";
	
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
});