# Array Of Anagrams

### Question

```js
const anagrams = arg => {
  // write your logic
};
```

```ts
const list = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
console.log(anagrams(list));

/* RESULT 
[
  ['kita', 'atik', 'tika'],
  ['aku', 'kua'],
  ['makan'],
  ['kia']
]
*/
```

### Explanation

Anagram is a term where a string if reversed the order will be the same eg.:
'aku' and 'kua' are Anagrams, 'aku' and 'aka' are Not Anagrams.
Below is an array containing a series of sample Strings:
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'] Please group / group the words in it according to the Anagram group.
Note: do not use es6 map, sort, reduce, find, filter syntax.

### ROLE

> LEAD FRONTEND ENGINEER

### TEST

```bash
 √ case.test.ts (1)
   √ Test index.ts file (1)
     √ Check if the function return the same output

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  455ms (in thread 1ms, 45491.90%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
✨  Done 
```
