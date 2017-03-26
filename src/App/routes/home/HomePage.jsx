import React from 'react';
import importcss from 'importcss';
import {
  Card,
  CardBlock,
  CardFooter,
  CardTitle,
  CardText,
} from 'reactstrap';
import {
  Grid,
  Row,
  Col,
  Button,
  Tabs,
  Tab,
} from 'react-bootstrap';

import Component from 'lsk-general/General/Component';
import Slide from 'lsk-general/General/Slide';
import A from 'lsk-general/General/A';
import Avatar from '../../components/Avatar/Avatar.jsx';
import StatusButton from '../../components/StatusButton/Button.jsx'

const placehoderImg = "http://dandelion-forum.48353.x6.nabble.com/file/a183/avatar100.png"
const placeStepanImg ="http://www.brichards19.com/wp-content/uploads/sites/10/2012/10/136526706-100x100.jpg"
const placeHardenImg = "http://sba.today/forums/uploads/profile/photo-thumb-1449.jpg"


const genImg = "http://www.web.uniport.pro/user/30641/534/53431846.png"
const retinaImg = "http://philboxing.com/news/pix/harden.200x200.jpg"

@importcss(require('./HomePage.css'))
export default class HomePage extends Component {

  onClick = (e) => {
    return new Promise( (resolve, reject) => {
      setTimeout( resolve, 2000 )
    })
  }

  onClick2 = (e) => {
    return new Promise( (resolve, reject) => {
      setTimeout( reject, 2000 )
    })
  }
  
  render() {
    return (
      <Slide
        full
        video="http://skill-branch.ru/video-background.webm"
        overlay
      >
        <Grid>
          <Row>
            <Col md={9} mdOffset={2}>
              <Card>
                <CardBlock>
                  <CardTitle>
                    Avatar
                  </CardTitle>
                   <Tabs id="controlled-tab-example">
                       <Tab eventKey={0} title="Комбинации">
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
                      </Tab>
                      <Tab eventKey={1} title="Placeholder">
                        <Avatar img={placehoderImg} radius="100%"/>
                      </Tab>
                      <Tab eventKey={2} title="Бейджи">
                        <Avatar img={placehoderImg} radius="100%" admin={true} />
                        <Avatar img={placeHardenImg} radius="100%" online={true} />
                        <Avatar img={placeStepanImg} radius="100%" online={true} admin={true} />
                      </Tab>
                      <Tab eventKey={3} title="Ретина">
                        <Avatar img={genImg} img2={retinaImg} />
                      </Tab>
                      <Tab eventKey={4} title="Фильтры">
                        <Avatar img={placeStepanImg} filter="grayscale" />
                        <Avatar img={placeStepanImg} radius="50%" filter="sepia" /> 
                        <Avatar img={placeStepanImg} filter="brightness" />
                        <Avatar img={placeStepanImg} filter="contrast" />
                        <Avatar img={placeStepanImg} filter="blur" />
                      </Tab>
                      <Tab eventKey={5} title="Тени">
                        <Avatar img={placehoderImg} radius="100%" />
                        <Avatar img={placehoderImg} radius="100%" boxshadow={true} />
                        <Avatar img={placehoderImg} radius="100%" boxshadow={true} />
                      </Tab>
                      <Tab eventKey={6} title="Рамка">
                        <Avatar img={placeStepanImg} border="#aaa" />
                        <Avatar img={placeStepanImg} border="#32CD32" />
                        <Avatar img={placeStepanImg} border="#6495ED" />
                        <Avatar img={placeStepanImg} border="#FF1493" />
                      </Tab>
                      <Tab eventKey={7} title="Форма">
                        <Avatar img={placeStepanImg} />
                        <Avatar img={placeHardenImg} radius="50%" />
                        <Avatar img={placeHardenImg} radius="40%" />
                        <Avatar img={placeHardenImg} radius="30%" />
                        <Avatar img={placeHardenImg} radius="10px" />
                      </Tab>
                   </Tabs>
                </CardBlock>
                <CardFooter className="text-xs-center">
                    2017 Avatar Test Project
                </CardFooter>
              </Card>
            </Col>
            <Col md={9} mdOffset={2}>
              <Card>
                <CardBlock>
                  <CardTitle>
                    Status Button
                  </CardTitle>
                  <Tabs id="controlled-tab-example">
                      <Tab eventKey={1} title="Success Response">
                        <StatusButton title="Заказать со скидкой" onClick={this.onClick} />
                      </Tab>
                      <Tab eventKey={2} title="Error Response">
                        <StatusButton title="Заказать со скидкой" onClick={this.onClick2} />
                      </Tab>
                      <Tab eventKey={3} title="Success State">
                        <StatusButton title="Заказать со скидкой" status="success" />
                      </Tab>
                      <Tab eventKey={4} title="Loading State">
                        <StatusButton title="Заказать со скидкой" status="loading" />
                      </Tab>
                      <Tab eventKey={5} title="Error State">
                        <StatusButton title="Заказать со скидкой" status="error" />
                      </Tab>
                   </Tabs>
                </CardBlock>
                <CardFooter className="text-xs-center">
                   2017 Status Button Test Project
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Slide>
    );
  }
}
