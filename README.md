# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The runtime complexity depends on both the number of vertices (V) and the number of edges (E).

1. initializing an adjacency list, with each vertex have an empty spot, one loop involved, so the time complexity is $O(V)$
2. filling the adjacency list needs two nested loops, the outer loop iterates each vertex in the row, the inner loop iterates each vertex in the column, combine both loops, which resulting a time complexity $O(V^2)$. Moreover, the complexity of checking the directed edge is $O(1)$, add the vertex to the list is also $O(1)$.
3. finalizing the list used one loop, which runs V times, and inside the loop, the "Set" remove the dupulicates, results $O(E)$, and the "Sort" ensures the consistent order, which result the overall time complexity to be $O(E log E)$, this assume the worst-case when the graph is very dense, all the vertices are connected to each other.
4. combining them together, the time complexity is $O(V)+O(V^2)+O(1)+O(1)+O(E)+O(E log E)\in O(V^2+ElogE)$, in this case if the edges (E) are larger (each vertices connected to each other), it will dominate the time complexity, whereas if the edges (E) are smaller, the $V^2$ will be dominant, therefore, the runtime complexity dependens on both vertices and edges.

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where state otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” --Doris Yan

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
