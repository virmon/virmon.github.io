/*jshint esversion: 6 */
"use strict";

$(document).ready(() => {
    $(".circle").hide();
    let width = parseInt($('#width').val());
    let growthAmount = parseInt($('#growth-amount').val());
    let growthRate = parseInt($('#growth-rate').val());
    let n = parseInt($('#number').val());

    $("#start").click(function() {
        $(".circle").show();
        $(".circle").css({
            'width': width,
            'height': width
        });

        for (let i = 0; i < n; i++) {
            $(".container").append("<div class='circle'></div>")
        }
        let intervalId = setInterval(grow, growthRate);

        // remove circle
        $(".circle").click(function() {
            $(this).remove();
            clearInterval(intervalId);
        });
    })

    function grow() {
        const size = parseInt($(".circle").css('width')) + growthAmount + 'px';
        $(".circle").css({
            'width': size,
            'height': size
        });
    }
});