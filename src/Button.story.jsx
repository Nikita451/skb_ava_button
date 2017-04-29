import React from 'react'
import StatusButton from './App/components/StatusButton/Button.jsx'

const placehoderImg = "http://dandelion-forum.48353.x6.nabble.com/file/a183/avatar100.png"
const placeStepanImg ="http://www.brichards19.com/wp-content/uploads/sites/10/2012/10/136526706-100x100.jpg"
const placeHardenImg = "http://sba.today/forums/uploads/profile/photo-thumb-1449.jpg"


const genImg = "http://www.web.uniport.pro/user/30641/534/53431846.png"
const retinaImg = "http://philboxing.com/news/pix/harden.200x200.jpg"

function onClick (e)  {
    return new Promise( (resolve, reject) => {
      setTimeout( resolve, 2000 )
    })
}

function onClick2 (e)  {
    return new Promise( (resolve, reject) => {
        setTimeout( reject, 2000 )
    })
}

module.exports = ({ storiesOf, action }) => {
   storiesOf('Button', module)
    .add('Success Response', () => {
      return <StatusButton title="Заказать со скидкой" onClick={ onClick } />
    })
    .add("Error Response", () => {
      return <StatusButton title="Заказать со скидкой" onClick={onClick2} />
    })
    .add("Success State", () => {
        return <StatusButton title="Заказать со скидкой" status="success" />
    })
    .add("Loading State", () => {
        return <StatusButton title="Заказать со скидкой" status="loading" />
    })
    .add("Error State", () => {
        return <StatusButton title="Заказать со скидкой" status="error" />
    })

    return storiesOf;
}
