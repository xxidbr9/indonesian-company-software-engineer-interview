# Word Count

### Question

The Blibli factory is a factory that produces patterned clothes using repeated words until a specified length. On Blibli's 50th anniversary, CEO Henry Jonathan visited the factory and requested that the letter "B" be sewn using golden thread.

William, who is going to buy the golden thread, is confused because each piece of clothing has different words and lengths. Help William create a program to count how many times the letter "B" appears, so that he knows how much thread to buy!

Input Format:
The function will receive 2 parameters:

text: a string representing the word to be repeated, where the length of text <= 100.
total: an integer representing the specified length of the word, where 1 <= total <= 10^12.
Example Input:
factory("BLIBLI", 14)

Output:
5

Explanation:
The word "BLIBLI" when repeated to a length of 14 will become "BLIBLIBLIBLIBL". In this word, there are 5 occurrences of the letter 'B', so the program prints 5.


```ts
const factory = () => {
  // write down here
}
```

```ts
console.log(factory("BLBLII", 100, "B"));
/* RESULT
34
*/
```

### Explanation
this is live code question on one of the biggest e-commerce, this task and need to finished with in 30 minutes countdown and coding in local vscode with screen sharing.

### ROLE
> Senior Frontend Engineer

### TEST

```bash

√ case.test.ts (5)
   √ factory (5)
     √ should count the occurrences of "B" in the repeated word
     √ should handle an empty text string
     √ should handle a zero total
     √ should handle a total that is smaller than the text length
     √ should handle a case-insensitive search

Test Files  1 passed (1)
     Tests  5 passed (5)
      Time  508ms (in thread 2ms, 25411.85%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
✨  Done
```
