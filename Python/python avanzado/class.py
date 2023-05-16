# Que es una clase


# Ejemplo basico
class Gato:
    # variables
    life = 100
    damage = 150

    # contructor / lo que hace es inicializar el objeto
    def __init__(
        self, name, age, velocity
    ):  # self es una referencia al objeto actual o instancia de la clase en los métodos
        self.name = name
        self.age = age
        self.velocity = velocity

    # metodos
    def takingDamage(self, dmgRecieve):
        

# main
# puntero del objeto que apunta a la clase Gato
gatoObjeto = Gato("Diego", 3 , 50)  #Aca estamos crando un objeto de la clase Gato, y le estamos pasando por parametros sus parametros correspondientes
print(f'nombre= {gatoObjeto.name} ')
print(f'edad= {gatoObjeto.age} ')
print(f'vida= {gatoObjeto.life} ')

# vamos a hacer daño al gato, utilizando un metodo del objeto

# modificando una propiedad directamente
