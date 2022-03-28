$(function(){
    var numFila = 0;
    $("#boton_guardar").on("click",(event)=>{ //evento para guardar datos en la tabla
        let inputNombre = $("#form_input_1");
        let inputApellidos = $("#form_input_2");
        let inputEmail = $("#form_input_3");
        if(($("#form_input_1").val()!=="")&&($("#form_input_2").val()!=="")&&($("#form_input_3").val()!=="")){
            numFila++;
            let fila = $('<tr>',{
                'id':'elem_tabla_fila'+numFila,
                'data-index-number':'fila'+numFila
            });
            let numInput = $("#form_entrada input").length
            for (let i = 1; i<=(numInput+1); i++){
                    //$("#form_entrada input").each(function(index){
                let campo = $('<td>',{
                    'id':'elem_tabla_'+numFila+"_"+i,
                    'text':$('#form_input_'+i).val()
                });
                fila.append(campo);
            };
            let lastCampo = $('<td>',{
                'id':'elem_tabla_'+numFila+"_"+"5",
            });
            fila.append(lastCampo);
            let btnEdit = $('<button>',{ //crear boton editar
                'id':'elem_tabla_'+numFila,
                'class':'btn btn-secondary w-50',
                'type':'button',
                'data-toggle':'modal',
                'data-target':'#modal_edit',
                'data-index-number':numFila,
                'text':'Editar'
            })
            let btnDel = $('<button>',{ //crear boton eliminar
                'id':'elem_tabla_del'+numFila,
                'class':'btn btn-danger w-50',
                'type':'button',
                'data-toggle':'modal',
                'data-target':'#modal_eliminar',
                'data-index-number':numFila,
                'text':'Eliminar'
            });
            lastCampo.append(btnEdit);
            lastCampo.append(btnDel);
            $("tbody").append(fila);
            $("#form_input").trigger("reset"); //resetear formulario
            
            let alert = $("#alerta_agregar")
            alert.addClass("alert alert-success ml-4 mt-3 fade show")
            alert.text("Agregada con exito");
            alert.css("display", "block");

            setTimeout(function(){
                let alert = $("#alerta_agregar")
                alert.addClass('class', 'alert alert-success fade in');
                alert.css("display", "none");
            },3000);
    }else{
        let alert = $("#alerta_agregar")
        alert.addClass("alert alert-danger ml-4 mt-3 fade show")
        alert.text("Datos insuficientes");
        alert.css("display", "block");

        setTimeout(function(){
            let alert = $("#alerta_agregar")
            alert.addClass('class', 'alert alert-danger fade in');
            alert.css("display", "none");
        },3000);
    };
    });
    $('#modal_edit').on('show.bs.modal',(event)=>{
        let numeFila = event.relatedTarget.id;
        let regex = /(\d+)/g;
        let indexNum = numeFila.match(regex);
    
        for(let i=1;i<5;i++){
            let textoTabla = $('#'+numeFila+'_'+i).text();
            let campoEdit = $('#edit_input_'+i);
            campoEdit.attr('data-index-number', indexNum);
            campoEdit.val(textoTabla);
        };
    });

    $("#guardar_cambios").on('click',(event)=>{
        let numeID = $('#edit_input_1').attr('data-index-number');
        for(let i=1;i<5;i++){
            let campoEdit = $('#edit_input_'+i).val();
            let textoTabla = $('#elem_tabla_'+numeID+'_'+i);
            textoTabla.text(campoEdit);
        };
    });
    $('#modal_eliminar').on('show.bs.modal',(event)=>{
        let numeFila = event.relatedTarget.id;
        let regex = /(\d+)/g;
        let indexNum = numeFila.match(regex);
        let eliminarConfirma = $('#confirmar_eliminar');
        eliminarConfirma.attr('data-index-number', indexNum);
    });

    $('#confirmar_eliminar').on('click',(event)=>{
        let numeFila = $("#confirmar_eliminar").attr('data-index-number');
        $('#elem_tabla_fila'+numeFila).remove();
    });

});