const fs = require('fs');

const freshIds = [
  '1643380','1571450','1571470','1648760','1648780','1648790',
  '1648810','1648850','1648860','1648870','1648880','1648890',
  '1648900','1648920','1648950','1648960','1648970','1648980',
  '1649020','1649110','1649120','1649140','1649170','1649180',
  '1649190','1649200'
];

let content = fs.readFileSync('src/data/products.js', 'utf8');
const regex = /https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg[^\s"'<>]*/g;

let idx = 0;
const seen = new Map();

let match;
while ((match = regex.exec(content)) !== null) {
  const url = match[0];
  if (!seen.has(url)) {
    const id = freshIds[idx % freshIds.length];
    idx++;
    const base = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=`;
    const wMatch = url.match(/[?&]w=(\d+)/);
    const hMatch = url.match(/[?&]h=(\d+)/);
    const fitMatch = url.match(/[?&]fit=([^&]+)/);
    let replacement = base + (wMatch ? wMatch[1] : '800');
    if (hMatch) replacement += '&h=' + hMatch[1];
    if (fitMatch) replacement += '&fit=' + fitMatch[1];
    seen.set(url, replacement);
  }
}

for (const [oldUrl, newUrl] of seen) {
  content = content.split(oldUrl).join(newUrl);
}

fs.writeFileSync('src/data/products.js', content);
console.log('Replaced', seen.size, 'room images with fresh IDs');
