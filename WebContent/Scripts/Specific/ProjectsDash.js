/*
            Algorithm
    
            var service = 'http://localhost/DistributedDataSystem/Service.svc/';
    
            jQuery.support.cors = true;
        $.ajax(
        {
            type: "GET",
            url: service + '/GetAllCountries/',
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                
            var trHTML = '';
                    
            $.each(data.Countries, function (i, item) {
                
                trHTML += '<tr><td>' + data.Countries[i] + '</td><td>' + data.Cities[i] + '</td></tr>';
            });
            
            $('#location').append(trHTML);
            
            },
            
            error: function (msg) {
                
                alert(msg.responseText);
            }
        });
        */
function getJsonData() {
    /*
        Mock Data        
    */

    var projectMockData = '[' +
        '{ "Project" : "GrandeNomeDeProjetoAquiTestandoEspacoDeTitutlo", "Author":"Fulano de tal da silva portugues cabral", "TestCaseQty" : 10},' +
        '{ "Project" : "XYZ", "Author":"Ciclano", "TestCaseQty" : 20},' +
        '{ "Project" : "OLA", "Author":"Beltrano", "TestCaseQty" : 9999} ]';

    var jsonData = JSON.parse(projectMockData);
    return jsonData;
}

jQuery(document).ready(function() {

    var jsonProjects = getJsonData();

    var cardMock = document.getElementById("CardWidget");

    $.each(jsonProjects, function(index, item) {
        /* fill the card info */
        cardMock.querySelector("#ProjectName").innerHTML = item.Project;
        cardMock.querySelector("#ProjectAuthor").innerHTML = item.Author;
        cardMock.querySelector("#TestCaseQty").innerHTML = item.TestCaseQty;
        cardMock.id = cardMock.id + "-" + index;
        /* add into Html and create a new one */
        document.getElementById("CardBoard").appendChild(cardMock);
        cardMock = cardMock.cloneNode(true);
    });

});