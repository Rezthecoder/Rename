const fs = require('fs');

try {
  const data = fs.readdir('data')
  console.log(data);
} catch (err) {
  console.error(err);
}
