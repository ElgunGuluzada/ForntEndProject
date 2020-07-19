$(document).ready(function() {
    //tab start


    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');
        var parent = $(this).closest('div');

        $(parent).find('li').removeClass('current');
        $(parent).find('.tabText').removeClass('current');

        $(this).addClass('current');
        $(parent).find("#" + tab_id).addClass('current');
    })

    //tab end

    // accordion start

    $(document).on("click", ".accordion_head", function() {
        $(this).addClass("main").css("transition", "all .5s");
        $(this).siblings().removeClass("main");

        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
        if ($(this).next()[0] != $(".active")[0]) {
            $(".active").slideUp("fast", function() {
                $(this).removeClass("active")
            })
            $(this).next().slideDown("fast", function() {
                $(this).addClass("active")
            })
        } else {
            $(".active").slideUp("fast", function() {
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