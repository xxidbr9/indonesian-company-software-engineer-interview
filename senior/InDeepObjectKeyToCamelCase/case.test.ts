import { camelCase } from './index'

const TEST_CASE_1 = {
  a_b: "hello world"
}

const EXPECTED_RESULT_1 = {
  aB: "hello world"
}

const TEST_CASE_2 = [
  {
    a_a: 123
  },
  {
    b_b: 321
  }
]
const EXPECTED_RESULT_2 = [
  {
    aA: 123
  },
  {
    bB: 321
  }
]

const TEST_CASE_3 = {
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
}

const EXPECTED_RESULT_3 = {
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

describe("Test index.ts file", () => {
  test("Check if work on one object key", () => {
    const result = camelCase(TEST_CASE_1)
    expect(result).toMatchObject(EXPECTED_RESULT_1)
  })

  test("Check if work on array", () => {
    const result = camelCase(TEST_CASE_2)
    expect(result).toMatchObject(EXPECTED_RESULT_2)
  })

  test("Check if work on deep object", () => {
    const result = camelCase(TEST_CASE_3)
    expect(result).toMatchObject(EXPECTED_RESULT_3)
  })
})