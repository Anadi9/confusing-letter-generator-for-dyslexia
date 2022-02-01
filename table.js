function getRandomLetter(str) {
  var arr = str.split("");
  var l = arr.length;
  var i = Math.floor(Math.random() * l);
  return arr[i];
}

var wrap = document.getElementById("wrap");
var setColumn = document.getElementById("column");
var strNode = document.getElementById("str");
var setRow = document.getElementById("row");
var btnGen = document.getElementById("btnGen");

btnGen.addEventListener("click", (e) => {
  var nOfColumns = parseInt(setColumn.value, 10);
  var nOfRows = parseInt(setRow.value, 10);
  var str = strNode.value;
  var table = "<table><tbody>";
  for (var i = 0; i < nOfRows; i++) {
    table += "<tr>";
    for (var j = 0; j < nOfColumns; j++) {
      table = table + `<td>${getRandomLetter(str)}</td>`;
    }
    table += "</tr>";
  }
  table = table + "</tbody></table>";
  wrap.innerHTML = table;
});
