$(document).ready(function() {

    // start nav fixed
    window.addEventListener("scroll", function() {
            let header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 700)
            if (window.scrollY > 700) {
                document.querySelector(".mainMenu").style.paddingLeft = "5%"
                document.querySelector(".icon").style.display = "none"

            } else {
                document.querySelector(".mainMenu").style.paddingLeft = "0"
            }
        })
        // end nav fixed

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

    $('.toggle').click(function() {
        event.preventDefault();
        let $this = $(this);
        $("li").siblings().find(".main").removeClass('main')
        $this.addClass("main");

        if ($('.inner').is(':visible')) {
            $(".inner");
            $(".sign").text('+');
        }
        if ($(this).next(".inner").is(':visible')) {
            $(this).next(".inner");
            $(this).children(".sign").text('+');
        } else {
            $(this).next(".inner");
            $(this).children(".sign").text('-');
        }

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show').slideUp(250);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(250);
            $this.next().toggleClass('show');
            $this.next().slideToggle(250);
        }
    })

    //     if ($(this).next()[0] != $(".active")[0]) {
    //         $(".active").slideUp("fast", function() {
    //             $(this).removeClass("active")
    //         })
    //         $(this).next().slideDown("fast", function() {
    //             $(this).addClass("active")
    //         })
    //     } else {
    //         $(".active").slideUp("fast", function() {
    //             $(this).removeClass("active")
    //         })
    //     }


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



    //start plugin slider productList

    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
        //end plugin slider productList







})