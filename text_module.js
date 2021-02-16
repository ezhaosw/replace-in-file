
/**
 * Replaces a string in a file with another word and creates a new
 * file (does not overwrite the original).
 * 
 * @param {string} filename     The file to open.
 * @param {string} toReplace    The word to replace.
 * @param {string} alt          The replacement word 
 *      (default value: '****')
 * 
 * @ return {string} The updated contents of the file.
 */
function replace(filename, toReplace, alt='****') {
    let fs = require('fs');
    let text = fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error: ${err}`);
            return;
        }
        let regex = new RegExp(toReplace, 'g');
        let buf = data.replace(regex, alt);
        fs.writeFile(`${filename}_new.txt`, buf, 'utf8', (err) => {
            if (err) {
                console.err(`Error: ${err}`);
            } else {
                return buf;
            }
        })
    })
}

exports.replace = replace;
