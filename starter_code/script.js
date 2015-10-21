$(document).ready(function(){
    var choices =["Rock","Paper","Scissor"];
    var $rock = $("#rock");
    var $paper = $("#paper");
    var $scissors = $("#scissors");
    var $yourResult = $("#yourResult");
    var $comResult  = $("#cupResult");
    Math.floor(Math.random()* choices.length)
    $('#rock').click(function(){
        $('#one').toggle("bounce", { times: 3 }, "slow");
        $('#two').toggle("bounce", { times: 3 }, "slow");
    });
    $('#paper').click(function() {
        $('#one').toggle("bounce", { times: 3 }, "slow");
        $('#two').toggle("bounce", { times: 3 }, "slow");
    });
    $('#scissors').click(function() {
         $('#one').toggle("bounce", { times: 3 }, "slow");
        $('#two').toggle("bounce", { times: 3 }, "slow");
    });
    //$('#yourResult');
    //$('#cupResult');
    
    
});