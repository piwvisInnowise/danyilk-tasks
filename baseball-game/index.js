/**
 * @param {string[]} operations
 * @return {number}
 */
let calPoints = function(operations) {
    let stack = []
    for (let i = 0; i < operations.length; i++) {
        if(operations[i] === "C") stack.pop()
        else if(operations[i] === "D") stack.push(stack[stack.length-1] * 2)
        else if(operations[i] === "+") stack.push(stack[stack.length-1] + stack[stack.length-2])
        else {stack.push(parseInt(operations[i]))}
    }
    let initial = 0
    return stack.reduce( (a,b) => a + b, initial)
};