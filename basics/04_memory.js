//memory types

// 1. stack (primitive types - number, string, boolean, null, undefined, symbol, bigint) 
    //stack is fixed size memory, where the memory is allocated during compile time.

        // here we get a copy of the value, thus the value is not changed in the memory.
        // example:
        let x = 1000;
        let y = x;
        x = 2000;
        console.log(x); // 2000
        console.log(y); // 1000

// 2. heap  (non - primitive types - object, array, function)
    //heap is a large unstructured region of memory, where the memory is allocated during runtime.

        // here we get a reference to the value, thus the value is changed in the memory.
        // example:
        let a = { age: 22 };
        let b = a;
        a.age = 20;
        console.log(a.age); // 20
        console.log(b.age); // 20
