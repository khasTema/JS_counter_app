let count = 0

let increase = document.getElementById("increment")
let reset = document.getElementById("reset")
let save = document.getElementById("save")
let screen = document.getElementById("count-el")
let watchPlace = document.getElementById("save-place")
let allClean = document.getElementById("clean")

function increaser(){
	count = count + 1
	screen.innerText = count
}

function deleter(){
	count = 0
	screen.innerText = count

}




let result = 0

function saver(){
	result = result + count
	watchPlace.innerText = result
}

function allReset(){
	count = 0
	result = 0
	screen.innerText = count
	watchPlace.innerText = result
}


console.log(5)  




