import React from 'react'
import Avatar from './App/components/Avatar/Avatar.jsx'

const placehoderImg = "http://dandelion-forum.48353.x6.nabble.com/file/a183/avatar100.png"
const placeStepanImg ="http://www.brichards19.com/wp-content/uploads/sites/10/2012/10/136526706-100x100.jpg"
const placeHardenImg = "http://sba.today/forums/uploads/profile/photo-thumb-1449.jpg"


const genImg = "http://www.web.uniport.pro/user/30641/534/53431846.png"
const retinaImg = "http://philboxing.com/news/pix/harden.200x200.jpg"

module.exports = ({ storiesOf, action }) => {
   storiesOf('Avatar', module)
    .add('Комбинации', () => {
      return <div>
        <Avatar 
          img={placeHardenImg} 
          alt="Баскетбол, Хьюстон, Харден" 
          title="Hello, world!" 
          radius="100%" 
          online={true} 
          admin={true}  
        />
        <Avatar img={placeHardenImg} filter="grayscale" radius="100%"  />
        <Avatar img={placeStepanImg} radius="100%" online={true} border="#32CD32"  />
        <Avatar img={placeHardenImg} radius="100%" admin={true} border="#6495ED"  />
        <Avatar img={placehoderImg} radius="100%" online={true} border="#aaa"  />
        <Avatar img={placeHardenImg} radius="30%" filter="blur" />
        <Avatar img={placeHardenImg} radius="10px" boxshadow={true} filter="contrast" />
        <Avatar img={placeHardenImg} radius="10px" boxshadow={true} admin={true} filter="brightness" />
        <Avatar img={placeStepanImg} radius="25px" online={true} admin={true} border="#32CD32"  />
        <Avatar img={placeStepanImg} radius="100%" boxshadow={true} online={true} border="#32CD32"  />
      </div>
    })
    .add("Placeholder", () => {
      return <div>
        <Avatar img={placehoderImg} radius="100%"/>
      </div>
    })
    .add("Бейджи", () => {
      return <div>
        <Avatar img={placehoderImg} radius="100%" admin={true} />
        <Avatar img={placeHardenImg} radius="100%" online={true} />
        <Avatar img={placeStepanImg} radius="100%" online={true} admin={true} />
      </div>
    })
    .add("Ретина", () => {
      return <div>
        <Avatar img={genImg} img2={retinaImg} />
      </div>
    })
    .add("Фильтры", () => {
      return <div>
        <Avatar img={placeStepanImg} filter="grayscale" />
        <Avatar img={placeStepanImg} radius="50%" filter="sepia" /> 
        <Avatar img={placeStepanImg} filter="brightness" />
        <Avatar img={placeStepanImg} filter="contrast" />
        <Avatar img={placeStepanImg} filter="blur" />
      </div>
    })
    .add("Тени", () => {
      return <div>
        <Avatar img={placehoderImg} radius="100%" />
        <Avatar img={placehoderImg} radius="100%" boxshadow={true} />
        <Avatar img={placehoderImg} radius="100%" boxshadow={true} />
      </div>
    })
    .add("Форма", () => {
      return <div>
        <Avatar img={placeStepanImg} />
        <Avatar img={placeHardenImg} radius="50%" />
        <Avatar img={placeHardenImg} radius="40%" />
        <Avatar img={placeHardenImg} radius="30%" />
        <Avatar img={placeHardenImg} radius="10px" />
      </div>
    })
    
    return storiesOf;
}
