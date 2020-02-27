const eng = ['animal', 'cat', 'dog', 'elephant', 'bird', 'tiger', 'leopard', 'monkey', 'mouse', 'chicken'];
const vi = ['động vật', 'mèo', 'chó', 'voi', 'chim', 'hổ', 'báo', 'khỉ', 'chuột', 'gà'];

function trans() {
    if (document.getElementById('transMethod').value == "toEng") transEng();
    else transVie();
}

function transVie() {
    for (let i = 0; i < eng.length; i++) {
        if (document.getElementById('inputWord').value == eng[i]) {
            document.getElementById('result').innerHTML = vi[i];
            break;
        }
        if (i >= eng.length-1) alert('Can not find that word!!');
    }

}

function transEng() {
    for (let i = 0; i < vi.length; i++) {
        if (document.getElementById('inputWord').value == vi[i]) {
            document.getElementById('result').innerHTML = eng[i];
            break;
        }
        if (i >= vi.length-1) alert('Không tìm thấy từ !!');
    }

}