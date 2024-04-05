/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
 * Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. 
 * The richest customer is the customer that has the maximum wealth.
  
Constraints:
  
  m == accounts.length
  n == accounts[i].length
  1 <= m, n <= 50
  1 <= accounts[i][j] <= 100

 * @param {number[][]} accounts
 * @return {number}
*/


let maximumWealth = (accounts) => {
    let res = 0;

    for(let i = 0; i <= accounts.length; i++) {
        let temp = 0;
        for(let j = 0; j <= accounts[i].length; j++){
            temp += accounts[i][j];
        }
    res = Math.max(res, temp);
    }
    return res;
};

const data = maximumWealth([[1,5],[7,3],[3,5]])

console.log(data);