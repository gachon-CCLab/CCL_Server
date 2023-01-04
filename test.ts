console.log('test.ts 실행');

const arr = [
  10, 20, 30, 40, 50
]

const obj = [
  {key: '1', content: 'apple'},
  {key: '2', content: 'banana'},
  {key: '3', content: 'carrot'},
  {key: '4', content: 'delta'},
  {key: '5', content: 'echo'},
  {key: '6', content: 'fox'},
  {key: '7', content: 'grape'},
  {key: '8', content: 'hexa'},
]

const obj2 = {
  key: '10',
  content: 'What a ten!',
  date: 'today',
  age: '12002'
}

const {key, ...res} = obj2;

console.log(res)

