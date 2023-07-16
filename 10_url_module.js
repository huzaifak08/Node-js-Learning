// URL module:

import url from 'node:url'; // ES6 module

const myUrl = new URL('https://example.org');
myUrl.pathname = '/a/b/c';
myUrl.search = '?d=e';
myUrl.hash = '#fgh';

console.log(myUrl);
console.log(myUrl.href); //https://example.org/a/b/c?d=e#fgh

// Example 2:
const myUrl2 = new URL('/foo', 'https://example.org:81/');

console.log(myUrl2.href);       //https://example.org:81/foo
console.log(myUrl2.host);       //example.org:81
console.log(myUrl2.hostname);   //example.org
console.log(myUrl2.origin);     //https://example.org:81

// Exampe 3:
const myUrl3 = new URL('https://abc:xyz@example.com');

myUrl3.password = '123';
console.log(myUrl3.password);   //123 instead of xyz
console.log(myUrl3.href);       //https://abc:123@example.com/