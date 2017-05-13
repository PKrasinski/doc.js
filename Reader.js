// doc -c Reader -e
class Reader {
    constructor () {

    }
    // doc -f readJS ^ Reader
    // -p file {String} -m "File content as string"
    // -r {Part} -m "Return Part element" -e
    readJS ( file ) {
        console.log(file)
    }
}

module.exports = Reader;
