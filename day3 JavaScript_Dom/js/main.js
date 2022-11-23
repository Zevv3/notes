// target h1 tag, index 0 (the text because that's all that's in there)
// console.log(document.getElementsByTagName('h1')[0].innerHTML = 'New Text')
// that was just an example, we'll keep it as Hello World for now

// change button color using JS
let color_botton = document.getElementById('color-button')

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if (header_text == 'Hello World'){
        document.getElementsByTagName('h1')[0].className = 'color-changed'
    }else{
        document.getElementsByTagName('h1')[0].className = 'different-color'
    }
}

// add event listener to change color
// event listeners are listening for an event to happen. When it does, the function in the listener happens
// That was poorly worded but you know what I mean
// So, this line of code sets an event listener on color_button to listen for a click. When clicked, the even of color_change is triggered.
// color_change is the function we defined above which changes the color of the text
color_botton.addEventListener('click', color_change)

// adding a new button via JS
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add text and color to the buttons
button.innerHTML = 'We love Pizza!!!'
button.className = 'different-color'
document.body.append(button)

// Adding eventlistener to button with an event function
button.addEventListener('mouseover', function () {
    button_display.innerHTML = 'JavaScript is so cool!!!'
    button.innerHTML = 'Pizza is Okay...'
    document.body.append(button_display)
    // window.location.reload()
    // will reset the page so if you want the thing that comes up to go away you gotta do this
    // you can probably also do some css stuff if you want that instead of the JS
})

// Grab copied text -- and places it in the clipboard for us to use
const source = document.querySelector('div.source')
source.addEventListener('copy', (event)=>{
    alert('Stop Stealing me words!!!')
    const selection = document.getSelection()
    event.clipBoardData.setData('text/plain', selection.toString().toLowerCase())
    event.preventDefault();
})

// Grabbing Form Data From a Submit event
const form = document.querySelector('#testDataForm')

// Add event listener for submit event
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // one way to grab info from html to use in JS
    let query_first = document.querySelector('#first-name').value
    let query_last = document.querySelector('#last-name').value

    // Another way if you know know the class or id name
    let first_name = event.path[0][0].value
    let last_name = event.path[0][1].value

    console.log(event)
    console.log(first_name, last_name)
    console.log(`These guys came from query Selector: ${query_first}, ${query_last}`)
})