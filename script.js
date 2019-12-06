// use variables to simplify your life!
// document.getElementById("one").classList.remove("tan");
// elem.classList.add("opaque");
// document.getElementById("your-id").src = "your_image.png";
// element.classList.add("your-class");
// element.classList.remove("your-class");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var ione = document.getElementById("ione");
var itwo = document.getElementById("itwo");
var ithree = document.getElementById("ithree");
var bone = document.getElementById("bottomone");
var btwo = document.getElementById("bottomtwo");
var bthree = document.getElementById("bottomthree");

function addImageOne(){
	document.getElementById("one").remove();
	ione.classList.remove("display-none");
	bone.classList.remove("display-none");
}

function addImageTwo(){
	document.getElementById("two").remove();
	itwo.classList.remove("display-none");
	btwo.classList.remove("display-none");
}

function addImageThree(){
	document.getElementById("three").remove();
	ithree.classList.remove("display-none");
	bthree.classList.remove("display-none");
}