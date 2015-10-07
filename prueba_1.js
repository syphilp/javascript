
function edades() {
for ($i = 18; $i < 105; $i++) {
	var numero = $i;
	var x = document.createElement("OPTION");
	x.setAttribute("value", numero);
	var t = document.createTextNode(numero);
	x.appendChild(t);
	document.getElementById("edad").appendChild(x);
}
}

    function valideKey(evt)
    {
        var code = (evt.which) ? evt.which : evt.keyCode;
        if(code==8)
        {
            //backspace
            return true;
        }
        else if(code>=97 && code<=122 || code>=65 && code<=90)
        {
            //is a number
            return true;
        }
        else
        {
            return false;
        }
    }

function validar_formulario()
{ //validacion del nombre
  if (document.mi_formulario.salario.value < 100 || document.mi_formulario.salario.value > 4000){
    alert("El salario tiene que estar entre 100 y 4000");
	document.mi_formulario.salario.focus();
	return 0;
  }
  if (document.mi_formulario.nombre.value.length==0){
	alert("Tiene que introducir su nombre"); //nombre incorrecto
    document.mi_formulario.nombre.focus(); //se queda en el foco
	return 0; //sale de la funcion sin enviar el formulario
   }
   }
   
   if (document.mi_formulario.edad.value > 1 && document.mi_formulario.edad.value < 150) {
   
   //Envio de Formulario
    alert("Muchas gracias por enviar el formulario");
	alert("Bienvenido al foro");
	 document.mi_formulario.submit();
	 //Envia formulario a action
 }
 

  
 
  
