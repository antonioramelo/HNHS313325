 function changeTable() {
    // Get the selected value from the dropdown
    var selectedTable = document.getElementById("table-selector").value;

    // Hide all tables
    var tables = document.querySelectorAll("#table-container table");
    tables.forEach(function(table) {
      table.style.display = "none";
    });

    // Show the selected table
    var selectedTableElement = document.getElementById(selectedTable);
    if (selectedTableElement) {
      selectedTableElement.style.display = "table";
    }
  }
