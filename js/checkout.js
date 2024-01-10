

// Exercise 6
function validate(event) {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress"); 
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword"); 
	var errorPhone = document.getElementById("errorPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)){
		fName.style.border = '2px solid red';
    	errorName.style.display = 'block';
		error++;
	} else {
		fName.style.border = '';
    	errorName.style.display = 'none';
	}

	if(fLastN.value === "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)){
		fLastN.style.border = '2px solid red';
    	errorLastN.style.display = 'block'
		error++;
	} else {
		fLastN.style.border = '';
    	errorLastN.style.display = 'none'
	}

	if(fEmail.value == "" || fEmail.value.length < 3 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail.value)){
		fEmail.style.border = '2px solid red';
    	errorEmail.style.display = 'block'
		error++;
	} else {
		fEmail.style.border = '';
    	errorEmail.style.display = 'none'
	}

	if(fAddress.value === "" || fAddress.value.length < 3 || !/^[a-zA-Z0-9]+$/.test(fAddress.value)){
		fAddress.style.border = '2px solid red';
    	errorAddress.style.display = 'block'
		error++;
	} else {
		fAddress.style.border = '';
    	errorAddress.style.display = 'none'
	}

	if(fPhone.value == "" || fPhone.value.length < 3 || !/^[0-9]+$/.test(fPhone.value)){
		fPhone.style.border = '2px solid red';
    	errorPhone.style.display = 'block'
		error++;
	} else {
		fPhone.style.border = '';
    	errorPhone.style.display = 'none'
	}

	if(fPassword.value == "" || fPassword.value.length < 3 || !/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(fPassword.value)){
		fPassword.style.border = '2px solid red';
    	errorPassword.style.display = 'block'
		error++;
	} else {
		fPassword.style.border = '';
    	errorPassword.style.display = 'none'
	};
	 
	if(error>0){
		alert("Error");
		event.preventDefault();
	}else{
		alert("OK");
	}
}



//print total and quantity:

let totalPrice = localStorage.getItem("total");
let totalQuantity = localStorage.getItem("quantity");


document.getElementById("total_price").innerHTML = totalPrice;
document.getElementById("count_product").innerHTML = totalQuantity;



