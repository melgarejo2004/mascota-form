
$(function(){

    $('#btnGuardar').on('click', function(){
        
        $('#btnGuardar').removeClass('btn-primary').addClass('btn-warning');
        
        const nombre = $('#txtNombre').val();
        const email = $('#txtApellido').val();
        const nºdetelefono = $('#txtCedula').val();
        const direccion = $('#txtCedula').val();
        const nombredemascota = $('#txtCedula').val();
        const tipodemascota = $('#txtCedula').val();
        const raza = $('#txtCedula').val();
        const edad = $('#txtCedula').val();

        console.log('nombre' +nombre+ ',email ' +email+ ', telefono+ ' + telefono+ ',direccion+ ' + direccion+ ',mascota+ ' + mascota+ ',tipo+ ' + tipo+ ',raza+ ' + raza+ ',edad+ ' + edad+ ')

        alert('nombre' +nombre+ ',email ' +email+ ', telefono+ ' + telefono+ ',direccion+ ' + direccion+ ',mascota+ ' + mascota+ ',tipo+ ' + tipo+ ',raza+ ' + raza+ ',edad+ ' + edad+ ')
    });
});