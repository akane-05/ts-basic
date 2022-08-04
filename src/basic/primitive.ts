import test from 'node:test'

export default function primitiveSample() {
  const name = 'あかね'
  console.log('sample 1:', typeof name, name)

  const age = 24
  console.log('sample 1:', typeof age, age)
}

type SampleGeneric<T> = {
  (array: T[], value: T): T
}

const SampleFunc: SampleGeneric<string> = (array, value) => {
  return 'sample'
}

interface Sample {
  name: string
}

interface Sample {
  num: number
}

interface SampleEx extends Sample {
  array: string[]
}

class SampleImp implements SampleEx {
  name: string
  num: number
  array: string[]

  constructor(name: string, num: number, array: string[]) {
    this.name = name
    this.num = num
    this.array = array
  }
}

type SampleType = {
  name: string
  num: number
}

interface SampleExSt extends SampleType {
  array: string[]
}

const SampleExSt1: SampleExSt = {
  name: 'Taro',
  num: 1,
  array: ['abc', 'def'],
}
