$(function(){
  /*   for(let n=0;n<=$(".card").length;n++){
        $("#card_"+(n+1)).mouseenter((event)=>{
            $('.card-body').eq(n).empty();
            $.ajax("https://jsonplaceholder.typicode.com/users",{
                dataType: 'json',
                success: function (data){ 
                        $('.card-body').eq(n).append("<p>"+"<b>Nombre:</b> "+data[n].name+"</p>"+
                            "<p>"+"<b>Nombre de usuario:</b> "+ data[n].username+"</p>"+
                            "<p>"+"<b>Email:</b> "+data[n].email+"</p>");
                },
                error: function (jqXHR, texStatus, error){ 
                    $('.card-body').eq(n).append("<p>"+"Error: " + texStatus + " " + error+"</p>")
                }
            });
            $.ajax("https://jsonplaceholder.typicode.com/comments",{
                dataType: 'json',
                success: function (data){ 
                        $('.card-body').eq(n).append("<p><b>Comentario:</b></p>"+
                            "<p>"+ data[n].body+"</p>");
                },
                error: function (jqXHR, texStatus, error){ 
                    $('.card-body').eq(n).append("<p>"+"Error: " + texStatus + " " + error+"</p>")
                }
            });
        });
        $("#card_"+(n+1)).mouseleave((event)=>{
            $('.card-body').eq(n).empty();
        });
    }*/ 



/*     Mario, [01/04/2022 12:55]
$.ajax({
                url: "url_de_consulta",
                type: 'post/get o metodo que necsites usar',
                data: {
                    (solo para post)
                      variable1,
                     variable2, ....
                },
                success: function (data) {
                     "lo q ocurre cuando termina exitosamente la peticion", si hay datos de respuesta se accede con data. ....
                },
                error: data => {
                     "lo q ocurre cuando termina erroneamente la peticion"
                }
            }); */



    $('.mostrar').click((event)=>{

        let cardNum = event.currentTarget.dataset.id;
        console.log(cardNum)
        let numRandom = Math.round(Math.random()*10)
        let urlUsers = "https://jsonplaceholder.typicode.com/users?id=" + numRandom
        let urlComments = "https://jsonplaceholder.typicode.com/comments?id=" + numRandom


        console.log(numRandom)

        $('.card-body').eq(cardNum).empty();

        $.ajax({
            url: urlUsers,  //?id=+
            type: 'get',
            success:data=>{
                $('.card-body').eq(cardNum).append("<p>"+"<b>Nombre:</b> "+data[0].name+"</p>"+
                    "<p>"+"<b>Nombre de usuario:</b> "+ data[0].username+"</p>"+
                    "<p>"+"<b>Email:</b> "+data[0].email+"</p>");
            },

            error: (jqXHR, texStatus, error)=>{ 
                $('.card-body').eq(cardNum).append("<p>"+"Error: " + texStatus + " " + error+"</p>");
            }
        })

        $.ajax({
            url: urlComments,
            type:'get',

            success: data=>{ 
                    $('.card-body').eq(cardNum).append("<p><b>Comentario:</b></p>"+
                        "<p>"+ data[0].body+"</p>");
                    $('.card-footer').eq(cardNum).removeClass("d-none");
            },

            error: (jqXHR, texStatus, error)=>{ 
                 $('.card-body').eq(cardNum).append("<p>"+"Error: " + texStatus + " " + error+"</p>");
            }
            });
    });

    $('.ocultar').click((event)=>{
        let cardNum = event.currentTarget.dataset.id;

        $('.card-body').eq(cardNum).empty();
        $('.card-footer').eq(cardNum).addClass("d-none");
    });
});