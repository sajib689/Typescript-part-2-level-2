const addMyCrush1 = <T extends {name: string, age: number, salary: number}>(myInfo: T) => {
    const crush = 'Rupali Khatun'
    const newData = {...myInfo, crush}
    return newData
}

const myInfo1 = {
    name: 'sodor ali',
    age: 34,
    salary: 45400,
    other: 'ssfd'
}
const result6 = addMyCrush1(myInfo1)
result6.salary = 2000000
console.log(result6)