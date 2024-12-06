import { fileURLToPath } from 'node:url';

// Example file URL
const fileUrl = 'file:///home/user/somefile.txt';

// Convert file URL to file path
const filePath = fileURLToPath(fileUrl);

console.log(filePath);
// Output: '/home/user/somefile.txt'
