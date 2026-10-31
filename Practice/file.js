const fs = require('fs')

// fs.writeFile("note.txt", "Node js is awesome. ", function(err) {
//     if (err) {
//         console.log("Error writing file.")
//     } else {
//         console.log("File created successfully.")
//     }

// })

fs.appendFile("note.txt", "\ni love backend programming", function(err) {
    if (err) {
        console.log("Error appending file.")
    } else {
        console.log("Appended successfully")
    }
})

fs.copyFile("note.txt", "copy.txt", function(err) {
    if (err) {
        console.log("Error copying file")
    } else {
        console.log("Copied successfully")
    }
})

fs.rename("note.txt", "file.txt", function(err) {
    if (err) {
        console.log("Error renaming file.")
    } else {
        console.log("Renamed Successfully")
    }
})

fs.unlink("note.txt", function(err) {
    if (err) {
        console.log("Error deleting")
    } else {
        console.log("deleted successfully")
    }
})