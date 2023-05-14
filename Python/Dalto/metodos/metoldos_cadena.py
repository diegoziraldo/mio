cadena1 = 'hola como estas'
cadena2 = 'Bienvenido'


#el funcionamiento de un metodo es 'DATO.NOMBRE DEL METODO()'
#En este caso estamos pasando un string a mayusculas con el metodo 'upper()'

#resultado = cadena1.upper()
#resultado = cadena1.lower()
#resultado = cadena1.capitalize()


#busqueda con metodo 'find()', si no lo encuentra devovlera -1
#resultado = cadena1.find('a')

#busqueda con metodo 'find()', es igual que el metodo find(), si no hay coincidencias envia una ecepcion
#resultado = cadena1.index('a')

#metodo isnumeric(), nos devolvera un valor buleano, true/false
#resultado = cadena1.isnumeric()

#metodo count(), nos dira cuantas veces se repite un valor
#resultado = cadena1.count('H')

#funcion len(), nos dira cuantos caracteres va a tener nuestro string, 
#o si hay un array nos va a devolver cuantos elementos tendra, 
#o si hay un objetos nos devolvera cuanttos elementos tendra ese objeto.
#resultado = len(cadena1)

#con el metodo startswith(), podremos verificar si la cadena empieza con los valores enviados en los parametros
#resultado = cadena1.startswith('h')

#con el metodo startswith(), podremos verificar si la cadena termina con los valores enviados en los parametros
#resultado = cadena1.endswith('ola')

#con el metodo replace(), podremos cambiar el valor de un string. en el primer parametro pondremos el valor que queremos modificar,
#y en el segundo parametro el valor que modificara al valor anterior. 
#resultado = cadena1.replace('ola','olas')

#con el metodo split(), podremos hacer que cada valor de un string nos los convierta en una lista,
#segun la condicion que le demos en el parametro
#resultado = cadena1.split(' ')

print(resultado)