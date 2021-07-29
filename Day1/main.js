var arr = [];

function add_element() {
    arr.push(document.getElementById("text-input").value);
    alert("submitted");
    document.getElementById("text-input").value = "";

}

function show_element() {
    for (i = 0; i < arr.length; i++) {
        document.getElementById("z").innerHTML += arr[i] + "<br>";
    }

}