function verify() {
    var date = new Date()//dates and times
    var year = date.getFullYear() //current year
    var fYear = document.getElementById('txtyear')//pode usar o query no lugar do getElement
    var res = document.querySelector('div#res')

    if (fYear.value.length == 0 || Number(fYear.value) > year) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = year - Number(fYear.value)
        var genre = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked) {
            genre = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/photo-baby-boy.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/photo-young-boy.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/photo-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/photo-grandfather.png')
            }

        } else if (fsex[1].checked) {
            genre = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/photo-baby-girl.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/photo-young-girl.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/photo-w.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/photo-grandmother.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genre} com ${idade} anos.`
        res.appendChild(img)

    }

}