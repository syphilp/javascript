function suma()
{
var numero1;
var numero2;
numero1=prompt('Ingresa el numero_1:');
numero2=prompt('Ingreda el numero_2:');

var suma=parseInt(numero1)+parseInt(numero2);

 alert('El resultadode la suma de '+numero1+' + '+numero2+' es'+' '+suma)
 }
 
 function resta()
 {
 var numero1;
 var numero2;
 numero1=prompt('Ingresa el numero_1:');
 numero2=prompt('Ingresa el numero_2:');
 
 if (numero1 < numero2) {
 alert('El numero 1 tiene que ser mayor que el numero dos');
 }
 else {
 var resta=parseInt(numero1)-parseInt(numero2);
 
 alert('El resultado de la resta es '+ resta)
 }
 }
 
 function producto()
 {
 var numero1;
 var numero2;
 numero1=prompt('Ingresa el numero_1:');
 numero2=prompt('Ingresa el numero_2:');
 
 var producto=parseInt(numero1)*parseInt(numero2);
 
 alert('El resultado del Producto es '+producto)
 }
 
 function division()
 {
 var numero1;
 var numero2;
 numero1=prompt('Ingresa el numero_1:');
 numero2=prompt('Ingresa el numero_2:');
 
 if(numero1 < numero2)
 {
 alert('El numero 1 tiene que ser mayor que el numero dos');
 }
 else
 {
var division=parseInt(numero1)/(numero2);

alert('El resultado de la division es '+division)
}
 }