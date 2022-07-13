$(document).ready(
    function(){


        $('.zone1').click(
            function(){
                $('h1').css({
                    "color":"green",
                    "text-align":"center",
                    "font-size":"80px",
                })
            }
        )

        $('.zone2').click(
            function(){
                $('body').css({
                    "background":'wheat',
                })
            }
        );

        $('.zone3').click(
            function(e){
                e.preventDefault();
                $('body').css({
                    "background":'brown',
                })
            }
        );

        $('.zone5').click(
            function(e){
                e.preventDefault();
                let colorer=$('.zone4').val();
                $('body').css("background",colorer);
            }
        );

        $('.zone7').click(
            function(e){
                e.preventDefault();
                let prems=$('.zone6').val();
                $('body').css("background", prems);

            }
        )

        $('.zone8').click(
            function(){
                $(".zone8").css("background","yellow");
            }
        )

        $('.zone9').click(
            function(){
                $(".zone9").css("background","yellow");
                $(this).css("background", 'green');
            }
        )



    }
)