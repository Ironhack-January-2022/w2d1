// Document Object Model
// console.log('dom manipulation')
console.log(document.body.div)

// retrieve elements from the page

// getElement(s)byTagName, ...className, 

// getElementsByTagName() -> returns an HTML Collection
const divs = document.getElementsByTagName('div')
console.log(divs)

// getElementById()
const sectionWithId = document.getElementById('container')
console.log(sectionWithId)
// getElementsByClassName() -> returns an HTML Collection

const boxes = document.getElementsByClassName('box')
// can be treated like an array
console.log(boxes[0])

// querySelector(), querySelectorAll() -> gets CSS Selectors
// as parameters
// querySelector() -> gets the first element
const firstDiv = document.querySelector('div')
console.log(firstDiv)

const thirdItem = document.querySelector('body > ul > li:nth-child(3)')
console.log(thirdItem)

const allDivs = document.querySelectorAll('div')
// this is a NodeList -> can also be treated like an array

console.log(allDivs)

const allBoxes = document.querySelectorAll('.box')
console.log(allBoxes)

// read the text value from the secion 
// use innerText or textContent
const val = document.querySelector('section').innerText
console.log(val)
const htmlContent = document.querySelector('section').innerHTML
console.log(htmlContent)

// change the text in the h1
document.querySelector('h1').innerText = 'heading'

// replace h1 with h6 
const currentVal = document.querySelector('h1').innerText;
document.querySelector('section').innerHTML = `<h6>${currentVal}</h6>`


// uppercase all list items
const list = document.querySelectorAll('li')
list.forEach(function (li) {
	li.innerText = li.innerText.toUpperCase()
})
console.log(list)

// this would replace the whole body
// document.body.innerHTML = '<h1>hello</h1>'

// change the styling

// give the heading a background of red
const h6 = document.querySelector('h6')
h6.style.backgroundColor = 'red'

// use classList to access the classes of a dom element
console.log(boxes[0].classList)
// we can add() remove() and toggle() a class

// you can also add an attribute
document.querySelector('h6').setAttribute(
	'id',
	'heading'
)

// the methods can be called an all DOM Nodes 
// not only on the document
const section = document.querySelector('section')
const innerH6 = section.querySelector('h6')
console.log(innerH6)
