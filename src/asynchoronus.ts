

const makePromise = () => {
  return  new Promise<string>((resolve, reject) => {
        const data:string = 'data fetched from server';
        if(data) {
            resolve(data)
        } else {
            reject('Failed to fetch data from server')
        }
    })
}

const getPromise = async (): Promise<string> => {
    const result = await makePromise()
    return result
}

const result7 = getPromise()
interface ITod  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
const getData = async () : Promise<ITod> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return await res.json()
}

const getAllData = async () => {
    const result = await getData()
    console.log(result)
    return result
}
getAllData()