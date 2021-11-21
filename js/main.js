
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
let thCreate = document.createElement("tr");
thCreate.innerHTML = `<th>${headerArr[0]}</th>
<th>${headerArr[1]}</th>
<th>${headerArr[2]}</th>
<th>${headerArr[3]}</th>
<th>${headerArr[4]}</th>
<th>${headerArr[5]}</th>`;
header.appendChild(thCreate);


//Add results rows for each competitor
let table = document.getElementById("results-body");
competitors.forEach(function (object) {
    let trCreate = document.createElement("tr");
    trCreate.innerHTML = `<td>${object.position}</td>
    <td>${object.name}</td>
    <td>${object.shooting}</td>
    <td>${object.total}</td>
    <td>${object.time}</td>
    <td>${object.difference == undefined ? "" : object.difference}</td>`;
    table.appendChild(trCreate);
});


// Sorting table
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
const comparer = (idx, asc) => (a, b) => ((v1, v2) => v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2))(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');
    Array.from(tbody.querySelectorAll('tr'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => tbody.appendChild(tr));
})));

// Search a name
function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('names');
    filter = input.value.toUpperCase();
    table = document.getElementById('results-body');
    tr = table.getElementsByTagName('tr');
    let filteredArr = [];

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        tr[i].style.background = 'var(--main-container-color)';
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
                filteredArr.push(tr[i])
            } else {
                tr[i].style.display = 'none';
            };
        };
    };
    for (let i = 1; i < filteredArr.length; i++) {
        if (i % 2) {
            filteredArr[i].style.background = 'var(--table-tr-even)';
        } else {
            filteredArr[i].style.background = 'var(--main-container-color)';
        };
    };
};

