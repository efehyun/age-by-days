function günlerleYaş() {
    var doğumYılın = prompt('Hesaplayabilmek için doğum yılını öğrenebilir miyim?');
    var gunYas = (2021 - doğumYılın) * 365;
    var h1 = document.createElement('h1');
    var çıkanCevap = document.createTextNode('Buna yaşamak denirse ' + gunYas + ' gündür yaşıyorsun.');
    h1.setAttribute('id', 'gunYas');
    h1.appendChild(çıkanCevap);
    document.getElementById('flex-box-sonuc').appendChild(h1);
}

function yeniden() {
    document.getElementById('gunYas').remove()
}