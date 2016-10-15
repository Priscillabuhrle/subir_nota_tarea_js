
// ejercicios para subir nota

//ejercicio #1 "El menor de los numeros"
function buscando_al_menor(n1,n2,n3){
    var menor= Math.min(n1,n2,n3);
    return menor;
}
document.write(buscando_al_menor(5,27,1) + "<br>");

//ejercicio #2 "numero par o impar"
function par_o_impar(num){
	if(num%2==0){
		return num +" " + "es par" + "<br>";
	}else{
		return num + " " + "es impar" + "<br>";
	}
}
document.write(par_o_impar(8));

//ejercicio #3 "ordenando numeros"
function menor_a_mayor(n1,n2,n3){
	var ordenar= [n1,n2,n3].sort(n1-n2);
	return ordenar;
}
document.write(menor_a_mayor(23,65,54)+"<br>");

// ejercicio #4 "mayusculas o minusculas"
function mayusculas_minusculas(texto){
	var original= texto;
	var textMayuscula= texto.toUpperCase();
	var textMinusculas= texto.toLowerCase();
	if(original== textMayuscula){
		return texto + "El texto está formado sólo por mayúsculas";
	}else if(original == textMinusculas){
		return texto + "El texto está formado sólo por minúsculas";
	}else{
		return texto + "El texto está formado por mayúsculas y mayúsculas";
	}
}
document.write(mayusculas_minusculas("HOLA A TODOS" + " " + "=" + " ") + "<br>");
document.write(mayusculas_minusculas("hola a todos" + " " + "=" + " ") + "<br>");
document.write(mayusculas_minusculas("Hola A Todos" + " " + "=" + " ") + "<br>");

// ejrcicio #5 palindrome
function palindrome (cadena){
	var inicio=0;
	var final= cadena.length-1; 
	var contador= 0;
	while(final>=0){
		if(cadena.charAt(inicio) != cadena.charAt(final)){
			contador++;
		}
		inicio++;
		final--;
		if(contador>0){
			return cadena + " " + "no es un palindrome";
		}
	}
	return cadena + " " + "sí es un palindrome";
}
document.write(palindrome("ana") + "<br>");
document.write(palindrome("cama") + "<br>");

//ejercicio #7 "cuadrado de la suma de dos numeros"
function cuadrado_de_la_suma(num1,num2){
	var calculo= (num1 + num2)*(num1 + num2);
	return calculo + "<br>";
}
document.write(cuadrado_de_la_suma(3,6));

//ejercicio #8 "numero primo"
function buscar_numeros_primos(num){
if (num == 1 || num == 2){
	return num + " " + "es un número primo";
}else{
	for (var i=2; i<num; i++){
		if(num%i==0){
			return num + " " + "no es un número primo";
		}else{
			return num + " " + "es un número primo";
		}
	}
}
}
document.write(buscar_numeros_primos(4) + "<br>");
document.write(buscar_numeros_primos(71) + "<br>");
document.write(buscar_numeros_primos(7) + "<br>");

/*ejercicio #9 "multiplos de un numero"
function multiplos (num){
	var contador= 1;
	for( var i=1; i<=num; i++){
			return (contador*i);
		}
document.write(multiplos(4));*/

//ejercicio 10 Cantidad de digitos
function cantidad_digitos (num){
	var entero= Math.round(num);
	var cadena=entero.toString().length;
	if(entero>=0){
		return "La cantidad de digitos del número " + num + " " + "es = " + cadena; 
	}
}
document.write(cantidad_digitos(888));


  




