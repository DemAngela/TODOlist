const input = document.querySelector('.todoText')
const todoItems = document.querySelector('.todoItems')
const btn = document.querySelector('.todoBtn')
const error = document.querySelector('.error')

btn.addEventListener('click', btnAction)

function btnAction() {
    if (input.value === '') {
        error.innerHTML = 'It is impossible to create an empty task. write something'
    } else {
        error.innerHTML =''
            let li = document.createElement('li');
            li.innerHTML = input.value;
            todoItems.appendChild(li);
            let span = document.createElement('span')
            span.innerHTML = '\u00d7';
            li.appendChild(span)

            if (todoItems.children.length === 10) {
                btn.style.display = 'none';
                error.innerHTML = 'Maximum number of items reached (10).';
            }
    }
    input.value = ''
}

input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        btnAction()
    }
})

todoItems.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
},false)