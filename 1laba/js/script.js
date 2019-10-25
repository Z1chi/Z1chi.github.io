$(document).ready(function () {

    $("#all").click(function () {
        $("#sec3 .works .col-4").show('1000s');
    });

    $("#web").click(function () {
        $("#sec3 .works .col-4").hide('1000s');
        $("#sec3 .works .web").show('500s');
    });

    $("#ui").click(function () {
        $("#sec3 .works .col-4").hide('1000s');
        $("#sec3 .works .ui").show('500s');
    });

    $("#Mockup").click(function () {
        $("#sec3 .works .col-4").hide('1000s');
        $("#sec3 .works .Mockup").show('500s');
    });
})