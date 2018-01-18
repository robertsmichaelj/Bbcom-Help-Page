
var snapshot = Defiant.getSnapshot(jsonData);

//TOP LEVEL SECTIONS
mainSections = JSON.search(snapshot, '//mainSection[section]');
//BOTTOM LEVEL SECTIONS AND ANSWERS
answers = JSON.search(snapshot, '//secondSection[section]');

var url = "https://www.bodybuilding.com/help?";
console.log(answers);






function helpExcel() {
    var i = 0, 
        rowEl = null,
        tableEl = document.createElement("table");
    tableEl.id = "helpTable";
    // create 10 table rows, each with two cells
    mainSections.forEach(function(element) {
        var rowTop = tableEl.insertRow(),
            cellTop = rowTop.insertCell(),
            cellMain = rowTop.insertCell(),
            topSection = element.section,
            topSecLink = url + topSection.toLowerCase().replace(/ /g, '-').replace(/\'/g, '').replace(/\?/g, ' ');
        cellTop.textContent = topSection;
        cellMain.textContent = topSecLink;
        element.secondSection.forEach(function(newelement) {
            var secSection = newelement.section;
            var rowSec = tableEl.insertRow();
            var rowCell = rowSec.insertCell();
            var cellSec = rowSec.insertCell();
            rowCell.textContent = secSection;
            cellSec.textContent = url + topSection.toLowerCase().replace(/ /g, '-').replace(/\'/g, '').replace(/\?/g, ' ') + "&" + secSection.toLowerCase().replace(/ /g, '-').replace(/\'/g, '').replace(/\?/g, ' ');
        });
    });
    document.body.appendChild(tableEl);
    
    
    
   
    tableToExcel('helpTable', 'W3C Example Table');
}

helpExcel();