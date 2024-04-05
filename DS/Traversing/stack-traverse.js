const st = [];

st.push(4);
st.push(6);
st.push(9);
st.push(1);

const traverseStack = (st) => {
    while(st.length != 0){
        console.log(st.pop()+ ' ');
    }
};

traverseStack(st);