
function Form(formName) {
    
}


// ReSharper disable once PossiblyUnassignedProperty
$(".button-collapse").sideNav();
$(document).ready(function () {


    $("#data").mask("00/00/0000");
    $("#telefon").mask("000 000 000");

    $("#js-TestForm").on("click", "#js-FormTestSaveBtn", function() {
        var dataForm = $("#js-formTestData").serializeArray();
        var dataView = "";

        for (var i = 0; i < dataForm.length; i++) {
            if (i > 0 || i === dataForm.length) {
                dataView += ", ";
            }
            dataView += dataForm[i].name + ": " + dataForm[i].value;
        }
        alert(dataView);
    });



    function clearInputs() {
        var inputs = document.getElementsByTagName("input");
            

        for (var i = 0; i <= inputs.length; i++) {
            console.log(inputs);
            if (inputs[i].type === "text") {
                console.log(inputs[i].name);
                console.log(inputs[i].value);
                inputs[i].val("");
                inputs[i].onclick = function () { this.value = ""; }
                console.log(inputs[i].value);
            };
        };
    };



    $("#js-TestForm").on("click", "#js-FormTestCancelBtn", function() {
        clearInputs();
            });



    ////Obsługa kalendarza
// ReSharper disable once PossiblyUnassignedProperty
        $(".datepicker").pickadate({
            onSet: function(arg) {
                if ("select" in arg) {
                    this.close();
                }
            },
            min: [1900, 1, 1],
            max: true,
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    });
