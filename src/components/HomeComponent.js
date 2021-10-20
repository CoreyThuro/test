import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//note: add breakpoint to cards so they scale down
//instead of repositioning into a column as
//they now do

//reposition card titles above card images
const eCardStyle = {
  height: 202
}

const imgStyle = {
  width: 500
}

class Home extends Component {
 
  render() {
    return (
      <div className="container">
        <div id="card_deck" className="row">
          <div className=" col-sm-4 col-md m-1">
            <Link className="link" to="/book">
              <Card>
                <CardBody>
                  <CardTitle>Books</CardTitle>
                  <CardImg
                    src="./assets/images/books.png"
                    alt="picture of books"
                  />
                  <CardText>
                    A wide, ever-changing assortment of used books.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="col-sm-4 col-md m-1">
            <Link className="link" to="/book">
              <Card>
                <CardBody>
                  <CardTitle>Clothes</CardTitle>
                  <CardImg
                    src="./assets/images/clothes.png"
                    alt="picture of clothes"
                  />
                  <CardText>
                    Clothing options for any style size or occasion.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
          <div className="col-sm-4 col-md m-1">
            <Link className="link" to="/book">
              <Card>
                <CardBody>
                  <CardTitle>Electronics</CardTitle>
                  <CardImg
                    style={eCardStyle}
                    src="/assets/images/electronics.png"
                    alt="picture of electronics"
                  />
                  <CardText>
                    Laptops, phones, keyboards, headphones, microwaves, fans,
                    and other utilities.
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>

        <div id="img-row" className="row">
          <div className="col">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            facere assumenda repudiandae incidunt dolorem cumque quod a quis
            neque? Cumque non nulla nostrum eum ipsam perspiciatis repellendus
            voluptates aspernatur repellat. Animi laudantium suscipit quaerat
            quibusdam, voluptatum similique aut illo dolorum quidem corrupti sit
            quasi unde laborum obcaecati dicta eos placeat assumenda est
            sapiente odit, porro quod reiciendis tempore vero. Totam. Quasi
            asperiores nemo dolor, incidunt aperiam non quas atque, molestias
            tenetur nobis eum ex delectus similique sed? Quas quam voluptates
            eius. Autem ab dicta necessitatibus ea quos modi exercitationem.
            Tempora!
          </div>
          <div className="col">
            <img
              src="./assets/images/Historic Druid Heights (1).jpg"
              alt="Druid Heights mural"
              style={imgStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default Home;