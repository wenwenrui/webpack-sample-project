import _ from 'lodash'
import './css/stytle.css'
import {cube} from './utils/math'
// import Icon from './image/001.jpg'

const component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(["hello webpack!", `5 cube is equal to ${cube(5)}`], ' ')
  // btn.innerHTML = 'click me';
  // btn.onclick = print.printMe()
  // btn.onclick = print.printMe
  // element.appendChild(btn)
  // element.classList.add('hello')
  // let image = new Image(500, 500)
  // image.src = Icon
  // element.appendChild(image)
  return element
}

document.body.appendChild(component())
