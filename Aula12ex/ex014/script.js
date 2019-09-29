function charge() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var hour = date.getHours()
    // var hour = 15

    msg.innerHTML = `Agora são ${hour} hour.`

    if (hour >= 0 && hour < 12) {
        //BOM DIA
        img.src = 'img/morning.jpg'
        document.body.style.background = "#F7DDC2"
    } else if (hour >= 12 && hour <= 18) {
        //BOA TARDE
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#FF8800'
    } else {
        //BOA NOITE
        img.src = 'img/night.jpg'
        document.body.style.background = '#053575'
    }

}


