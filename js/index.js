const generateBtn = document.getElementById('generateBtn')
const qrGallery = document.getElementById('qr-gallery')

function addToGalleryQr(qr){
    const firstChild = qrGallery.firstChild
    qrGallery.insertBefore(qr,firstChild)
}

function createElementQr(){
    const div = document.createElement('div')
    div.setAttribute('id','qr-code')
    div.innerHTML = `
                <div class="qr-code_image" id="qr-code_image"></div>
                <button class="qr-code_details">Details</button>
                `
    return div
}

function generateQr(textToConvertQr){
    let qrCode = new QRCode(document.getElementById("qr-code_image"), textToConvertQr);
}

function checkIfIsVoid (textToConvertQr){
    if(!textToConvertQr || /^\s*$/.test(textToConvertQr)){
        return false
    }
    else{
        return true
    }
}

function myQr(){
    const textToConvertQr = document.getElementById('text-to-qr').value
    if (checkIfIsVoid(textToConvertQr)){
        const elementQr = createElementQr()
        addToGalleryQr(elementQr)
        generateQr(textToConvertQr)
    }
    else
    {
        alert('Vacio!!!')
    }
}

function enter(e){
    const keycode = e.keycode || e.which
    if(keycode === 13){
        myQr()
    }
}
generateBtn.addEventListener('click',myQr)
document.addEventListener('keyup',enter)