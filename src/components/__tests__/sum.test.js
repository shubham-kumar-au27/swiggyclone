const sum = require('../sum')

test("sum function should calculate the sum of two numbers",()=>{
    const a = 3
    const b = 4
    const result = sum(a,b)

    //assertion----
    expect(result).toBe(a+b)
})
