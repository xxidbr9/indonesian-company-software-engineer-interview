# Deep Sorting

### Question

```js
const sorter = arg => {
  // write your logic
};
```

```ts
const area = {
  name: "DKI Jakarta",
  children: [
    {
      name: "Jakarta Timur"
    },
    {
      name: "Jakarta Selatan"
    },
    {
      name: "Jakarta Pusat",
      children: [
        {
          name: "Cempaka Putih"
        },
        {
          name: "Gambir"
        },
        {
          name: "Tanah Abang"
        },
        {
          name: "Johar Baru"
        },
        {
          name: "Kemayoran",
          children: [
            {
              name: "Gunung Sahari Selatan"
            },
            {
              name: "Kemayoran"
            },
            {
              name: "Harapan Mulya"
            },
            {
              name: "Cempaka Baru"
            },
            {
              name: "Kebon Kosong"
            },
            {
              name: "Sumur Batu"
            },
            {
              name: "Serdang"
            },
            {
              name: "Utan Panjang"
            }
          ]
        },
        {
          name: "Senen"
        },
        {
          name: "Menteng"
        },
        {
          name: "Sawah Besar"
        }
      ]
    },
    {
      name: "Jakarta Barat"
    },
    {
      name: "Jakarta Utara"
    }
  ]
};
// CASE
console.log(sorter(area));
/* RESULT
{
  "name": "DKI Jakarta",
  "children": [
    {
      "name": "Jakarta Barat"
    },
    {
      "name": "Jakarta Pusat",
      "children": [
        {
          "name": "Cempaka Putih"
        },
        {
          "name": "Gambir"
        },
        {
          "name": "Johar Baru"
        },

        {
          "name": "Kemayoran",
          "children": [
            {
              "name": "Cempaka Baru"
            },
            {
              "name": "Gunung Sahari Selatan"
            },
            {
              "name": "Harapan Mulya"
            },
            {
              "name": "Kebon Kosong"
            },
            {
              "name": "Kemayoran"
            },
            {
              "name": "Serdang"
            },
            {
              "name": "Sumur Batu"
            },
            {
              "name": "Utan Panjang"
            }
          ]
        },
        {
          "name": "Menteng"
        },
        {
          "name": "Sawah Besar"
        },
        {
          "name": "Senen"
        },
        {
          "name": "Tanah Abang"
        },
      ]
    },
    {
      "name": "Jakarta Selatan"
    },
    {
      "name": "Jakarta Timur"
    },
    {
      "name": "Jakarta Utara"
    }
  ]
}
*/
```

### Explanation

this is live code question on one of the biggest e-commerce in Indonesia, and need to finished with in 30 minutes countdown and coding without syntax highlight and auto completion in [https://codeshare.io](https://codeshare.io).

### ROLE
> Senior Frontend Engineer

### TEST

```bash

 √ case.test.ts (1)
   √ Test index.ts file  (1)
     √ Check is same as expected

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  462ms (in thread 2ms, 23104.53%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.ts |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
✨  Done
```
