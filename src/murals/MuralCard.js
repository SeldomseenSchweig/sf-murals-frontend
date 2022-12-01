import React from 'react'
import { 

    CardBody, 
    CardText 
} from 'reactstrap';



const MuralCard = ({values}) =>{
            return(
                <div className='flip-card' >
                < div 
                                className="my-2 flip-card-inner "
                                
                                
                                style={{
                                
                                margin:" 10px "}}>

                            <CardBody className='flip-card-back'>
                            
                                <CardText> Artist {values.artist}</CardText>
                            

                                <CardText> Year Painted {values.year} </CardText>
                                <CardText> Address {values.muralAddress} </CardText>
                                <CardText> Neighborhood {values.neighborhood} </CardText>
                               


                                
                                
                            </CardBody>
                          
                            <CardBody className='flip-card-front'>
                            <img alt={`Mural by ${values.artist}`} src={values.img} style={{maxWidth:'100%'}}/>

                            </CardBody>

                            </div>

            </div>

                            



            )
        }
    

        export default MuralCard;



       