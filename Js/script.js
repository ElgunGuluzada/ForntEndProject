$(document).ready(function() {

    // accordion start

    $(document).on("click", ".accordHeader", function() {

        if ($(this).next()[0] != $(".active")[0]) {
            $(".active").slideUp("400", function() {
                $(this).removeClass("active")


            })
            $(this).next().slideDown("400", function() {
                $(this).addClass("active")

            })
        } else {
            $(".active").slideUp("400", function() {
                $(this).removeClass("active")
            })
        }
    })

    //  accordion end

    //progressBar Start
    $(".skill-per").each(function() {
        var $this = $(this);
        var per = $this.attr("per");
        $this.css("width", per + "%");
        $({ animatedValue: 0 }).animate({ animatedValue: per }, {
            duration: 1000,
            step: function() {
                $this.attr("per", Math.floor(this.animatedValue) + "%");
            },
            complete: function() {
                $this.attr("per", Math.floor(this.animatedValue) + "%");
            },
        });
    });
    //progressBar end

    //main menu start

    $(document).on("click", ".arrow", function() {
        change()
    })

    function change() {
        $(".lorem").toggleClass("active")
    }
    setInterval(change, 5000)
        //main menu end









})