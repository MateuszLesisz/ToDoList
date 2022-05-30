const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = toDo => {

const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
`;

list.innerHTML += html;

}

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