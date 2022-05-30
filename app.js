const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateTemplate = toDo => {

const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;

list.innerHTML += html;

}

// add todos

addForm.addEventListener("submit", e => {
    
    e.preventDefault();
    const toDo = addForm.add.value.trim();
    if(toDo.length) {
    generateTemplate(toDo);
    addForm.reset();
    }
});

// delete todos

list.addEventListener("click", e => {

if(e.target.classList.contains("delete"))
    e.target.parentElement.remove();

});

const filterTodos = (term) => {

Array.from(list.children)
.filter((toDo) => !toDo.textContent.includes(term))
.forEach((toDo) => toDo.classList.add("filtered"));


Array.from(list.children)
.filter((toDo) => toDo.textContent.includes(term))
.forEach((toDo) => toDo.classList.remove("filtered"))


};

//keyup event

search.addEventListener("keyup", () => {
    const term = search.value.trim();
    filterTodos(term);

});
