var agora = new Date()   /* usar a hora do sistema */
var hora = agora.getHours()  /* pode ser usado para dias, meses, segundos, horas, basta selecionar get.() */
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}