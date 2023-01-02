let selectedRow = null;

//Show Alerts
function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}
//clear fields
function clearField(){
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("about").value = "";
    document.getElementById("phone").value = "";
}

//Add data
document.getElementById("informationForm").addEventListener("submit", (e) =>{
    e.preventDefault();
    //get form values
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const about = document.getElementById("about").value;
    const phone = document.getElementById("phone").value;

    //validate
    if(name == "" || address == "" || about == "" || phone == ""){
        showAlert("plase fill in the all fiels","danger");
    }
    else{
        if(selectedRow == null){
            const list = document.getElementById("informaint_table");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${name}</td>
            <td>${address}</td>
            <td>${about}</td>
            <td>${phone}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("information added","success");
        }
        else{
            selectedRow.children[0].textContent = name;
            selectedRow.children[1].textContent = address;
            selectedRow.children[2].textContent = about;
            selectedRow.children[3].textContent = phone;
            selectedRow = null;
            showAlert("infomation edited","info");
        }

        clearField();
    }
});
//edit data
document.getElementById("informaint_table").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.children[0].textContent;
        document.getElementById("address").value = selectedRow.children[1].textContent;
        document.getElementById("about").value = selectedRow.children[2].textContent;
        document.getElementById("phone").value = selectedRow.children[3].textContent;
    }
});

//delete data
document.getElementById("informaint_table").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Inforamation data delete","danger");
    }
});