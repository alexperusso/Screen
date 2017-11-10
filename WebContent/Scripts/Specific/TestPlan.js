//Add Widget Events on .box class controls (minimize)
$('.box').boxWidget();

//Add Scroll to the Divs
$('.slimScrollDiv').slimScroll({
    height: '210px'
});

function ToggleLeftArea(){
    var iconState = $('#btnHideLeftWidgetArea').find('i').attr('class'); //i tag has fa icon left (to hide) or right (to show)    
    if(iconState == "fa fa-toggle-left"){
        $('#LeftWidgetArea').toggle('slide');
        $('#btnHideLeftWidgetArea').find('i').attr('class','fa fa-toggle-right');
    } 
    else {
        $('#btnHideLeftWidgetArea').find('i').attr('class','fa fa-toggle-left');
        $('#LeftWidgetArea').toggle('slide');        
    }
    return false;
};

//Data on Screen
function getTestPlanData() {

    var defaultData = [{
        text: 'Caso de Teste 1',

        nodes: [{
            text: 'Passo 1',
            href: '#child1',
            tags: ['2']
        }, {
            selectable: false,
            text: 'Passo 2'
        }]
    }, {
        text: 'Caso de teste 2',
        selectable: false,
        nodes: [{
            text: 'Passo ABC'
        }]
    }, {
        text: 'Caso de teste 3',
        nodes: [{}]
    }, {
        text: 'Caso de teste 4',
    }, {
        text: 'Caso de teste 5',
    }];

    return defaultData;
}


$(function() {
    var defaultData = getTestPlanData();

    $('#ExecTreeView').treeview({
        color: "#428bca",
        showBorder: false,
        showCheckbox: true,
        data: defaultData
            /*

            onNodeChecked: function(event, node) {
                $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
              },
              onNodeUnchecked: function (event, node) {
                $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
              }

            onNodeDisabled: function(event, node) {
                $('#disabled-output').prepend('<p>' + node.text + ' was disabled</p>');
              },
              onNodeEnabled: function (event, node) {
                $('#disabled-output').prepend('<p>' + node.text + ' was enabled</p>');
              },
              onNodeCollapsed: function(event, node) {
                $('#disabled-output').prepend('<p>' + node.text + ' was collapsed</p>');
              },
              onNodeUnchecked: function (event, node) {
                $('#disabled-output').prepend('<p>' + node.text + ' was unchecked</p>');
              },
              onNodeUnselected: function (event, node) {
                $('#disabled-output').prepend('<p>' + node.text + ' was unselected</p>');
              }
              */
    });

});

// Jquery to allow widget place change using the class .column .portlet and .portlet-header
$(function() {
    $(".column").sortable({
        connectWith: ".column",
        handle: ".portlet-header",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".portlet")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".portlet-header")
        .addClass("ui-widget-header ui-corner-all")
        .prepend("<span class='ui-icon'></span>");
});