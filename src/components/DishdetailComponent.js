import React from 'react';
import { Card,CardBody,CardImg,CardTitle,CardText,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link } from 'react-router-dom';

function RenderDish({dish}) {
    if (dish != null)
        return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
        );
    else
        return(
            <div></div>
        );
    }
    function RenderComments({comments}){
        if(comments==null){
            return(<div></div>)
        }
        const cmnts = comments.map(comment => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <ul className="list-unstyled">
                    {cmnts}
                </ul>
            </div>
        )
    }
    const DishDetail=(props)=>{
        console.log("Dishdetail functional Component invoked!!");
        if(props.dish == null){
            console.log("No dish invoked!!");
            return(<div></div>);
        }        
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
            </div>
            </div>
        );
    };


export default DishDetail;