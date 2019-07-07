/*
  var carta1 = {
nome: "Dragão sincro de asas transparentes",
cordacarta: "Branco",
Level_Rank: "7"
}
var carta2 = {
nome: "Dragão Xyz da Rebelião Negra",
cordacarta: "Preta",
Level_Rank: "4"
}

/*var cartas = [{carta1},{carta2}]

console.log(cartas)*/
//primeiros testes em cima

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || {};

function renderTodos() {
    listElement.innerHTML = '';

    for (todo in todos) {
        var todoElement = document.createElement('li');
        //em cima criar LI, em baixo criar Caixa de texto
        var todoText = document.createTextNode(todo);


//  Criação de botão excluir
        var linkElemet = document.createElement('a');

        linkElemet.setAttribute('href', '#');

        var pos = todos.indexOf(todo);

        linkElemet.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

// Ligação das variaveis
        linkElemet.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemet);

        listElement.appendChild(todoElement);

        //
    }
};

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push({todoText});
    inputElement.value = '';
    renderTodos();
    saveToStorage();
    console.log(todos)
  //função de adicionar Na caixa de texto
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
    //Função deletar na caixa de texto
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
//Função salvar na "memoria"
}
