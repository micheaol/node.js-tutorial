const fs = require('fs');

const readStream = fs.createReadStream('./docs/largefile.txt', {encoding: 'utf-8'});
//write stream:
const writestream = fs.createWriteStream('./docs/chunkfile.txt');
// readStream.on('data', (chunk)=>{
//     // console.log('============NEW CHUNK');
//     // console.log(chunk);
//     writestream.write('\nNEW CHUNK\n')
//     writestream.write(chunk);
// });

//Piping:
readStream.pipe(writestream);