import { sorter } from './index'

const TEST_CASE = {
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

const EXPECTED_RESULT = {
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

describe("Test index.ts file ", () => {
  test("Check is same as expected", () => {
    const result = sorter(TEST_CASE)
    expect(result).toMatchObject(EXPECTED_RESULT)
  })
})