const fs = require('fs');

// doc -c DocumentationGenerator -m "This class generate documentation"
// -p paths {Array} -m "An array that contains file paths" -e
class DocumentationGenerator {
    constructor ( paths ) {
        this.paths = paths;
    }
    // doc -f ^ DocumentationGenerator -m "Function return documentation JSON Object "
    // -r {JSON} -m "documentation Object" -e
    getJSON () {
        if(!(this.paths instanceof Array))
            throw new TypeError('paths must be Array');
        this.paths.forEach((path) => {
            console.log('tak');
        });
    }
}

module.exports = DocumentationGenerator;
