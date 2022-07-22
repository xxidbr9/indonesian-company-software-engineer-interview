# In Deep Change Object Key's to camelCase

### Question

```js
const camelCase = arg => {
  // write your logic
};
```

```ts
// CASE 1
console.log(
  camelCase({
    a_b: "hello world"
  })
);
/* RESULT
{
  aB: "hello world"
}
*/

// CASE 2
console.log(
  camelCase([
    {
      a_a: 123
    },
    {
      b_b: 321
    }
  ])
);
/* RESULT
[  
  {
    aA: 123
  },
  {
    bB: 321
  }
]
*/

// CASE 3
console.log(
  camelCase({
    full_name: "Barnando Akbarto",
    birth_date: {
      day_born: 26,
      month_born: "October",
      year_born: 1998
    },
    address_info: {
      address_information_texted: "Jakarta Indonesia"
    },
    work_experience: [
      {
        company_name: "Cudy LTD",
        detail_information: {
          day_joined: "1 January 2020",
          day_exited: "15 October 2020"
        }
      },
      {
        company_name: "Ella Skin Care",
        detail_information: {
          day_joined: "18 January 2021",
          day_exited: "30 April 2022"
        }
      }
    ]
  })
);
/* RESULT
{
  fullName: "Barnando Akbarto",
  birthDate: {
    dayBorn: 26,
    monthBorn: "October",
    yearBorn: 1998
  },
  addressInfo: {
    addressInformationTexted: "Jakarta Indonesia"
  },
  workExperience: [
    {
      companyName: "Cudy LTD",
      detailInformation: {
        dayJoined: "1 January 2020",
        dayExited: "15 October 2020",
      }
    },
    {
      companyName: "Ella Skin Care",
      detailInformation: {
        dayJoined: "18 January 2021",
        dayExited: "30 April 2022",
      }
    }
  ]
}
*/
```

### Explanation

this is live code question on one of biggest e-commerce in Indonesia, this is for "Senior Frontend Engineer Roles", and need to finished with in 30 minutes countdown and coding without syntax highlight and auto completion.

### TEST

```bash
 √ case.test.ts (3)
   √ Test index.ts file (3)
     √ Check if work on one object key
     √ Check if work on array
     √ Check if work on deep object

Test Files  1 passed (1)
     Tests  3 passed (3)
      Time  474ms (in thread 2ms, 23686.14%)

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
✨  Done
```
