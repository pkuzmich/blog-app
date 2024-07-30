import { writeFileSync, readFileSync } from 'node:fs'
const users = [
  {
    name: 'John Smith',
    email: 'john.smith@email.com',
  },
  {
    name: 'Lars Ulrich',
    email: 'lars.ulrich@em.com',
  },
]

const usersJSON = JSON.stringify(users)
writeFileSync('backend/users.json', usersJSON)

const readUsersJSON = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJSON)

console.log(readUsers)
