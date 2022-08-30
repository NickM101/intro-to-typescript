// Type Annotations

let myName: string = 'Nick'
let isCool: boolean = true
let favNumber: number = 42

function add(a: number, b: number) {
  return a + b
}

console.log(add(3, 3))

// Inferred Types

// myName, isCool, favNumber are inferred types,because they are already assigned

function minus(a: number, b: number) {
  // because it returns we need to define the type
  return a + b
}

console.log(minus(3, 3))

// Union Types - Takes more than one type

const numbersAndStrings: (string | number)[] = ['Nick', 23, 12, 'Dad']
console.log(numbersAndStrings)

let theAnswer: string | number = 42
theAnswer = 'Yes'

// Objects and Interfaces - describes what should be inside an object

// interface Person {
//   name: string
//   favNumber: number
// }

// const person = {
//   name: 'CJ',
//   favNumber: 12
// }

// function greet(person: Person) {
//   return `Hello ${person.name}`
// }

// console.log(
//   greet({
//     name: 'Nick',
//     favNumber: 122,
//     // dogName: "panzer"
//   })
// )

interface Person {
  name: string
  favNumber: number
  dogName?: string
}

const person = {
  name: 'CJ',
  favNumber: 12
}

function greet(person: Person) {
  return `Hello ${person.name}`
}

console.log(
  greet({
    name: 'Nick',
    favNumber: 122,
    dogName: 'panzer' // not mandatory
  })
)

// Type - other things apart from an object

type StreamerType = 'affiliate' | 'partner'

interface Dog {
  name: string
  streamerType: StreamerType
}

// Optional Properties

// Classes

class Computer {
  constructor(
    public name: string,
    public buildNumber: Number,
    public model: string
  ) {}
}

// Generics

function sortItems<T>(items: T[], compareFn: (a: T, b: T) => number): T[] {
  return items.sort(compareFn)
}

const numbers = [23, 24, 54, 21]

const sortedNumbers = sortItems<number>(numbers, (a, b) => a - b)
// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
