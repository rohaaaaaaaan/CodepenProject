$(document).ready(function() {
    $('#submitBtn').click(function() {

        // Store user input
        var style = $('#musicStyle').val();
        var era = $('#musicEra').val();

        var response = "";

        // Check for "fast" and "groovy" combinations
        if (style === "fast" && era === "70s") {
            response = "Your answers describe hard rock.";
        } 
        else if (style === "fast" && era === "80s") {
            response = "Your answers describe thrash metal.";
        } 
        else if (style === "fast" && era === "90s") {
            response = "Your answers describe funk rock.";
        } 
        else if (style === "fast" && era === "2000s") {
            response = "Your answers describe funk rock.";
        } 
        else if (style === "groovy" && era === "70s") {
            response = "Your answers describe glam rock.";
        } 
        else if (style === "groovy" && era === "80s") {
            response = "Your answers describe post-punk rock.";
        } 
        else if (style === "groovy" && era === "90s") {
            response = "Your answers describe groove metal.";
        } 
        else if (style === "groovy" && era === "2000s") {
            response = "Your answers describe pop-punk rock.";
        }

        // Check for "aggressive" and "heavy" combinations
        else if (style === "aggressive" && era === "70s") {
            response = "Your answers describe punk rock.";
        } 
        else if (style === "aggressive" && era === "80s") {
            response = "Your answers describe thrash metal.";
        } 
        else if (style === "aggressive" && era === "90s") {
            response = "Your answers describe groove metal.";
        } 
        else if (style === "aggressive" && era === "2000s") {
            response = "Your answers describe Nu metal.";
        } 
        else if (style === "heavy" && era === "70s") {
            response = "Your answers describe heavy metal.";
        } 
        else if (style === "heavy" && era === "80s") {
            response = "Your answers describe hardcore punk.";
        } 
        else if (style === "heavy" && era === "90s") {
            response = "Your answers describe industrial metal.";
        } 
        else if (style === "heavy" && era === "2000s") {
            response = "Your answers describe metalcore.";
        }

        // Validation check: Ensure both questions are answered
        if (style === "" || era === "") {
            $('#result').empty().append("<p>Please answer both questions.</p>");
        } else {
            // Display result
            $('#result').empty().append("<p>" + response + "</p>");
        }
    });
});
