import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Ndryshoje këtë nëse fotot i ke tek './public' në vend të './src/assets'
const dosja = './src/assets/images'; 

fs.readdir(dosja, (err, skedaret) => {
    if (err) return console.log('Gabim në leximin e dosjes:', err);

    skedaret.forEach(skedar => {
        // Gjej vetëm fotot JPG dhe PNG
        if (skedar.match(/\.(png|jpg|jpeg)$/i)) {
            const rrugaVjeter = path.join(dosja, skedar);
            const rrugaRe = rrugaVjeter.replace(/\.(png|jpg|jpeg)$/i, '.webp');

            // Konvertoi në WebP duke ulur peshën masivisht, por duke ruajtur cilësinë
            sharp(rrugaVjeter)
                .webp({ quality: 80 })
                .toFile(rrugaRe)
                .then(() => {
                    console.log(`✅ U konvertua: ${skedar} -> WebP`);
                    // Fshin foton e vjetër të rëndë automatikisht
                    fs.unlinkSync(rrugaVjeter); 
                })
                .catch(err => console.log('Gabim me:', skedar, err));
        }
    });
});