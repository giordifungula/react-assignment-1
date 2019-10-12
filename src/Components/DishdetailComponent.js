import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';


export class DishDetail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // empty state
        }
    }


    render(){
       let comments;
       let renderComments = (dish) => {
            comments = dish.comments.map((comment, index) => {
           return( 
            //    <div className="cards">
                <Card className="col-12 col-sm-12 col-md-3 m-1 box">
                    <h4>Comments</h4>
                    <CardBody key={index}>
                        <CardText>{comment.comment}</CardText>
                        <CardTitle>--{comment.author}, {comment.date}</CardTitle> 
                    </CardBody>                   
                </Card>
                // </div>
           );
           })
       }
       let dish = this.props.dish;
        if(dish){
            renderComments(dish);
            return( 
                <div className="flex">
                    <Card className="col-12 col-sm-12 col-md-5 m-1">
                        <CardImg width={"100%"} src={dish.image} alt={dish.image}></CardImg> 
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle> 
                            <CardText>{dish.description}</CardText>
                        </CardBody>                   
                    </Card>
                    {comments}
                </div> 
                )
        } else {
            return <div></div>
        }
        
    }

}

export default DishDetail;