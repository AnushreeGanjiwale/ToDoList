const item=document.querySelector("#item");
const todo=document.querySelector("#to-do-box");
item.addEventListener("keyup",
function(event){
    if(event.key=="Enter"){
    addToDo(this.value);
    this.value=" ";
    }
}
)

const addToDo= (item) =>{
    const listitem= document.createElement("li");
    listitem.innerHTML = `
      ${item} 
      <i class="material-icons">clear</i>
    `;
    listitem.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    listitem.querySelector("i").addEventListener("click",function(){
        listitem.remove();
    })
    todo.appendChild(listitem);
}

