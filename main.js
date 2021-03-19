function changeClass(){
    document.getElementById("heading").className = "ChangedClass";

}
function getDataSets(){
    const myData = document.getElementById("myData");
    alert('My name is ' + myData.dataset.firstName + ' ' +  myData.dataset.lastName);

}
function addElement() {
    var para = document.createElement("p");
    var node = document.createTextNode("New p tag element");
    para.appendChild(node);
    var element = document.getElementById("new");
    element.appendChild(para);

}

function getRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "demo_get2.asp?fname=Mahesh&lname=Sharma", true);
    xhttp.send();
}

function setValue(){
    const inputField = document.getElementById("testInput");
    inputField.value = "Random Value";

}
function getValue(){
    const inputField = document.getElementById("testInput").value;
    if (inputField == ''){
        alert('Value not set');
    }else{
        alert(inputField);

    }


}