
import { Block, blockType } from '../lib/main'

const ud = [
    { id: 1, name: "john" },
    {id: 2, name: "doe"},
    {id: 3, name: "sam"}
]

const users = new Block(ud)
users.remove()

console.log(users.get())
console.log(users.get(1))

users.loop(({data}:blockType, i:number) => {
    console.log(data, i)
})

//set--, remove--, map--, get--, blocks--