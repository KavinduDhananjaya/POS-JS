
$("#btnCustomer").click(function () {

    $("#dashbordPanel").css("display","none");
    $("#customerPanel").css("display","inline");
    $("#orderPanel").css("display","none");
    $("#orderPanel2").css("display","none");
    $("#itemPanel").css("display","none");
    $("#itemPanel2").css("display","none");


});

$("#btnItems").click(function () {

    $("#dashbordPanel").css("display","none");
    $("#itemPanel").css("display","inline");
    $("#customerPanel").css("display","none");
    $("#orderPanel").css("display","none");
    $("#orderPanel2").css("display","none");
    $("#itemPanel2").css("display","none");


});

$("#zbtnAddItem").click(function () {

    $("#itemPanel").css("display","none");
    $("#itemPanel2").css("display","inline");
    $("#dashbordPanel").css("display","none");
    $("#customerPanel").css("display","none");
    $("#orderPanel").css("display","none");
    $("#orderPanel2").css("display","none")

});

$("#btnUpdateItem").click(function () {

    $("#itemPanel").css("display","none");
    $("#itemPanel2").css("display","inline");
    $("#btnAdd").css("value","Update Item");
    $("#1").attr("class","step");
    $("#2").attr("class","active step");
    $("#dashbordPanel").css("display","none");
    $("#customerPanel").css("display","none");
    $("#orderPanel").css("display","none");
    $("#orderPanel2").css("display","none")


})

$("#btnOrder").click(function () {

    $("#dashbordPanel").css("display","none");
    $("#itemPanel").css("display","none");
    $("#customerPanel").css("display","none");
    $("#orderPanel").css("display","inline");
    $("#orderPanel2").css("display","none")
    $("#itemPanel2").css("display","none");

});

$("#btnOrder2").click(function () {

    $("#orderPanel").css("display","none");
    $("#orderPanel2").css("display","inline");
    $("#dashbordPanel").css("display","none");
    $("#itemPanel").css("display","none");
    $("#customerPanel").css("display","none");
    $("#itemPanel2").css("display","none");


});

