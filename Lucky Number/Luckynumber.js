
function lotto(numbers) {
	if(numbers.size == 6) {
		let arr = Array.from(numbers);
		return arr.join(", ") 
	}
	
	num = Math.floor(Math.random() * 100);
	

	numbers.add(num);
	
	return lotto(numbers);
}

		
	var display = document.querySelector("#message");

button.addEventListener("click", function(){
	display.textContent = lotto(new Set([]));
})
