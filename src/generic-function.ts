const createArray1 = <T>(param: T) => {
    return [param]
}

const result1 = createArray1<string>('Bangladesh')

const addMyCrush = (myInfo: object) => {
    const crushName = 'Rupali'
    const newData = {...myInfo, crushName}
    return newData
}

const myInfo = {
    name: 'sajib',
    age: 33,
    salary: 4444
}
const result5 = addMyCrush(myInfo)
console.log(result5)