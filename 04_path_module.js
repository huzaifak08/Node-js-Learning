const path = require('node:path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);     //myfile.html

const b = path.dirname('C:\\temp\\myfile.html');
console.log(b);     //C:\temp

const c = path.extname('C:\\temp\\myfile.html');
console.log(c);     //.html

const d = path.format({
    root: '/',
    name: 'file',
    ext: '.html'
});
console.log(d);     // /file.html

const e = path.normalize('C:\\temp\\\\foo\\bar\\..\\');
console.log(e);     // C:\temp\foo\

const f = path.parse('/home/user/dir/file.txt');
console.log(f);     // Whole object of format(mentioned above).