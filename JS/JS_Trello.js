const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
const listNbme = document.getElementById("list-name");
const btnClear = document.getElementById("btn-clear");
const inputListName = document.getElementById("list-name");
let counter = 0;

btnCreateList.addEventListener("click", addList);

inputListName.addEventListener("keydown", e => {
    if (e.key == "Enter"){
        btnCreateList.click();
    }
});

function addList(){
    event.preventDefault();

    const photo = document.createElement("img");
    photo.classList = "edit-list"
    photo.setAttribute ('src', 'img/img_509777.png');
    photo.setAttribute ('alt', 'редактировать название списка');
    photo.setAttribute ('width','20');
    photo.setAttribute ('height', '20');

    const listRemove = document.createElement("p");
    listRemove.classList = "remove";
    listRemove.innerHTML = "X"

    let list = document.createElement("div");

    let listName = document.getElementById("list-name").value;
    
    listNbme.value = "";
    if (listName == ""){ 
        counter += 1;
        listName = `<h3 >Новый список ${counter}</h3>`;
    }
    list.innerHTML = listName;

    let listCard = document.createElement("div");
    listCard.classList = "list-card";
    let addCard = document.createElement("p");
    addCard.classList = "add-card";
    addCard.innerHTML = "+Добавить карточку"

    list.classList = "card";
    desk.append(list);
    list.append(photo);
    list.append(listRemove);
    list.append(listCard);
    listCard.append(addCard);
}

desk.addEventListener("click", e =>{
    let obj = e.target;
    if(obj.classList.contains("edit-list")){
        let list = obj.parentNode;
        let h2 = list.firstChild;
        h2.setAttribute("contenteditable", "true");
        h2.focus();
    }
    else if (obj.classList.contains("remove")){
        obj.parentNode.remove();
    }
    else if(obj.classList.contains("add-card")){
        let textAreaDiv = document.createElement("div");
        textAreaDiv.classList = "card-block";
        let textArea = document.createElement("textarea");
        textArea.classList = "card-text";
        textAreaDiv.append(textArea);

        let cardRemove = document.createElement("p");
        cardRemove.classList = "remove";
        cardRemove.innerHTML = "X";
        textAreaDiv.append(cardRemove);

        let list = obj.parentNode;
        list.append(textAreaDiv);
    }
});

btnClear.addEventListener("click", function(){
    desk.innerHTML = ""
    counter = 0
})
