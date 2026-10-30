//npm init -> create package.json file --> describe the project and its dependencies

const fs = require('fs'); // file system module

//write file, copyfile, append file, rename, unlink

// fs.appendFile("hello.txt", "\nYes", function(err) {
//     if (err) {
//         console.error(err);
//     } else { console.log("done writing"); }
// })


// fs.rename("hello.txt", "New file.txt", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("done renaming");
//     }
// })


// fs.copyFile("New file.txt", "New file copy.txt", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("done copying");
//     }
// })



// fs.unlink("New file copy.txt", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("done deleting");
//     }
// })

// delete only empty folder, donot work with non-empty folder
// fs.rmdir("New folder", function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("done deleting folder");
//     }
// })

// // delete non-empty folder
// fs.rm("New folder", { recursive: true }, function(err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("done deleting folder");
//     }
// })


////////////////////////// create folder, read folder, read file


//HTTP and HTTPS
const http = require('http'); // http module

const server = http.createServer(function(req, res) { // create server
    res.end("Hello world"); // send response to client

})

server.listen(3000);