/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var suel;
    var resul;
    var porc
    porc= 1.25;
  

    suel= document.getElementById("importe").value;
    resul= document.getElementById("resultado").value;

     resul= parseInt(suel) - parseInt(suel) * 0.25 ;

    document.getElementById("resultado").value= resul;
    

}
