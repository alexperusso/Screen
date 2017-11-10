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
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "GrandeNomeDeProjetoAquiTestandoEspacoDeTitutlo", "Author":"Fulano de tal da silva portugues cabral", "TestCaseQty" : 10},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "XYZ", "Author":"Ciclano", "TestCaseQty" : 20, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "OLA", "Author":"Beltrano", "TestCaseQty" : 9999, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "Mais Um Teste", "Author":"Alguém aí", "TestCaseQty" : 9999, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "Outro Teste", "Author":"Alguém por lá", "TestCaseQty" : 9999, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "OLA", "Author":"Beltrano", "TestCaseQty" : 9999, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "OLA", "Author":"Beltrano", "TestCaseQty" : 9999, "ExecutionDate": "10/10/2017"},' +
        '{ "EditTestPlanLink" : "olaEdit.html", "ExecLink" : "ola.html", "Project" : "XYZ", "Author":"Ciclano", "TestCaseQty" : 20, "ExecutionDate": "10/10/2017"}  ]';

    var jsonData = JSON.parse(projectMockData);
    return jsonData;
}

jQuery(document).ready(function() {

    var jsonProjects = getJsonData();

    var cardMock = document.getElementById("CardWidget");

    $.each(jsonProjects, function(index, item) {
        /* fill the card info"*/
        var editLink = './TestPlan.html?id=' + item.Project;
        var callMainJSFn ="SwitchPageContext('" + editLink + "');"; //Function on Main.js - onclick="SwitchPageContext('./TestPlan.html');

        cardMock.querySelector("#widgetCardIcon").setAttribute("href",item.ExecLink);
        cardMock.querySelector("#ProjectName").innerHTML = item.Project;
        cardMock.querySelector("#ProjectAuthor").innerHTML = item.Author;
        cardMock.querySelector("#TestCaseQty").innerHTML = item.TestCaseQty;
        cardMock.querySelector("#ExecDate").innerHTML = item.ExecutionDate;
        cardMock.querySelector("#btnEditTestPlan").setAttribute("onclick",callMainJSFn);        
        cardMock.id = cardMock.id + "-" + index;
        /* add into Html and create a new one */
        document.getElementById("CardBoard").appendChild(cardMock);
        cardMock = cardMock.cloneNode(true);
    });

});