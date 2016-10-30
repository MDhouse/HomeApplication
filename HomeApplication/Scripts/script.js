$(".button-collapse").sideNav();
$(document).ready(function () {

    ////Obsługa kalendarza
        $('.datepicker').pickadate({
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
