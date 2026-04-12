const https = require('https');
const fs = require('fs');
const path = require('path');

const fetchHTML = (url) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  }).on('error', reject);
});

async function serve() {
  try {
    const html = await fetchHTML('https://klhitech.com/');
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const dir = path.join(__dirname, 'public', 'logos');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    let promises = [];
    while ((match = imgRegex.exec(html)) !== null) {
      let imgSrc = match[1];
      // Try to fetch ones that look like logos
      if (imgSrc.includes('client') || imgSrc.includes('logo') || imgSrc.includes('cert') || imgSrc.includes('partner') || imgSrc.includes('visa') || imgSrc.includes('mastercard') || imgSrc.includes('rupay') || imgSrc.includes('aadhar')) {
        if (!imgSrc.startsWith('http')) {
          imgSrc = imgSrc.startsWith('/') ? `https://klhitech.com${imgSrc}` : `https://klhitech.com/${imgSrc}`;
        }
        
        const fileName = path.basename(imgSrc);
        promises.push(new Promise((res, rej) => {
          https.get(imgSrc, (response) => {
            if (response.statusCode === 200) {
              const fileStream = fs.createWriteStream(path.join(dir, fileName));
              response.pipe(fileStream);
              fileStream.on('finish', () => {
                fileStream.close();
                console.log('Downloaded', fileName);
                res();
              });
            } else {
              res();
            }
          }).on('error', res);
        }));
      }
    }
    await Promise.all(promises);
    console.log('Done downloading logos.');
  } catch (err) {
    console.error(err);
  }
}

serve();
