
var num = 0;

$("#one").click(function () {
     num = $("#one").val();
    takeValue();
})

$("#two").click(function () {
     num = $("#two").val();
        takeValue();

})

$("#three").click(function () {
     num = $("#three").val(); 
        takeValue();

})

$("#four").click(function () {
     num = $("#four").val();
        takeValue();

})

$("#five").click(function () {
     num = $("#five").val();
        takeValue();

})
$("#six").click(function () {
     num = $("#six").val();
        takeValue();

})
$("#seven").click(function () {
     num = $("#seven").val();
        takeValue();

})
$("#eight").click(function () {
     num = $("#eight").val();
        takeValue();

})
$("#nine").click(function () {
     num = $("#nine").val();
        takeValue();

})
$("#zero").click(function () {
     num = $("#zero").val();
        takeValue();

})
$("#add").click(function () {
     num = $("#add").val();
        takeValue();

})
$("#sub").click(function () {
     num = $("#sub").val();
        takeValue();

})
$("#mul").click(function () {
     num = $("#mul").val();
        takeValue();

})
$("#div").click(function () {
     num = $("#div").val();
        takeValue();

})


$("#run").click(function () {
    var result = eval($('#inputval').val());
	$('#inputval').val(result);
})

$("#relod").click(function () {
    location.reload(true);

})

function takeValue() {
    document.getElementById('inputval').value += num;
}

function calculateResult() {
	var result =eval($('#inputval').val());
    $('#inputval').val(result) ;
    
}   