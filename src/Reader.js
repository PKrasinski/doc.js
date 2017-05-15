const fs = require('fs');

// doc -c Reader -e
class Reader {
    constructor () {

    }
    // doc -f readJS ^ Reader
    // -p file {String} -m "File content as string"
    // -r {Part} -m "Return Part element" -e
    readJS ( path ) {
        let string = "";
        const split = this.split;
        fs.readFile(path, 'utf8', function read(err, data) {
            if (err) {
                throw err;
            }
            const lines = data.split("\n");
            lines.forEach((line) => {
                if(line.indexOf("//") > -1)
                    string += line.split('//')[1];
            })
            console.log("\n\n"+path+'\n\n')
            console.log(split(" doc ", "-e", string))
        });
    }

    split (a, b, string) {
        const ret = [];
        console.log()
        const temp = string.split(a);
        temp.forEach((el) => {
            const val = el.split(b);
            if(val.length > 1)
                ret.push(el.split(b)[0])
        })
        return ret;
    }
}

module.exports = Reader;
