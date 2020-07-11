let p = `Nombre: "Fabricio" Apellido: 'Moreno Nombre: "Fabricio" Apellid1o: 'Moreno'
                `
        let c =document.getElementById('text')
        let qr = new QRCode(document.getElementById("qr-code"), p.trim());
        console.log('hOLAAA')

        qr.makeCode('https://www.google.com.ec/')