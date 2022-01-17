// add an event listener to the button
// document.querySelector('button').onclick = function () {
// 	console.log('you clicked the button')
// }

// document.querySelector('input').addEventListener('keyup', function () {
// 	console.log('you clicked the button')
// })

// add an event listener to all the list items to toggle a todo
document.querySelectorAll('ul > li').forEach(function (todo) {
	// console.log(todo)
	todo.addEventListener('click', toggleTodo)
})

document.querySelector('button').addEventListener('click', addTodo)

function toggleTodo(event) {
	console.log('toggle')
	// we need to know which todo got clicked
	// this is the clicked element
	console.log(event.target)
	// add the class checked
	event.target.classList.toggle('checked')

	// if we want to remove a list item from the dom:
	// const list = document.querySelector('ul')
	// use removeChild() - gets a dom node as an argument
	// list.removeChild(event.target)

	// you can also move up the dom - .parentNode
	// console.log(event.target.parentNode.parentNode)
	// event.target.parentNode.removeChild(event.target)

	// you can also call remove on the element itself 
	event.target.remove()
}

function addTodo() {
	// we get the value from the input field
	const input = document.querySelector('input')
	console.log(input)
	// create an li element with this value in between the tags
	const todo = document.createElement('li')
	todo.innerText = input.value
	console.log(todo)
	// add the toggle event listener
	todo.addEventListener('click', toggleTodo)
	// add this li tag to the list
	// appendChild()
	const list = document.querySelector('ul')
	// console.log(list)
	list.appendChild(todo)
	input.value = ''
}
console.log('done')