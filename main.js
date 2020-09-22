function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.pantone_value+'</p>\n' +
        '        <div style="background:'+item.color+';">'+item.color+'</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

// addItem({"id":1,"name":"cerulean","year":2000,"color":"#98B2D1","pantone_value":"15-4020"});

function fetchColorsList(){
    fetch('https://reqres.in/api/unknown')
      .then(response => response.json())
      .then((jsonifiedVariable) => {
          let colourList = jsonifiedVariable.data;

          for(i = 0; i < colourList.length; i++) {
            addItem(colourList[i]);
          }
        });
}
function loadColorsFromStorage(){
    //TODO implement this function
}

fetchColorsList();
loadColorsFromStorage();