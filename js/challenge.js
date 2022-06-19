const counter = document.querySelector('#counter');
let start = 0;
const incrementCount = () => {
    start++
    const currentValue = counter.textContent = start;
    return currentValue;
}
const count = setInterval(incrementCount, 1000);

//Manually Increment and decrement the value

const increment = document.querySelector('#plus');
const decrement = document.querySelector('#minus');
increment.addEventListener('click', (event) => start++);
decrement.addEventListener('click', (event) => start--);

//like an individual number in the counter
const ul = document.querySelector('.likes');
const like = document.querySelector('#heart');
like.addEventListener('click', (event) => {
    const li = document.createElement('li');
    li.textContent = `You liked number ${start}`
    ul.appendChild(li);
})
//Pause the counter 
//disable all button except the pause button
//switch pause button to resume button
let paused = false;
const pause = document.querySelector('#pause');
pause.addEventListener('click', (event) => {
    if (pause.textContent === "pause") {
        clearInterval(count)
        console.log("hello")
        pause.textContent = "resume";
        increment.disabled = true;
        decrement.disabled = true;
        like.disabled = true;
        form.disabled = true;
        commentBar.disabled = true;
        inputBar.disabled = true;
    }
    else {

        pause.textContent = "pause";
        increment.disabled = false;
        decrement.disabled = false;
        like.disabled = false;
        form.disabled = false;
        commentBar.disabled = false;
        inputBar.disabled = false;
    }
})

//leave comments
const form = document.querySelector('form');
const commentBar = document.querySelector('#list');
const inputBar = document.querySelector('#comment-input');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = document.createElement("li");
    comment.textContent = inputBar.value;
    commentBar.appendChild(comment);
}) 