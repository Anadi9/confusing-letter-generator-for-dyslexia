(function (window, document, undefined) {
  "use strict";

  var wrap = document.getElementById("wrap"),
    setColumn = document.getElementById("column"),
    setRow = document.getElementById("row"),
    btnGen = document.getElementById("btnGen"),
    btnCopy = document.getElementById("btnCopy");

  btnGen.addEventListener("click", generateTable);
  btnCopy.addEventListener("click", copyTo);

  function generateTable(e) {
    var newTable = document.createElement("table"),
      tBody = newTable.createTBody(),
      nOfColumns = parseInt(setColumn.value, 10),
      nOfRows = parseInt(setRow.value, 10),
      row = generateRow(nOfColumns);

    newTable
      .createCaption()
      .appendChild(document.createTextNode("Generated Table"));

    for (var i = 0; i < nOfRows; i++) {
      tBody.appendChild(row.cloneNode(true));
    }

    (wrap.hasChildNodes() ? wrap.replaceChild : wrap.appendChild).call(
      wrap,
      newTable,
      wrap.children[0]
    );
  }

  function generateRow(n) {
    var data = ["x", "y", "z"];
    let index = Math.floor((Math.random() * 7) / 3);
    // console.log(index);
    var row = document.createElement("tr"),
      text = document.createTextNode(data[index]);

    for (var i = 0; i < n; i++) {
      row.insertCell().appendChild(text.cloneNode(true));
    }

    return row.cloneNode(true);
  }

  function copyTo(e) {
    prompt("Copy to clipboard: Ctrl+C, Enter", wrap.innerHTML);
  }
})(window, window.document);
