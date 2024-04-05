//Function to return precedence of operators

const prec = (c) => {
    if(c == '^') {
        return 3
    } else if (c == '/' || c == '*') {
        return 2
    } else if (c == '-' || c == '+') {
        return 1
    } else
    return -1
}

// The main function to convert infix expression
//to postfix expression
const infixToPostfix = (s) => {
    let st = [];
    let result = '';

    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
            result += c
        } else if (c == '(') {
            st.push(c);
        } else if (c == ')') {
            while(st[st.length - 1] != '(') {
                result += st[st.length - 1];
                st.pop();
            }
            st.pop();
        } else {
            while( st.length != 0 && prec(st[i]) <= prec(st.length - 1)) {
                result += st[st.length -1];
                st.pop();
            }
            st.push(c);
        }
    }
    while(st.length != 0) {
        result += st[st.length - 1];
        st.pop();
    }
}

let exp = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(exp));