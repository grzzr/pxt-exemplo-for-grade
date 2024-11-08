let imgLargura = scene.screenWidth()
let imgAltura = scene.screenHeight()
let imagem = image.create(imgLargura, imgAltura)

let frutas = [
    assets.image`img1`,
    assets.image`img2`,
    assets.image`img3`,
    assets.image`img4`,
    assets.image`img5`,
]

let espacamento = 8

for (let x = 0; x < imgLargura; x++) {
    imagem.drawLine(x * espacamento, 0, x * espacamento, imgAltura, 10)
}

for (let y = 0; y < imgAltura; y++) {
    imagem.drawLine(0, y*espacamento, imgLargura, y*espacamento, 3)
}

let espFrutas = 32
let indiceFruta = 0

for (let x = 8; x < imgLargura; x+=espFrutas) {
    for (let y = 4; y < imgAltura; y+=espFrutas){
        if (indiceFruta > frutas.length-1) {
            indiceFruta=0
        }
        imagem.drawImage(frutas[indiceFruta], x, y)
        indiceFruta++        
    }
}

scene.setBackgroundImage(imagem)