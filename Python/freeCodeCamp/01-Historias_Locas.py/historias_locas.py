#concatenar cadenas de caracteres
#supongamos que queremos crear una cadena que diga
#Aprende a programar con ____________.

#organizacion = 'freeCodeCamp'

#print('Aprende a programar con ' + organizacion)
#print('Aprende a programar con {}'.format(organizacion))
#print(f'Aprende a programar con {organizacion}')

#Mad libs (Historias locas)
adj = input('Adjetivo: ')
verbo1 = input('Verbo: ')
verbo2 = input('Verbo: ')
sustantivo_plural = input('Sustantivo (plural): ')

madlib = f"Programar es tan {adj}! Siempre me emociona {verbo1}. Aprender a {verbo2} con freeCodeCamp {sustantivo_plural}!"

print(madlib)