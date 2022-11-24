const transpose = function (matrix) {
    // Put your solution here

    let result = [];
    for (let x = 0; x < matrix[0].length; x++) {
        const column = []
        for (let y = 0; y < matrix.length; y++) {
            column.push(matrix[0][x]);
        }
        result.push(column);
    }
    return result;

};



const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))


        for (l of horizontalJoin) {
            if (l.includes(word)) {
                return true
            }
        }

        for (v of verticalJoin) {
            if (v.includes(word)) {
                return true
            }
        }
    
    return false
}


module.exports = wordSearch