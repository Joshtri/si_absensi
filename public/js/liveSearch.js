const searchInput = document.getElementById('search-bar');
const dataTable = document.getElementById('dataTable');
const rows = dataTable.getElementsByTagName('tr');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 1; i < rows.length; i++) {  // Start from 1 to skip header row
        const rowData = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < rowData.length; j++) {
            const cellValue = rowData[j].textContent.toLowerCase();
            if (cellValue.includes(searchTerm)) {
                found = true;
                break;
            }
        }

        if (found) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});
