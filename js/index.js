const generateBtn = document.getElementById('generateBtn')
const qrGallery = document.getElementById('qr-gallery')
const myPage =  document.getElementsByTagName('body')[0]

function showDetails(textDetail){
    swal("Your message was", `${textDetail}`);
}

function addToGalleryQr(qr){
    const firstChild = qrGallery.firstChild
    qrGallery.insertBefore(qr,firstChild)
}

function createElementQr(text){
    const div = document.createElement('div')
    div.setAttribute('class','qr-code')
    div.setAttribute('id','qr-code')
    div.innerHTML = "<div class='qr-code_image' id='qr-code_image'></div>"
    div.innerHTML +="<button class='qr-code_details-btn' id='details-btn' data-btn='details' data-msg="+`'${text}'`+">Details</button>"
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
        const elementQr = createElementQr(textToConvertQr)
        addToGalleryQr(elementQr)
        generateQr(textToConvertQr)
        elementQr.scrollIntoView(false)
    }
    else
    {
        swal("Error", "Write the message that you want to convert ", "error");
    }
}

function enter(e){
    const keycode = e.keycode || e.which
    if(keycode === 13){
        myQr()
    }
}

function detect(e){
    const dataset = e.target.dataset
    if(dataset.btn === 'details'){
        const textOfQrCode = dataset.msg;
        showDetails(textOfQrCode)
    }
    
}
generateBtn.addEventListener('click',myQr)
myPage.addEventListener('click',detect)
document.addEventListener('keyup',enter)