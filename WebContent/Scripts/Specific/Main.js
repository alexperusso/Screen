//JQuery 

function SwitchPageContext(htmlPageLocation) {
    $.get(htmlPageLocation, function(data) {
        $("#PageSection").replaceWith(data);
    })
};
/*
$('#NewTestPlanModal').on('show.bs.modal', function(eventModal) {    
    var loadUrl = $(eventModal.relatedTarget).data('load-url');
    debugger;
    $(this).find('modal-content').load(loadUrl);
});

$("#NewTestPlan").on("click", function(e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $(".modal-content").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="' + url + '"></iframe>')
})
*/

/*
  DisplayOnModalPlace class will load html modal content on the page Modal PlaceHolder 
*/
$(".DisplayOnModalPlace").on("click", function(eventModal) {
    //Add Modal attributes on the field ID
    eventModal.preventDefault();
    $(this).attr("data-toggle", "modal");
    $(this).attr("data-target", "#MainScreenModalPlace");
    //Get the HTML and load
    var loadUrl = $(this).attr("href");
    $("#MainScreenModalPlace").find(".modal-dialog").load(loadUrl);
    //Center on screen
    var windowHeight = $(window).height();
    var boxHeight = $('.modal-dialog').height();
    $('.modal-dialog').css({ 'margin-top': ((windowHeight - boxHeight) / 4) });
})