
import { Block } from '../lib/main'

const ud = [
    { id: 1, name: "john" },
    {id: 2, name: "doe"},
    {id: 3, name: "sam"}
]

const users = new Block(ud)
users.remove()

console.log(users.blocks)
//set--, remove--, remove from index--, map, filter, blocks--