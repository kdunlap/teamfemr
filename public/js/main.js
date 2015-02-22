
$(document).ready(function () {
    var navTracker = $('#navTracker').val();
    $('.selected').removeClass("selected");
    $('#' + navTracker).addClass('selected');

    var subNavTracker = $('#subNavTracker').val();
    $('.subSelected').removeClass("subSelected");
    $('#' + subNavTracker).addClass("subSelected");

    
});