import _ from 'lodash'
// import './css/style.css'
// import Icon from './image/001.jpg'
import print from './print'

const component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(["hello", 'webpack'], ' ')
  btn.innerHTML = 'click me';
  // btn.onclick = print.printMe()
  btn.onclick = print.printMe
  element.appendChild(btn)
  // element.classList.add('hello')
  // let image = new Image(500, 500)
  // image.src = Icon
  // element.appendChild(image)
  return element
}

document.body.appendChild(component())
