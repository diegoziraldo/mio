import random #Aca estamos importando un modulo

def adivina_el_numero(x):
    print(f'Bienvenido al juego')
    print(f'Adivina cualñ es el numero generado por la computadora')
    
    numero_aleatorio = random.randint(1, x) #con el metodo randint() vamos a crear un numero aleatorio entero (entre 1 y x inclusive) Dentro de los paramentros pondremos el rango que queremos que nos devuelva ese numero.
    
    prediccion = 0    

    while prediccion != numero_aleatorio:
        prediccion = int(input(f'Adivina un numero entre 1 y {x}: ')) #Aca estamos creando un input con esto podremos ingresar valores desde el usuario a la variable, con int convertiremos el valor a un tipo de dato number

        if prediccion < numero_aleatorio:
            print('Intenta otra ves tu numero es menor al que elegi')
        elif prediccion > numero_aleatorio:
            print('Intenta otra ves tu numero es mayor al que elegi')

    print(f'Felicitaciones adivinaste el numero {numero_aleatorio}')    
    print(numero_aleatorio)
    
adivina_el_numero(10)