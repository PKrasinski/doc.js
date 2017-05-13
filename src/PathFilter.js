const dirTree = require('directory-tree');

// doc -c PathFilter -m "This class generate array with files path"
// -p path {String} -m "Main project path"
// -p src {String/Array} -m "Files path"
// -p fileExt {String/Array} -m "Files extension"
// -p ignore {String/Array} -m "Ignore paths" -e
class PathFilter {
    constructor ( path, src, fileExt, ignore ) {
        if(typeof path === 'string' || path instanceof String)
            this.__path = path;
        else
            throw new TypeError('path must be string');

        this.src = getArray(src);
        this.fileExt = getArray(fileExt);
        this.ignore = getArray(ignore);
    }

    // doc -f getArray ^ PathFilter -m "Function returns the filtered array with all paths"
    // -r {Array} -m "paths array" -e
    getArray () {
        this.paths = [];
        this.src.forEach((path) => {
            path = this.__path + path;
            this.getFromTree(dirTree(path));
        })
        return this.paths;
    }

    // doc -f getFromTree ^ PathFilter -m "Function push filtered path to paths array"
    // -p tree {JSON} -m "Files tree" -e
    getFromTree (tree) {
        if(tree.children === undefined){
            const elem = this.filter(tree)
            if(elem !== undefined)
                this.paths.push(elem);
        }
        else {
            tree.children.forEach((child) => {
                this.getFromTree(child)
            })
        }
    }

    // doc -f filter ^ PathFilter -m "The function checks if path is not in the array and is not ignored and return path"
    // -p elem {JSON} -m "Path object"
    // -r {JSON/undefined} -m "Return undefined when path object is ignore or is in array, otherwise return path object"
    filter (elem) {
        let ignore = false;
        this.ignore.forEach((ign) => {
            if(elem.path.indexOf(ign) > -1)
                ignore = true;
        })
        if(ignore)
            return;
        this.paths.forEach((path) => {
            if(path.path === elem.path)
                ignore = true;
        })
        if(ignore)
            return;
        else
            return elem;
    }
}

module.exports = PathFilter;

function getArray ( elem ) {
    if(elem instanceof Array)
        return elem;
    if(typeof elem === 'string' || elem instanceof String)
        return [elem];
    else
        return [];
}
