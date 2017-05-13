// doc -c PathFilter -m "This class generate array with files path"
// -p path {String} -m "Main project path"
// -p src {String/Array} -m "Main project path" 
class PathFilter {
    constructor ( path, src, fileType, ignore ) {
        if(path instanceof String)
            this.__path = path;
        else
            throw new TypeError('path must be string');

        this.src = getArray(src);
        this.fileType = getArray(fileType);
        this.ignore = getArray(ignore);
    }

    // doc -f ^ PathFilter -m "Function return documentation JSON Object "
    // -r {JSON} -m "documentation Object" -e
    getJSON () {
        if(!(this.paths instanceof Array))
            throw new TypeError('paths must be Array');
        this.paths.forEach((path) => {
            console.log('tak');
        });
    }
}

module.exports = PathFilter;

function getArray ( elem ) {
    if(elem instanceof Array)
        return elem;
    if(elem instanceof String)
        return [elem];
    else
        throw new TypeError('src must be array or string');
}
