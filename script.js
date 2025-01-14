const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function getTime(){
    const now = new Date() //fonction native de js pour récupérer date et heure. On les stocke dans now.
    const seconds = now.getSeconds() //getSeconds est une méthode native de l'objet Date pour avoir les secondes.
    const minutes = now.getMinutes()
    const hours = now.getHours()
    console.log(hours, minutes, seconds)
    const timeInterval = 6 //car une aiguille pivote de 6 degrés entre chaque seconde pour faire tout le cercle.

    secondsHand.style.transform = "rotate(" +(seconds * timeInterval)+"deg)" //ça donne "rotate(6deg)" par exemple. 1è seconde: 1x6, 2è sec:2x6... et on concatène avec 'deg'. 
    /*à ce stade, l'aiguille des secondes bouge correctement chaque fois qu'on rafraichit la page. Mais bien sûr on veut que l'aiguille bouge toute seule sans rafraichir -> setInterval pour que ça rafraichisse toutes les 100ms.*/
    minutesHand.style.transform = "rotate(" +(minutes * timeInterval)+"deg)"
    hoursHand.style.transform = "rotate(" +(hours * 30)+"deg)" //L'aiguille bouge de trente degrés à chaque heure.
    
}

getTime()
setInterval(getTime, 100)
/*setInterval permet de réexécuter une foncion à intervalle régulier. On lui passe la fonction à répéter en callback, et on indique le délai de répétition en milisecondes.*/ 

/*Remarque: si on veut donner un mouvement plus fluide aux aiguilles, on peut diviser les secondes (minutes * tieInterval + seconds/10) */