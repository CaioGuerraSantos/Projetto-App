var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
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
var carta3 = {
nome: "Dragão pendulo de olhos estranhos",
cordacarta: "Metade Laranja e metade verde",
Level_Rank: "7"
}
var carta4 = {
nome: "Dragão Fusão de Peçonha Insaciável",
cordacarta: "Roxa",
Level_Rank: "8"
}
*/

var todos = JSON.parse(localStorage.getItem('list_todos')) || [/*{carta1,carta2,carta3,carta4
}]*/]; 
//area comentada acima apenas para teste

function renderTodos() {
    listElement.innerHTML = '';
// "For... of" Trabalha com objetos iteraveis, logo ele nao trabalha com objetos, apenas com arrays
// "For... in" Trabalha com objetos NÂO iteraveis, logo ele trabalh apenas com objetos
    for (todo in todos) {
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElemet = document.createElement('a');

        linkElemet.setAttribute('href', '#');
//deletar
        var pos = todos.indexOf(todo);

        linkElemet.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode(' Deletar');
//deletar
        linkElemet.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemet);

        listElement.appendChild(todoElement);

    }
};

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
    console.log (todos)
    
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
