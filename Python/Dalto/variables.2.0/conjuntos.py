#creando un conjunto con set()
conjunto = set(['dato 1']) 


#metiendo un conjunto adentro de otro conjunto
#para poder ingresar un conjunto adentro de otro conjunto este debe ser inmutable.
#para esto usamos la funcion frozenset
conjunto1 = frozenset(['dato 1','dato 2'])
conjunto2 = {conjunto1,'dato 3'}

print(conjunto2)

#Teoria de conjuntos
conjunto1 = {1,3,5,7}
conjunto2 = {2,4,6}

#aca estamos comprobando si el conjunto2 es subconjunto de conjunto1
#en este caso devolvera un true
resultado = [conjunto2.issubset(conjunto1)]
resultado2 = conjunto2 <= conjunto1     #Esta comprobacion es equivalente a usar '[conjunto2.issubset(conjunto1)]'

#aca estamos comprobando si el conjunto2 es subconjunto de conjunto1
#en este caso devolvera un true
resultado = [conjunto2.issuperset(conjunto1)]
resultado2 = conjunto2 > conjunto1     #Esta comprobacion es equivalente a usar '[conjunto2.issuperset(conjunto1)]'

#aca vamos a verificar si hay por lo menos un numero en comun
resultado = conjunto2.isdisjoint(conjunto1)



print(resultado)

