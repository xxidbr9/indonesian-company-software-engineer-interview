const changeCase = (text: string): string => {
  const re = /_+(\w)/gm
  let result = text

  const finnedText = result.match(re)

  finnedText.forEach(e => {
    const upper = e[1].toUpperCase()
    result = result.replace(e, upper)
  })

  return result
}

export const camelCase = (arg): any => {
  const obj = arg as Object
  if (typeof arg === "object" && !!arg.length) {
    arg.forEach(e => camelCase(e))
  } else {
    const entries = Object.entries(obj)
    entries.forEach((e, i) => {
      if (typeof e[1] === "object") camelCase(e[1])
      obj[changeCase(e[0])] = e[1]
      delete obj[e[0]]
    })
  }

  return obj
}
