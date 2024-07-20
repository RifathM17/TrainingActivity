function display(val) {
	document.getElementById("result").value += val
}
        
function Solve() {
	var x = document.getElementById("result").value
	var y = eval(x)
	document.getElementById("result").value = y
}
function clr() {
	document.getElementById("result").value = ""
}




    
