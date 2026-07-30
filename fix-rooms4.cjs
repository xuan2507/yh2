const fs = require('fs');

let content = fs.readFileSync('src/data/products.js', 'utf8');

// Replace second occurrence of 1643380
let count = 0;
content = content.replace(/https:\/\/images\.pexels\.com\/photos\/1643380\/pexels-photo-1643380\.jpeg[^\s"'<>]*/g, (match) => {
  count++;
  if (count === 2) {
    return 'https://images.pexels.com/photos/1649410/pexels-photo-1649410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
  }
  return match;
});

// Replace second occurrence of 1571450
count = 0;
content = content.replace(/https:\/\/images\.pexels\.com\/photos\/1571450\/pexels-photo-1571450\.jpeg[^\s"'<>]*/g, (match) => {
  count++;
  if (count === 2) {
    return 'https://images.pexels.com/photos/1649420/pexels-photo-1649420.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
  }
  return match;
});

fs.writeFileSync('src/data/products.js', content);
console.log('Fixed last 2 duplicates');
