function checkType(node) {
    checked = node.value;
}

// Создает POST-запроса
let vote = function() {
    fetch('https://sf-pyw.mosyag.in/sse/vote/' + checked,  {
        method: 'POST',
        body: "",
    });
}

// Выводит сообщение об учёте голоса. Скрывает и отображает кнопки для продолжения
let inform = function (voteButton, voteAgainButton, inputs, informField) {
    informField.textContent = 'Ваш голос учтён.';
    for (input of inputs) {
        input.setAttribute("disabled", "disabled");
    }
    voteAgainButton.setAttribute("style", "display: inherit");
    voteButton.setAttribute("style", "display: none")
}

// Отображает форму для повторного голосования
let voteAgain = function (voteButton, voteAgainButton, inputs, informField) {
    voteAgainButton.setAttribute("style", "display: none");
    voteButton.setAttribute("style", "display: inherit");
    for (input of inputs) {
        input.removeAttribute("disabled");
    }
    informField.textContent = ' ';
}

// Описывает кнопки и вешает на них события нажатия.
ready = function() {
    let checked
    let voteButton = document.getElementById('vote-button');
    let voteAgainButton = document.getElementById('again-button')
    let inputs = document.getElementsByTagName('input');
    let informField = document.getElementById('message');
    voteButton.addEventListener('click', vote);
    voteButton.addEventListener('click', () => {inform(voteButton, voteAgainButton, inputs, informField);});
    voteAgainButton.addEventListener('click', () => {voteAgain(voteButton, voteAgainButton, inputs, informField);});
}


document.addEventListener("DOMContentLoaded", ready)


