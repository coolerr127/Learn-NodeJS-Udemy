const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err
//     console.log('Папка создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'test.txt'), 
//     'I write test',
//     err => {
//         if (err) throw err
//         console.log('Файл был создан')

//         fs.appendFile(
//             path.join(__dirname, 'notes', 'test.txt'),
//             ' and add text',
//             err => {
//                 if (err) throw err
//                 console.log('Файл был изменен')

//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'test.txt'),
//                     (err, data) => {
//                         if (err) throw err
//                         console.log(data.toString())
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'test.txt'),
    path.join(__dirname, 'notes', 'note.txt'),
    err => {
        if (err) throw err
        console.log('Файл переименован')
    }
)