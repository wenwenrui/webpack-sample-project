import _ from 'lodash'
import './css/stytle.css'
import {cube} from './utils/math'
// import Icon from './image/001.jpg'
const getData = ({id,username}) => {
  const query = `
    mutation UpdateUser($id: ID!, $username: String){
      UpdateUser(id:$id, input:{
        username:$username
      }){
        username
      }
    }`
  const variables = {id,username}
  fetch('./graphql',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accpect': 'application/json',
    },
    body: JSON.stringify({query, variables})
  }).then(res => res.json()).then(json => {
    console.log(json)
  })
}
const component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(["hello webpack!", `5 cube is equal to ${cube(5)}`], ' ')
  btn.innerHTML = '获取数据'
  btn.onclick = () => getData({id:1,username:'liuyanghao'})
  element.appendChild(btn)
  // element.classList.add('hello')
  // let image = new Image(500, 500)
  // image.src = Icon
  // element.appendChild(image)
  return element
}

document.body.appendChild(component())
