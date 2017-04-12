// Given a 2D matrix M, filled with either 0s or 1s, count the number of islands of 1s in M.
// An island is a group of adjacent values that are all 1s. Every cell in M can be adjacent to the 4 cells that are next to it on the same row or column.
//
// Explain and code the most efficient solution possible and analyze its runtime complexity.
//
// Example: the matrix below has 6 islands:
//
//         0  1  0  1  0
//         0  0  1  1  1
//         1  0  0  1  0
//         0  1  1  0  0
//         1  0  1  0  1


function islandCounter(M){
   islands = 0
   if (M == null OR M.length == 0){
      return 0
  }
   row = M.length
   col = M[0].length

   for(i=0;i<row-1;i++){
      for(j=0;j<col-1;j++){
         if (M[i][j] == 1):
            markIsland(M, row, col, i, j)
            islands++
      }
    }
  return islands
}

function markIsland(M, m, n, i, j){
   q = new Queue
   q.push([i,j])
   while (!q.isEmpty()){
      item = q.pop()
      x = item[0]
      y = item[1]
      if (M[x][y] == 1){
         M[x][y] = 2
         pushIfValid(q, m, n, x-1, y)
         pushIfValid(q, m, n, x, y-1)
         pushIfValid(q, m, n, x+1, y)
         pushIfValid(q, m, n, x, y+1)
    }
  }
}

function pushIfValid(q, m, n, x, y){
   if (x>=0 AND x<m AND y>=0 AND y<n)
      q.push([x,y])
}
