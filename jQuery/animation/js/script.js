'use strict';

$(document).ready(
    function(){

        $('#fadein').click(
            function(){
                $('#rouge').fadeIn();
                $('#bleu').fadeIn('slow');
                $('#vert').fadeIn(5000);
            }
        );

        $('#fadeout').click(
            function(){
                $('#photo').fadeOut();
                $('#gris').fadeOut('slow');
                $('#jaune').fadeOut(5000);
            }
        )

        $('#fadetoggle').click(
            function(){
                $('#orange').fadeToggle('fast');
                $('#photo2').fadeToggle('fast');
                $('#rose').fadeToggle('fast');
            }
        );

        $('#fadeto').click(
            function(){
                $('#formulaire').fadeTo("slow",1);
                $('#coucou').fadeTo(1000,0.3);
                $('#marron').fadeTo("slow",0);
            }
        );

         $('#fadeto2').click(
            function(){
                $('#formulaire').fadeTo("slow",0);
                $('#coucou').fadeTo(1000,0.8);
                $('#marron').fadeTo("slow",1);
            }
        );

        $('#barre').click(
            function(){
                $("#rideau").slideDown(5000);
            }
        );

        $('#barre2').click(
            function(){
                $("#rideau2").slideUp(5000);
            }
        )

        // Animate

        $("#btn-simple").click(
            function(){
                $('#simple').animate({
                    "top": "280px"},"slow");
            }
        );

        $("#btn-double").click(
            function(){
                $('#double').animate({
                    "bottom": "280px","left":"200px"},"slow");
            }
        );

        $("#btn-agg").click(
            function(){
                $('#agg').animate({
                    "height": "280px", "width":"250px",'line-height':'150px'},"slow");
            }
        )

        $("#btn-toggle").click(
            function(){
                $('#toggle').animate({
                    "height": "toggle", "width":"toggle"},"slow");
            }
        )

        $("#btn-etape").click(
            function(){
                $('#etape').animate({
                    "height": "200px", "width":"400px"},"2000");
                $('#etape').animate({
                    "line-height": "200px", "fontSize":"300%"},"3000");    
            }
        )

        $('#btn-etape2').click(function(){
        $('#etape2').animate({"height" : "200px", "line-height" :"200px" },700);
        $('#etape2').animate({"width" : "400px" },700);
        $('#etape2').animate({"left":"400px" },700);
        $('#etape2').animate({"top":"-250px" },600);
        $('#etape2').animate({"fontSize:" :"400%" },600);
        $('#etape2').animate({"opacity":"0px" },1000);
        });
        $('#simple1').on('mouseenter', function(){
            $(this).animate({left:'280px'},2000);
        });
        $('#double1').on('dblclick',function(){
            $(this).animate({"width" : 'toggle', "height" : 'toggle'},3000);
        });
        $('animation1').click(function(){
            $(this).animate({left:'280px'},1000)
            .animate({bottom:'300px', width:'250px', height:'250px'}, 2000)
            .animate({borderRadius:'40%'},3000)
            .delay(2000) //Delay permet de fire une pause duree milliseconde
            .animate({width:'150px'},1500)
            .animate({bottom:'0', left:'0'},2000)
        });
        $('#monBloc input').keyup(function(){
            $('#monBloc input').val($(this).val())
        })
    }
)