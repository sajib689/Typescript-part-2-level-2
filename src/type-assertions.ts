
function kgToGm (param: string | number | undefined) {
    if(typeof param === 'string') {
        const value = parseFloat(param) * 1000
        return `The Converted result is ${value} gram`
    } 
    if(typeof param === 'number') {
        const value = param * 1000
        return value
    }
}

const result = kgToGm(100) as number
const result2 = kgToGm('1000') as string
console.log(result)
console.log(result2)