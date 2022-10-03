# Z1 Front-end Challenge por Daniel González

## Music Media player

  ![app preview](/src/assets/preview.png)
  
  <h4 align="center"><a href="https://front-end-challenge-l0p6t4law-danielgonvie.vercel.app/">Demo publicada en Vercel</a> </h4>
  
  ### Arrancar el proyecto:
  Clona el respositorio y accede a él con tu terminal de comandos favorita. En la raíz del proyecto:
  - Instala las dependencias del proyecto: `yarn install`
  - Arranca el proyecto: `yarn run dev`
  
### Objetivos:

El **desafío principal** de esta práctica era realizar un reproductor funcional de música capaz de:
  - Ver la lista de canciones. ✔️
  - Poder escuchar cualquier canción seleccionada. ✔️
  - Función de Play/Pause. ✔️
  - Poder desplazarte entre el tiempo de la pista. ✔️
  - Marcar las canciones como favorito y que permanezcan marcadas una vez refresques. ✔️
  - Moverte entre canciones con los botones de "Atrás" y "Adelante". ✔️
  
Hablemos de los **extras**:
 
 - **La app debería verse bien en cualquier tamaño de ventana, ser "responsive"️:**
 Técnicamente se ve bastante bien en casi todos los tipos de ventana, excepto si pasamos a ventanas muy enanas o vista móvil ya directamente.
 - **Añadir tests unitarios o de integración:** Por falta de tiempo, y en parte inexperiencia, no me ha sido posible añadir tests.
 -**Añadir microinteracciones y animaciones️**: Sinceramente he hecho lo que considero mínimo para que el usuario se sienta acompañado.
 -**Cuidado con la accesibilidad:** Por desgracia es un tema que he dejado para el final y hay completa carencia de accesibilidad. Vendrá en el parche 2.0 🙇🏻
 - **Coherencia semántica de etiquetas:** He estado pendiente de este tema, muy posiblemente mejorable, pero en ningún momento cayó en el olvido.

### Apuntes:

No he separado la parte lógica de la visual. Soy consciente de ello y sería algo a arreglar inmediatamente de seguir con el proyecto.

He añadido la función de ordenar y filtrado. Ambas funcionan simultáneamente.

He añadido la función de poder silenciar completamente la música cuando lo necesites.

He intentado en todo momento conservar la estructura de la aplicación base.

Funciones y variables autodescriptivas, cabe lugar a mejora, pero me he esforzado por que se entienda.

He hecho sólo un story para el SongCard y he eliminado los archivos de stories vacíos por eso los componentes no tienen archivo *stories.tsx*.

He trabajado como lo haría en un entorno de trabajo, creando un nueva rama de git por feature o tarea.

He tenido que borrar la tipografía que venía por defecto ya que en mi sistema salían espacios que descolocaban absolutamente todos los textos y es incorregible con css.
 
 ---
## El Viaje ⛰️
Vamos con un poco de contexto ya que considero que es importante porque si echas un ojo a los commits, verás que esto ha sido una auténtica montaña rusa de emociones. 🎢

### Salida! 🏁
Partimos de un **perfil completamente inexperto** en el stack tecnológico, hace 2 semanas no había tocado nunca jamás ni Typescript, ni Graphql, ni NextJS, ni tampoco Styled components. Esto promete.

No lo voy a negar, recuerdas en el readme original que pone: **"Don't feel overwhelmed and make your best shot!"** ?

Adivina quien se sintió completamente overwhelmed en el minuto 1 🙂 pero aún así estaba dispuesto a darlo todo.

El inicio fue muy caótico, después de haberme visto la docu de todo el stack y verme unos cuantos vídeos, comencé a replicar lo que ya había hecho, a base de ensayo y error me quedó mucho más claro cómo funcionaban los tipos de Typescript así como crear los Styled Components. También añadí la llamada con graphql/apolo y aparentemente las cosas iban avanzando. La verdad es que este proceso es uno de mis favoritos, no saber absolutamente nada y ver "Hello world" en pantalla es muy satisfactorio.

### A medio camino 💪
Fui cogiendo ritmo creando componentes, la estructura core de mi app estaba quedando bastante mal, pero ante el desconocimiento decidí dejarlo así de momento y arreglarlo luego, ya que quería tener como la aplicación entera más o menos funcionando. Ante la costumbre de usar a diario otro framework en el que las props se pasan de padre a hijo y de hijo a padre "manualmente", seguí la misma dinámica. Esto provocó que el botón "play" de la SongCard lanzase un evento a la propia songCard, esta a Featured Songs y esta finalmente a la app, es decir 3 funciones para un simple "play" teniendo que tiparlas y declarlas todas.😵

Aquí también tuve mi primera **pelea intensa con Typescript**, decidí tratar de quitar errores que me devolvía por tipos que no entendía muy bien porqué eran. Perdí bastante tiempo pero a día de hoy ya lo entiendo mucho mejor y conseguí que aquel mural rojo pasase a ser simplemente alguien un poco sonrojado. 😊

### El principio del fin 🙃
**Caos**. Todos esos apaños que había hecho para poder continuar estaban saliendo a flote. Imposible de controlar el monstruo que había creado. En este punto **sólo había usado useState y useEffect** y la aplicación era insostenible, esa comunicación de componente nieto a componente abuelo fallaba más que una escopeta de feria. Tampoco tanto, no dramaticemos. Pero no había manera de que funcionasen correctamente los controles de reproducción.

Durante estos ultimos días estuve pensando como un bobo: "No sé si habrá algún tipo de contexto para no tener que estar haciendo esto que hago...", pero me costó mucho caer en nuestro querido amigo y vecino **useContext**🦸‍♂️.

En ese momento vi la luz al final del túnel por un lado, por otro: había que **refactorizar absolutamente TODO**.

A 2 días de que me comprometí a entregar el proyecto, refactorizarlo todo...

Diría que no fue fácil, pero la verdad le cogí el punto bastante rápido y finalmente lo conseguí, me dediqué a borrar código muerto y intentar llevar las funciones comunes al archivo del contexto para que estuviesen para uso y disfrute de todos los componentes.

### Deadline 🎉

Aquí estamos en el último día. La verdad, me hubiese gustado poder seguir y abarcar más pero es que han sido dos semanas muy intensas y mi cuerpo me pide entregarlo ya. Después de 8 horas de jornada laboral enfrentarte a esta prueba otras 4/6 horitas diarias agota.

Sinceramente me siento muy orgulloso de lo que he hecho y he conseguido en tan poco tiempo y con la completa inexperiencia que había. Pase lo que pase, me quedo con lo que he vivido estas dos semanas. Hacía tiempo que no me enfrentaba a un reto y mi cuerpo lo echaba de menos. Gracias.

---

Agracedimientos especiales a mi pareja que se ha quedado sin novio 2 semanas 🧡
