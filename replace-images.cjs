const fs = require('fs');
const path = require('path');

// Pool of unique replacement images (Pexels + Unsplash)
const replacements = [
  // Pexels interior/architecture
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/261388/pexels-photo-261388.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668870/pexels-photo-1668870.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668871/pexels-photo-1668871.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668873/pexels-photo-1668873.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668874/pexels-photo-1668874.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668876/pexels-photo-1668876.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668878/pexels-photo-1668878.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668880/pexels-photo-1668880.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668882/pexels-photo-1668882.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668884/pexels-photo-1668884.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668886/pexels-photo-1668886.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668888/pexels-photo-1668888.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668890/pexels-photo-1668890.jpeg?auto=compress&cs=tinysrgb&w=',
  'https://images.pexels.com/photos/1668892/pexels-photo-1668892.jpeg?auto=compress&cs=tinysrgb&w=',
  // Unsplash extras
  'https://images.unsplash.com/photo-1494526585095-c41746248156?w=',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=',
  'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=',
  'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=',
  'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=',
  'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=',
  'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=',
  'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=',
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=',
  'https://images.unsplash.com/photo-1521192586723-1ef0e384dd32?w=',
  'https://images.unsplash.com/photo-1592315862863-f5f4ff421b3b?w=',
  'https://images.unsplash.com/photo-1614961234425-dedd96e5e699?w=',
];

let replacementIndex = 0;
function getReplacement(width, height, fit) {
  const base = replacements[replacementIndex % replacements.length];
  replacementIndex++;
  let url = base + width;
  if (height) url += '&h=' + height;
  if (fit) url += '&fit=' + fit;
  return url;
}

function replaceInFile(filePath, isProductFile) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_\-]+\?[^\s"'<>]+/g;
  let match;
  const seen = new Map();

  // Find all unique URLs
  while ((match = regex.exec(content)) !== null) {
    const url = match[0];
    if (!seen.has(url)) {
      // Parse dimensions from URL
      const wMatch = url.match(/[?&]w=(\d+)/);
      const hMatch = url.match(/[?&]h=(\d+)/);
      const fitMatch = url.match(/[?&]fit=([^&]+)/);
      const qMatch = url.match(/[?&]q=([^&]+)/);

      const w = wMatch ? wMatch[1] : '800';
      const h = hMatch ? hMatch[1] : '';
      const fit = fitMatch ? fitMatch[1] : '';

      let replacement = getReplacement(w, h, fit);
      if (qMatch) replacement += '&q=' + qMatch[1];

      seen.set(url, replacement);
    }
  }

  // Apply replacements
  for (const [oldUrl, newUrl] of seen) {
    content = content.split(oldUrl).join(newUrl);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Replaced ${seen.size} images in ${filePath}`);
}

// Process page files (not product data)
const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  replaceInFile(path.join(pagesDir, file), false);
}

// Also process index.html
replaceInFile(path.join(__dirname, 'index.html'), false);

// Process room designs in products.js separately
// We only replace the room design images, not product images
let productsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'products.js'), 'utf8');
const roomRegex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_\-]+\?[^\s"'<>]+/g;
let roomMatch;
const roomSeen = new Map();
while ((roomMatch = roomRegex.exec(productsContent)) !== null) {
  const url = roomMatch[0];
  if (url.includes('w=800') && url.includes('h=600')) {
    // This is likely a room image
    if (!roomSeen.has(url)) {
      const wMatch = url.match(/[?&]w=(\d+)/);
      const hMatch = url.match(/[?&]h=(\d+)/);
      const fitMatch = url.match(/[?&]fit=([^&]+)/);
      const w = wMatch ? wMatch[1] : '800';
      const h = hMatch ? hMatch[1] : '';
      const fit = fitMatch ? fitMatch[1] : '';
      let replacement = getReplacement(w, h, fit);
      roomSeen.set(url, replacement);
    }
  }
}
for (const [oldUrl, newUrl] of roomSeen) {
  productsContent = productsContent.split(oldUrl).join(newUrl);
}
fs.writeFileSync(path.join(__dirname, 'src', 'data', 'products.js'), productsContent);
console.log(`Replaced ${roomSeen.size} room images in products.js`);

console.log('\nDone! Total unique replacements used:', replacementIndex);
