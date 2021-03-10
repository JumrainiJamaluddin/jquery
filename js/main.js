function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn",{
                                stagger: 150,
                                //memanggil functiin animasiButtonStart
                                complete: function(){
                                        animasiButtonStart();
                                    }
                             });
}
function animasiButtonStart(){
    $("#start").velocity("transition.bounceUpIn")
                //isi animasi function animasibuttinstart
                .mouseenter(function(){
                    $(this).velocity({width:100});
                })
                .mouseleave(function(){
                    $(this).velocity({width:120});
                });
}

function animasiIntroOut(){
    $("#start").velocity("transition.whirlOut",{
                        stagger : 150,
                        //memanggil fungsi
                        complete: function(){
                            $("#text").velocity({"font-size":"20px",
                                                    "top": "95%"
                                                },{
                                                    duration: 900,
                                                    complete: function(){
                                                        callMenu();
                                                        $("#menu ul li a[href='undangan']").trigger("click");
                                                    }
                                                })
                        }
    })
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
                                 stagger: 250
                                });
    $("#menu ul li a").click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");

        var hrefString = $(this).attr("href");
        $(".container-content").fadeOut(1000);
        setTimeout(function(){ 
            $("#" + hrefString).show();
            window[hrefString]();
        }, 1000);	
});
}

function undangan(){
    $("#undangan img").velocity("transition.flipYIn", {duration:1500});
    $("#undangan .title").velocity("transition.slideUpIn", {duration:1500});
    $("#undangan div").velocity("transition.slideDownIn", {duration:1500});
}

function our_team(){
    $(".members.top240").velocity("transition.slideUpIn",{ stagger: 100 });		
    $(".members.top170").velocity("transition.slideDownIn",{ stagger: 1000 });		
    $("#our_team p").velocity("transition.slideDownIn",{ stagger: 100 });
    $("#our_team h1").velocity("transition.flipYIn", {duration:1500});		
}

$(document).ready(function(){
    
    animasiIntro();
});
