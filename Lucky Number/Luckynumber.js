function lotto(){
	var numbers = [];

for(var i = 0; i < 6; i++) {

		numbers.push(Math.floor(Math.random(7) * 100));
		
	}

	return (_.uniq(numbers));
		
	}

	var display = document.querySelector("#message");

button.addEventListener("click", function(){
	display.textContent = lotto();
})
