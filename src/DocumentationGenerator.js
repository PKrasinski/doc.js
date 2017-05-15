const Reader = require("./Reader.js");

// doc -c DocumentationGenerator -m "This class generate documentation"
// -p paths {Array} -m "An array that contains file paths" -e
class DocumentationGenerator {
    constructor ( paths ) {
        if(!(paths instanceof Array))
            throw new TypeError('paths must be Array');
        this.paths = paths;
        this.reader = new Reader();
    }
    // doc -f getJSON ^ DocumentationGenerator -m "Function return documentation JSON Object "
    // -r {JSON} -m "documentation Object" -e
    getJSON () {
        this.paths.forEach((path) => {
            if(path.extension === ".js"){
                this.reader.readJS(path.path);
            }
        });
    }
}

module.exports = DocumentationGenerator;
