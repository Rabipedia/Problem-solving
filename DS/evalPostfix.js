const evalPostfix = (exp) => {
    let st = [];

    for(let i = 0; i < exp.length; i++) {
        let c = st[i];

        if(!isNaN(parseInt(c))){
            st.push(c.charCodeAt(0) - '0'.charCodeAt(0))
        } else {
            let val1 = st.pop();
            let val2 = st.pop()

            switch(c) {
                case '+':
                    st.push(val1 + val2);
                    break;
                case '-':
                    st.push(val1 - val2);
                    break;
                case '*':
                    st.push(val1 * val2);
                    break;
                case '/':
                    st.push(val1 / val2);
                    break;
            }
        }
    }
    return st.pop();
}