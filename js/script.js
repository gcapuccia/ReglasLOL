 

 function ReglasRamdon() {
   
    var numEle = document.getElementById("numEle").value;
    let numero = 0;
    var contenedor = document.getElementById("Contenedor");
    //var clasepri = "card border-danger";
    var clasepri = "card text-bg-secondary border-info mb-3";
    var numeroTitulo = 1;

    var TipoDeJuego = document.getElementById("TipoDeJuego").value;

    if (numEle <= 8) {
        if (TipoDeJuego == "2") {
            var Reglas = [Otros, Campeones, Hechisos, Spell, Item, Runas, Jungla, Peleas];
            while(numero < numEle){
                var regla = Reglas[Math.floor(Math.random()*Reglas.length)];
                regla = regla[Math.floor(Math.random()*regla.length)];
                console.log(regla);
                
    
                var divPadre = document.createElement("div");
                divPadre.className= clasepri;
                divPadre.style = "max-width: 18rem; min-width: 18rem; min-height: 10rem;";
                contenedor.appendChild(divPadre);
    
    
                var divTitulo = divPadre.appendChild(document.createElement("div"));
                divTitulo.className = "card-header";
                divTitulo.innerText = "Regla " + numeroTitulo;
    
    
                var divTarea = divPadre.appendChild(document.createElement("div"));
                divTarea.className = "card-body";
    
                var h5 = divTarea.appendChild(document.createElement("h5"));
                h5.className = "card-title";
                var tareap = divTarea.appendChild(document.createElement("p"));
                tareap.className = "card-text";
                tareap.innerText = regla;
    
                numero++
                numeroTitulo++
            }
        }
        if (TipoDeJuego == "1") {
            var Reglas = [Campeones, Hechisos, Spell, Item, Runas];
            while(numero < numEle){
                var regla = Reglas[Math.floor(Math.random()*Reglas.length)];
                regla = regla[Math.floor(Math.random()*regla.length)];
                console.log(regla);
                
    
                var divPadre = document.createElement("div");
                divPadre.className= clasepri;
                divPadre.style = "max-width: 18rem; min-width: 18rem; min-height: 10rem;";
                contenedor.appendChild(divPadre);
    
    
                var divTitulo = divPadre.appendChild(document.createElement("div"));
                divTitulo.className = "card-header";
                divTitulo.innerText = "Regla " + numeroTitulo;
    
    
                var divTarea = divPadre.appendChild(document.createElement("div"));
                divTarea.className = "card-body";
    
                var h5 = divTarea.appendChild(document.createElement("h5"));
                h5.className = "card-title";
                var tareap = divTarea.appendChild(document.createElement("p"));
                tareap.className = "card-text";
                tareap.innerText = regla;
    
                numero++
                numeroTitulo++
            }
        }
        
    }
    console.log(numEle);
}

     
 var Otros = [           
            "No podes mejorar tus botas hasta que no tengas 5 kills o 10 asistencias.",
            "Solo podes comprar items completos, no componentes.",
            "Solo podes usar tu hechizo de invocador puesto en la F.",
            "Un solo jugador puede usar lentes del oraculo o wards de control. El resto tiene que usar centinelas comunes.",
            "Nadie puede poner ningun ward. Si hay un wardeador designado, esta excento de esta regla.",
            "Despues de los 25 minutos, solo podes estar en midlane. Solo podes defender tus torretas, inibidor y nexo desde adentro de tu base.",
            "A partir de nivel 9, tenes que tener un elixir activo todo el tiempo. Si se acaba tenes que backear al instante.",
            "Cada vez que spawnea un dragon, todos tienen que ir a pelearlo al instante.",
            "Un jugador va a ser un feudal. Si el feudal pide ayuda, los otros jugadores deben dejar lo que estan haciendo al instante e ir a ayudarlo.",
            "La botlane son amantes. Tienen que estar en rango de vision de uno a otro todo el tiempo. Si uno muere el otro lo tiene que esperar en el nexo hasta que reaparezca.",
            "Un jugador va a ser un feudal. Todo el resto tiene que copiar su build de items exactamente.",
            "El ADC tiene que ir mid, el mid tiene que ir a bot. El resto de lineas son libres.",
            "Cada 4 minutos por los primeros 12 minutos hay que cambiar lineas. Top va a mid, mid va a bot y bot va a top. El JG elige una linea inicial y va rotando a que linea solo puede gankear.",
            "Todos tienen que usar la runa de Demoler. Si otra runa especifica una runa primaria, demoler tiene que estar en la secundaria.",
            "Si un jugador usa su ulti, el resto del equipo tambien la tiene que usar inmediatamente.",
            "No podes usar NADA que te de velocidad de movimiento, te desplaze o haga que te muevas mas rapido.",
            "Un jugador es el presidente. A partir del minuto 30, cada vez que esa persona muera el equipo tiene que entregar una torre o inhibidor."
        ];

 var Campeones = [
            "Solo se pueden usar asesinos.",
            "Solo se pueden usar personajes que usen cuchillos, espadas o armas.",
            "Solo se pueden usar peleadores.",
            "Solo se pueden usar tiradores.",
            "Solo se pueden usar personajes que tengan paletas de colores distintas de uno a otro.",
            "Solo se pueden usar magos.",
            "Solo se pueden usar soportes.",
            "Tenes que usar un personaje aleatorio.",
            "No se pueden usar campeones que usen mana.",
            "Tenes que usar un campeon que no usaste nunca.",
            "Tenes que usar tu campeon con mayor maestria. Si no esta disponible, el campeon con 2da mas maestria."
        ];       

 var Hechisos = [
            "Tus hechizos tienen que ser Barrera y Curacion.",
            "Tus hechizos tienen que ser Fantasmal y TP.",
            "No puedes usar Curacion.",
            "No podes usar ni flash ni fantasmal.",
            "Todos tienen que usar Castigo.",
            "Tus hechizos tienen que ser Extenuar e Ignicion.",
            "No se permite el uso de hechizos de invocador durante los primeros 5 minutos del juego"
        ];

 var Spell = [
            "Maxea tu Q primero.",
            "Maxea tu W primero.",
            "Maxea tu E primero.",
            "Solo podes mejorar tu R cuando no puedas mejorar otra cosa."
        ];

 var Item = [
            "Las unicas botas que podes comprar son las Botas de Movilidad.",
            "No podes comprar items AP.",
            "No podes comprar items AD.",
            "No podes comprar items de movilidad.",
            "No podes comprar items de tanque.",
            "Full letalidad, todos tus items te tienen que dar letalidad.",
            "Full critico, todos tus items te tienen que dar critico.",
            "Todos tienen que comprar La fuerza de la Trinidad como primer item. Item inicial de suporte y JG estan excentos.",
            "Solo podes comprar items que tengan azul en su icono.",
            "El primer item tiene que ser un zhonya o un angel guardian. Item inicial de suporte y JG estan excentos.",
            "Tenes que priorizar items que te reduzcan el cooldown de habilidades.",
            "Tenes que priorizar items que te den velocidad de movimiento.",
            "Tenes que priorizar items de tanque. Vida, Resistencia magica y Armadura."
        ];

 var Runas = [
            "Tus runas primarias tienen que ser Presicion.",
            "Tus runas primarias tienen que ser Dominacion.",
            "Tus runas primarias tienen que ser Brujeria.",
            "Tus runas primarias tienen que ser Valor.",
            "Tus runas primarias tienen que ser Inspiracion."
        ];

 var Jungla = [
            "No hay jungla, todo el mundo en las lineas. No podes rotar ni entrar a la jungla hasta que la primera torre de todas las lineas hallan caido.",
            "Hay dos junglas. Los junglas tienen que estar juntos cuando gankeen, invadan pusheen lineas o peleen objetivos."
        ];

 var Peleas = [
            "Si decidis pelearle a un enemigo, tenes que seguir peleando hasta que vos o el mueran. No podes escapar ni retroceder.",
            "Si un miembro de tu equipo muere, el compañero mas cercano debe gastar su hechizo en la Letra 'F'",
            "Si un Enemigo muere, debes de escribirle un insulto en el chat general y no contestarle."
        ];



