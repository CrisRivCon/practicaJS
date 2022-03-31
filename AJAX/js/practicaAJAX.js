$(function(){
    for(let n=0;n<=$(".card").length;n++){
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
                        $('.card-body').eq(n).append(`<p><b>Comentario: </b></p><p>${data[n].body}</p>`);
                },
                error: function (jqXHR, texStatus, error){ 
                    $('.card-body').eq(n).append("<p>"+"Error: " + texStatus + " " + error+"</p>")
                }
            });
        });
        $("#card_"+(n+1)).mouseleave((event)=>{
            $('.card-body').eq(n).empty();
        });
    };
});