/*jshint esversion: 6 */
"use strict";

$(function() {
    var isStarted = false;
    var status = "idle";
    $("#start").click(start);
    $("#end").mouseover(finish);
    
    $(".boundary").mouseover(function() {
        if(isStarted === true) {
            isStarted = false;
            $(".boundary").addClass("youlose");
            status = "lost";
            $("#status").html("You lose!!!");
        } else {
        }
    });
    $("#maze").mouseleave(function() {
        if(isStarted === true) {
            isStarted = false;
            status = "idle";
            $("#status").html("Do not cheat!!!");
            $(".boundary").addClass("youlose");
        }
    });
    function start() {
        if(isStarted === false) {
            if($(".boundary").hasClass("youlose")) {
                $(".boundary").removeClass("youlose");
            }
            isStarted = true;
            status = "started";
            $("#status").html("Game started!!!");
        }
    }

    function finish() {
        if(isStarted === true) {
            isStarted = false;
            if(status === "lost") {
                status = "idle";
                $("#status").html("You lose!!!");
            } else if(status === "started") {
                $("#status").html("You Won!!!");
            }
        }
    }
});