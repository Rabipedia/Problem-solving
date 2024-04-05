//Check for Balanced Brackets in an expression (well-formedness)
/**
 * he idea is to put all the opening brackets in the stack. Whenever you hit a closing bracket, search if the top of the stack is the opening bracket of the same nature. If this holds then pop the stack and continue the iteration. In the end if the stack is empty, it means all brackets are balanced or well-formed. Otherwise, they are not balanced.
 * Declare a character stack (say temp).
Now traverse the string exp. 
If the current character is a starting bracket ( ‘(‘ or ‘{‘  or ‘[‘ ) then push it to stack.
If the current character is a closing bracket ( ‘)’ or ‘}’ or ‘]’ ) then pop from the stack and if the popped character is the matching starting bracket then fine.
Else brackets are Not Balanced.
After complete traversal, if some starting brackets are left in the stack then the expression is Not balanced, else Balanced.
 * @param {*} exp 
 * @returns 
 */

const areBracketsBalanced = (exp) => {
    let stack = [];
    for(let i = 0; i < exp.length; i++) {
        let x = x;
        if(x == '(' || x == '{' || x == '[') {
            stack.push(x);
        }

        if(stack.length == 0) {
            return false;
        }

        let check;

        switch(x){
            case(')'):
                check = stack.pop();
                if(check == '{' || check == '[') {
                    return false;
                    break;
                };
            case('}'):
                check = stack.pop();
                if(check == '(' || check == '[') {
                    return false;
                    break;
                }
            case(']'):
                check = stack.pop();
                if(check == '(' || check == '{') {
                    return false;
                    break
                }
        }
        return (stack.length == 0);
    }
}

// Driver code
let expr = "([{}])";
 
// Function call
if (areBracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");

 
/**
 * Time Complexity: O(N), Iteration over the string of size N one time.
Auxiliary Space: O(N) for the stack. 

Check for Balanced Bracket expression without using stack :
Following are the steps to be followed:

Initialize a variable i with -1.
Iterate through the string and 
If it is an open bracket then increment the counter by 1 and replace ith character of the string with the opening bracket.
Else if it is a closing bracket of the same corresponding opening bracket (opening bracket stored in exp[i]) then decrement i by 1.
At last, if we get i = -1, then the string is balanced and we will return true. Otherwise, the function will return false.
Below is the implementation of the above approach:
 * @param {
 * } exp 
 * @returns 
 */

const areBracketsBalanced2 = (exp) => {
    let i = -1;
    let stack = [];
    for(let ch of exp){
        if(ch === '(' || ch === '{' || ch === '{') {
            stack.push(ch);
            i++;
        } else {
            if(i >= 0 && (stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']') ){
                stack.pop;
                i--
            } else{
                return false
            }
        }
    }
    return i === -1;
}
pr = "{()}[]";
 
// Function call
if (areBracketsBalanced(expr))
    console.log("Balanced");
else
    console.log("Not Balanced");

//Time Complexity: O(N), Iteration over the string of size N one time.
//Auxiliary Space: O(1)