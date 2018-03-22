


function lotto(){
	
		var a = Math.floor(Math.random() * 100);
	
	var b = Math.floor(Math.random() * 100);

	var c = Math.floor(Math.random() * 100);
	
	var d = Math.floor(Math.random() * 100);

	var e = Math.floor(Math.random() * 100);

	var f = Math.floor(Math.random() * 100);


	if(a !== b && b !== c && c !== d && d !== e && e !== f) {
	document.write(a + "," + b + "," + c + "," + d + "," + e + "," + f); 
	
}
}


var display = document.querySelector("#message");

button.addEventListener("click", function(){
	display.textContent = "lotto()";
})





// function lotto(){
	
// 		var a = Math.floor(Math.random() * 100);
	
// 	var b = Math.floor(Math.random() * 100);

// 	var c = Math.floor(Math.random() * 100);
	
// 	var d = Math.floor(Math.random() * 100);

// 	var e = Math.floor(Math.random() * 100);

// 	var f = Math.floor(Math.random() * 100);


// 	if(a !== b && b !== c && c !== d && d !== e && e !== f) {
// 	document.write(a + "," + b + "," + c + "," + d + "," + e + "," + f); 

// }
// }


// var number = document.querySelector("#message");

// button.addEventListener("click", function(){
// 	number.style.background = lotto();
// })




