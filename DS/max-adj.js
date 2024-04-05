/**
 * Minimize maximum adjacent difference in a path from top-left to bottom-right
 */
let m, n;

const isValid = (i, j, x, visited, arr, parent) => {
    if(i < 0 || j < 0 || i >=m || j >= n || visited[i][j] || Math.abs(arr[i][j] - parent) > x){
        return false;
    } 

    if(i == m-1 && j == n-1){
        return true;
    }
    visited[i][j] = true;

    if(i-1, j, x, visited, arr, arr[i][j]){
        return true;
    }
    if(i, j-1, x, visited, arr, arr[i][j]){
        return true;
    }
    if(i+1, j, x, visited, arr, arr[i][j]){
        return true;
    }
    if(i, j+1, x, visited, arr, arr[i][j]){
        return true;
    }

    return false;
}


const minEnergyPath = (arr) => {
    let start = 0;
    let end = 100000000;

    let result = arr[0][0]

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
    }

    let visited = new Array(m)
    for(let i = 0; i < m; i++){
        visited[i] = new Array(n).fill(0);
    }

    if(isValid(0, 0, mid, visited, arr, arr[0][0])){
        result = mid;
        end = mid - 1;
    }
    else {
        start = mid + 1;
    }

return result;
}