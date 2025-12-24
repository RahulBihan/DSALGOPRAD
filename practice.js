console.log("This is practice.js file");

// Chunks
const chunksArray = (arr , size) =>{
    const chunks = [];
    for (let i = 0; i < arr.length; i += size){
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}
console.log(chunksArray([1,2,3,4,5,6,7,8,9], 3));

// seen replace with 1

const replaceWith1 = (arr) =>{
    let seen = new Set();
    return arr.map((num) =>{
        if(seen.has(num)){
            return 1;
        }
        seen.add(num);
        return num;
    })
}
console.log(replaceWith1([2,3,4,2,5,3,6]));

// debounce
const debounce = (func , delay) =>{
    let timer;
    return (...args) =>{
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this, args);
        }, delay);
    }
}
function search(query) {
    console.log('Searching for:', query);
}
const dSearch = debounce(search, 100);

// Simulate typing with multiple calls to the debounced function
dSearch('Hello');
dSearch('Hello, ');
dSearch('Hello, World!');  // Only this call will trigger after 100ms


// throttle
const throttle = (func, limit) =>{
    let inThrottle;
    return (...args) =>{
        if(!inThrottle){
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}