export default function obj() {
  //オブジェクトリテラル記法
  //   let sample: {
  //     lang: string
  //     name: string
  //   } = {
  //     lang: 'Japan',
  //     name: '日本',
  //   }

  //   console.log('結果:', typeof sample)
  //   console.log('結果:', sample.lang)

  //   sample = {
  //     lang: 'america',
  //     name: 'アメリカ',
  //   }

  //   console.log('結果:', sample.lang)

  //   let human: {
  //     name: string
  //     age: number
  //   } = {
  //     name: 'tarou',
  //     age: 20
  //   }

  //   const sample1: {
  //     [position: string]: string
  //   } = {
  //     'leader': 'Taro',
  //     'deputyLeader': 'Hanako'
  //   }

  //   sample1.member = 'Sho'

  type Membership = {
    name: string
    number: number
    gender: string
  }

  const member: Membership = {
    name: 'Taro',
    number: 1,
    gender: 'man',
  }
}
