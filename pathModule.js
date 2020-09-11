var path = require('path');

console.log(__filename);
console.log(__dirname);

//Base file name 
console.log("Base name is : ", path.basename(__filename)) ; 

//Directory name 
console.log("The directory name is :", path.dirname(__filename)) ; 

//File extension 
console.log("The extension of your file is : ", path.extname(__filename)); 

//Create path object 
console.log(path.parse(__filename).base) ; 

//concatenate paths 
console.log(path.join(__dirname, 'test', 'file.html')) ;