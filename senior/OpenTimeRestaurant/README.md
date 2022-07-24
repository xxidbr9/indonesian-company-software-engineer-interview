# Restaurant Open Time

### QUESTION

```js
const parser = arg => {
  // write your script here
};
```

```ts
console.log(parser("Mon-Sun 11 am - 10:30 pm"));

/* RESULT
[
  { day: 0, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 1, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 2, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 3, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 4, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 5, openTime: '11:00 AM', closeTime: '10:30 PM' },
  { day: 6, openTime: '11:00 AM', closeTime: '10:30 PM' }
]
*/
```

### Explanation

this position is offer by on one of the most used job finder platform in Indonesia, and this project need to finished with in 3 days and it include take Home Project including other features, but main feature is convert list of time restaurant open to be stored in SQL database, see [CSV file](./hours.csv)

### ROLE

> Senior Fullstack Engineer

### TEST

```bash

 √ case.test.ts (14)
   √ Transform string (TIME) to object (6)
     √ Detect can be use in range
     √ Detect can be use in range (using space in gap)
     √ Detect can be use in range (Weekend first)
     √ Detect can be on selected day
     √ Detect can be on complex day
     √ Double Gap day
   √ Testing for Helpers (8)
     √ Check the string are number
     √ find day as number
     √ find days as number
     √ check if null
     √ check all day
     √ check is the first are smaller
     √ check is the first are bigger
     √ check is converted date to number

Test Files  1 passed (1)
     Tests  14 passed (14)
      Time  453ms (in thread 6ms, 7555.76%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
✨  Done
```
