
// https://stackoverflow.com/questions/7346563/loading-local-json-file/21446426#21446426
// function loadFile() {
//     var input, file, fr;

//     if (typeof window.FileReader !== 'function') {
//         alert("The file API isn't supported on this browser yet.");
//         return;
//     }

//     input = document.getElementById('fileinput');
//     if (!input) {
//         alert("Um, couldn't find the fileinput element.");
//     }
//     else if (!input.files) {
//         alert("This browser doesn't seem to support the `files` property of file inputs.");
//     }
//     else if (!input.files[0]) {
//         alert("Please select a file before clicking 'Load'");
//     }
//     else {
//         file = input.files[0];
//         fr = new FileReader();
//         fr.onload = receivedText;
//         fr.readAsText(file);
//     }

//     function receivedText(e) {
//         let lines = e.target.result;
//         let newArr = JSON.parse(lines);
//         console.log(newArr);

//         let table = document.getElementById('results-body');
//         newArr.forEach(function (object) {
//             let tr = document.createElement('tr');
//             tr.innerHTML = '<td>' + object.Position + '</td>' +
//                 '<td>' + object.Name + '</td>' +
//                 '<td>' + object.Shooting + '</td>' +
//                 '<td>' + object.Total + '</td>' +
//                 '<td>' + object.Time + '</td>' +
//                 '<td>' + object['Time difference'] + '</td>';
//             table.appendChild(tr);
//         });
//     }
// }

// Collect JSON property names to use them as table columns names
let headerArr = [];
competitors.forEach(arrObject => {
    let x = Object.getOwnPropertyNames(arrObject);
    x.forEach(el => {
        if (!headerArr.includes(el)) {
            headerArr.push(el);
        }
    });
});

//Add headers row to the results table
let header = document.getElementById("results-header");
let th = document.createElement("tr");
th.innerHTML = `<th>${headerArr[0]}</th>
<th>${headerArr[1]}</th>
<th>${headerArr[2]}</th>
<th>${headerArr[3]}</th>
<th>${headerArr[4]}</th>
<th>${headerArr[5]}</th>`;
header.appendChild(th);

//Add results rows for each competitor
let table = document.getElementById("results-body");
competitors.forEach(function (object) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${object.Position}</td>
    <td>${object.Name}</td>
    <td>${object.Shooting}</td>
    <td>${object.Total}</td>
    <td>${object.Time}</td>
    <td>${object["Time difference"] == undefined
    ? ""
    : object["Time difference"]}</td>`;
    table.appendChild(tr);
});