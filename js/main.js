
function letsDivide(eq){
	var divEqArr = eq.match(/([0-9])+\/([0-9])+/);
	var ans;
	divEqArr.forEach(function(divWork){
		var operands = divWork.split("/");
		var divAns = parseInt(operands[0]) / parseInt(operands[1]);
		var regexor = "/" + operands[0] + "\/" + operands[1] + "/";
		//console.log(regexor);
		eq = eq.replace(regexor, divAns); 
	});
	ans = eq
	console.log(ans);
	return ans;
}

function answerThis(eq){
	var answer = letsDivide(eq)
}

function joinInEquation(equation, allDigits, operate){
	if (equation == "0" || equation == ""){
		$("#eq-entry").val(allDigits + operate );
	}else {
		$("#eq-entry").val( equation + allDigits + operate);
	}
}



function equate(){
	
	$("button#equate").click(function(){
		
		
		var firstPartEquation = $("#eq-entry").val();
		var lastPartEquation = $("#digits-entry").val();
		
		if ( firstPartEquation != "0" && lastPartEquation != "0"){			
			var fullEquation = firstPartEquation + lastPartEquation;		
			answerThis(fullEquation);
		}
		else{
			console.log("equated on default ...");
		}
	});
}


function operatorInput(){
	
	$(".op").click(function(){
		
		var operate = $(this).attr("value");
		var allDigits = $("#digits-entry").val();
		var equation = $("#eq-entry").val();
		
		joinInEquation(equation, allDigits, operate);
		
		$("#digits-entry").val("0");
	});
}

function numberClear() {
	$(".clearer").click(function(){
		if($(this).attr("value") == "ac"){
			$("#eq-entry").val("0");
		}
		
		$("#digits-entry").val("0");
	});
}

function numberInput(){
	$(".num").click(function(){
		
		var digit = $(this).attr("value");
		
		var digitEntry = $("#digits-entry").val();
		
		if ( (digit == "." && digitEntry == "0") || (digit == "." && digitEntry == "") ) {
			$("#digits-entry").val( "0" + digit);
		}
		else if (digitEntry == "0") {
			$("#digits-entry").val(digit);
		}
		else {
			$("#digits-entry").val(digitEntry + digit);
		}
	});
}


function calculate() {
	numberInput();
	operatorInput();
	numberClear();
	equate();
}


$(calculate());
