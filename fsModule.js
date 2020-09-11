const fs = require('fs') ;
const path = require('path') ;

// fs.mkdir(path.join(__dirname,'module') , {}, err => {
//     if (err) throw err ; 
//     console.log("The directory is created ");
// })

/// Creating file and adding content 

// fs.writeFile(path.join(__dirname,'module','hello.txt'), 'Hello world from node js', (err) =>{
//     if (err) console.log(err) ;
//     console.log("Ok content is wrote") ; 
// }); 

//appending text in a existing file 

fs.appendFile(path.join(__dirname,'/module','hello.txt'), '\n This is append since node js append file' , (err) => {
    if (err) console.log(err) ;
    console.log("Ok file is appended"); 
})

fs.readFile(path.join(__dirname,'/module','hello.txt'), (err, data) => {
    if (err) console.log(err) ;

    console.log(`The readed file content  \n : ${data}`) ; 
})