const fs = require('fs')
const path = require('path')

//********* CREATE A FOLDER *******//

fs.mkdir(path.join(__dirname, 'test'), {}, error => {
  if (error) {
    return console.log('Error:', error)
  }
  console.log('Folder created')
})

// ********** ASYNC ****************** //

//********* CREATE A FILE **************** //
fs.writeFile(
  path.join(__dirname, '/test', 'index.txt'),
  'Hello, Node!',
  error => {
    if (error) {
      return console.log('Erro:', error)
    }
    console.log('File created')

    //********** ADD TO A FILE ************//
    fs.appendFile(
      path.join(__dirname, '/test', 'index.txt'),
      'New text',
      error => {
        if (error) {
          return console.log('Erro:', error)
        }
        console.log('Text added')
      }
    )

    //********** READ A FILE ************* //
    fs.readFile(
      path.join(__dirname, '/test', 'index.txt'),
      'utf-8',
      (error, data) => {
        if (error) {
          console.log('Erro:', error)
        }
        console.log(data)
      }
    )
  }
)
