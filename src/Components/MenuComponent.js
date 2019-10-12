import React, {Component} from 'react';
import DishDetail from './DishdetailComponent';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // cleared out the state by lifting the state
            selectedDish: null // will notify the user which dish is selected
        }
        console.log("Menu Constructor Created");
    }
    selectDish = (dish) => {
        // let dishName = event.name;
        this.setState({
            selectedDish: dish
            // set the name of the dish to the state
        })
        console.log(this.state)
    }
    componentDidMount() {
        console.log("Component did mount Called");
    }

    render() {
        const menu = this.props.dishes.map((dish, index) => {
            return(
                <div key={index} className="col-12 col-md-4 m-1">
                    <h1>dish</h1>
                    <h5>price {dish.price}</h5>
                    <Card tag="li" onClick={() => this.selectDish(dish)}>
                        <CardImg width={"100%"} src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle heading> {dish.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return(
            <div className="container">
                <div className="row">
                    {menu}
                    <div className="col-12 col-sm-12 col-md-8 m-1">
                        <DishDetail dish={(this.state.selectedDish)}></DishDetail>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Menu;