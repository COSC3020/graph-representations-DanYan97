
function convertToAdjList(adjMatrix) {

    var adjList = new Map(); // create a new list

    // initialize list 
    for (var i = 0; i < adjMatrix.length; i++) {
        adjList.set(i, []); // start with empty list 
    }

    // fill the list 
    for (var i = 0; i < adjMatrix.length; i++) {
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] === 1) { // There is a directed edge from i to j
                adjList.get(i).push(j); // Add j to the list of vertex i
            }
        }
    }

    // finalize the conversion 
    const resultList = [];
    for (var i = 0; i < adjMatrix.length; i++) {
        if (adjList.has(i)) {
            resultList[i] = [...new Set(adjList.get(i))];
            resultList[i].sort((a, b) => a - b); // sort to ensure consistent order
        } else {
            resultList[i] = []; // ensure every index has a list
        }
    }

    return resultList;
}

//I used ChatGPT to help me construct the psudocode and then I write the code based on that
//here is the psudocode: 
//initialize adjList as new map
//initialize the adjacency list
//fill the adjacency list based on the matrix
//finalize the conversion by removing duplicates and sorting to keep the consistent order
