'use strict'

$(document).ready( // debut de votre code
    function(){
        
        $('h6').click(
            function(){
                alert("Hello");
            }
        );

        $('#moi').click(
            function(){
                $('h3').hide();
            }
        );

        $('#moi2').click(
            function(){
                $(this).hide();
            }
        );

        $('.photos').dblclick(
            function(){
                $('h3').show();
            }
        );

        $('#zone-rouge').mouseenter(
            function(){
                alert("vous etes dans la zone rouge");
            }
        )

        $('#texte').mouseleave(
            function(){
                alert("avez-vous bien lu le texte")
            }
        );

        $('#zone-verte').hover(
            function(){ // cette fonction correspond au mouseenter
                alert("vous entrez dans la zone verte") 
            },
            function(){ // cette fonction correspond au mouseleave
                alert("vous sortez de la zone verte")
            }
        );

        $('#zone-bleue').mousedown(
            function(){
                $('#zone-rose').hide();
            }
        );

        $('#zone-bleue').mouseup(
            function(){
                $('#zone-rose').show();
            }
        );


        // ------------------------------ zone de formulaire on va y mettre du css

        $('#form').css({
            "display": "flex",
            "flex-direction":"column"
        });

        $('input').css({
            "border":"2px solid red",
            "width":"50%",
            "margin-top":"2px",
        })

        // pour mettre qu'une seul ligne de css
        $('label').css("display",'block');


        $('input').focus(
            function(){
                $(this).css({
                    "background":'yellow',
                    "border":"4px dashed blue",
                })
            }
        );

        $('input').blur(
            function(){
                $(this).css({
                    "background":'white',
                    "border":"2px solid red"
                })
            }
        );

        $('#interrupteur').click(
            function(){
                $('#on-off').toggle();
            }
        );

        $('#lent').click(
            function(){
                $('#lentement').hide(1000) // les arguments "slow", "fast", ou en milliseconde
            }
        )













    }
) // fin du code