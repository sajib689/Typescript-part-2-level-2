const addMyCrush1 = <T>(myInfo: T) => {
    const crush = 'Rupali Khatun'
    const newData = {...myInfo, crush}
    return newData
}

const myInfo1 = {
    name: 'sodor ali',
    age: 34,
    salary: 45400
}
const result6 = addMyCrush1(myInfo1)
result6.salary = 2000000
console.log(result6)