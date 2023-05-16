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


# main
# puntero del objeto que apunta a la clase Gato


# vamos a hacer daño al gato, utilizando un metodo del objeto

# modificando una propiedad directamente
