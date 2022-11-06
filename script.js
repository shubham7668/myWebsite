$(document).ready(function(){
    $(window).scroll(function(){
        //Sticky navbar
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
    

    //Services 
    $('#services').waypoint(function(){
        $('.skills .skills-content .right .cpp').removeClass('animate');
        $('.skills .skills-content .right .html').removeClass('animate');
        $('.skills .skills-content .right .css').removeClass('animate');
        $('.skills .skills-content .right .js').removeClass('animate');
        $('.skills .skills-content .right .mysql').removeClass('animate');
        $('.skills .skills-content .right .node').removeClass('animate');
    });

    $('#skills').waypoint(function(){
        $('.skills .skills-content .right .cpp').addClass('animate');
        $('.skills .skills-content .right .html').addClass('animate');
        $('.skills .skills-content .right .css').addClass('animate');
        $('.skills .skills-content .right .js').addClass('animate');
        $('.skills .skills-content .right .mysql').addClass('animate');
        $('.skills .skills-content .right .node').addClass('animate');
    });



    //typing animation script
    var typed = new Typed('.typing',{
        strings:["Programmer","Web Developer","Competitive Coder","Tech Enthusiast ","Freelancer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop:true
    });
    
    // Toggle menu - navbar script
    $('.menu-btn').on('click',function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    //read more
    let flag = 0;
    $('.skills .skills-content .left a').click(function(){
        if(!flag){
            $('.skills .skills-content .left p .dots').css("display", "none");
            $('.skills .skills-content .left a').html('Read less');
            $('.skills .skills-content .left p .more').css('display', 'inline');
            flag = 1;
        }
        else{
            $('.skills .skills-content .left p .dots').css("display", "inline-block");
            $('.skills .skills-content .left a').html('Read more');
            $('.skills .skills-content .left p .more').css('display', 'none');
            flag = 0;
        }
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 40,
        loop: true,
        autoplayTimeOut: 5000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });




    //form submit request
    $('form').submit(function(event){
        event.preventDefault();
        var data = $(this).serialize();

        $.ajax({
            type:'POST',
            url: 'https://formsubmit.co/6821697c454d180728d7423d78949eed',
            data: data
        }).done(function(){
            Swal.fire({
                icon: 'success',
                title: 'Form submitted successfuly',
                text: 'Will get back to you soon',
                customClass:{
                    confirmButton:"swal-button"
                }
            });    

        })
        .fail(function(){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: '<p>Something went wrong!</p> <p>Please try again later.</p>',
                customClass:{
                    confirmButton:"swal-button"
                }
              })

        });

    });
}); 


