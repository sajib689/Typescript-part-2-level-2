type GenericArray<T> = Array<T>
type GenericTuple<X,Y> = [X,Y]
const rollNumbers: GenericArray<number> = [55, 67, 56]
const names: GenericArray<string> = ['kuddus', 'rahima']

const usersDetails: GenericArray<{}> = [{name: 'sajib'}]

console.log(rollNumbers,names,usersDetails)