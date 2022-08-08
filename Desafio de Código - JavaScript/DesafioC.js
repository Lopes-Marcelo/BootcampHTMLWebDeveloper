let input = gets();
let leitorNivel = parseInt(input)
let C = leitorNivel

for (let i = 0; i < C; i++) {
    
    input = gets()
    let N = parseInt(input)
  	
  	if (N > 8000){
    		console.log("Mais de 8000!");
  	}	else { 
      console.log("Inseto!");
    }
}
