# Second Largest in Array

### Question

```js
const getSecondLargest = arg => {
  // write your logic
};
```

```ts
const list = [6,2,5,24,1,7,13,8,21]
console.log(getSecondLargest(list));

/* RESULT 
  21
*/
```

### Explanation

Find second largest number in a row, this kind of question always shown up in junior to middle level engineer, but keep in mind, never "SORT" the array, if you sort it, it will be O^n, keep it on one loop shoot or O^1

### ROLE

> FULLSTACK ENGINEER

### TEST

```bash
 √ case.test.ts (1)
   √ Test index.ts file (1)
     √ Check if the function return the same output

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  420ms (in thread 1ms, 41963.06%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
✨  Done
```
