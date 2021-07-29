const DB = [{
        roll: "01",
        name: "Deepak",
        marks: "65",
    },
    {
        roll: "02",
        name: "Deep",
        marks: "68",
    },


]


const textbox = document.querySelector('#textbox');
const submit = document.querySelector('#submit');
var tablenumber;

function totalTable() {

    for (i = 0; i < tablenumber; i++) {
        var row = document.createElement('tr');

        const table = document.getElementById('table')
        table.appendChild(row);
        for (j = 0; j < 3; j++) {
            var col = document.createElement('td');
            row.appendChild(col);
        }

    }


}

submit.addEventListener('click', () => {
    tablenumber = parseInt(textbox.value)
    console.log(tablenumber);
    for (i = 0; i < tablenumber; i++) {
        totalTable();
    }

});

function add() {
    var x = document.createElement("tr");
    const table = document.getElementById('table')
    table.appendChild(x);

    for (j = 0; j < 3; j++) {
        var y = document.createElement('td');
        x.appendChild(y);
    }

}