$(function(){
    var numFila = 0;
    $("#boton_guardar").on("click",function(event){
        numFila++;
        let fila = $('<tr>',{
            'id':'elem_tabla_fila'+numFila,
            'data-index-number':'fila'+numFila
        })//.append(agregarCampo).appendTo("tbody")
        let numInput = $("#form_entrada input").length
        for (let i = 1; i<=(numInput+1); i++){
                //$("#form_entrada input").each(function(index){
            //let texto = $('#form_input_'+i).val();
            let campo = $('<td>',{
                'id':'elem_tabla_'+numFila+"_"+i,
                'text':$('#form_input_'+i).val()
            });
            fila.append(campo)
        };
        let btnEdit = $('<button>',{
            'id':'boton_edit',
            'class':'btn btn-secondary w-50',
            'type':'button',
            'data-toggle':'modal',
            'data-index-number':numFila,
            'text':'Editar'
        })
        $('#elem_tabla_fila'+numFila+':last-child').append(btnEdit)
        $("tbody").append(fila);        //})
    });
    

});