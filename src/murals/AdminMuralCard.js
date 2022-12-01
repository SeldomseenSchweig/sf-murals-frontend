import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardText 
} from 'reactstrap';



const AdminMuralCard = ({values}) =>{
    

    

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(e.nativeEvent.submitter.name==='deny'){
            values.deny(values.id)
            
        }
        if(e.nativeEvent.submitter.name==='approve'){
            values.approve({id:values.id,artist:values.artist,address:values.muralAddress,img:values.img})
            
        }
        
        
    
        
        
    }



            return(
                <form onSubmit={handleSubmit}>
                < Card 
                                className="my-2"
                                color="primary"
                                
                                outline
                                style={{
                                color:"red" ,
                                borderColor:"black",
                                borderWidth:"medium",
                                borderStyle:'solid',
                                width: "50%",
                                margin:" 10px "
                                }} >
                            <CardHeader>
                                {values.title}
                            </CardHeader>
                            <CardBody>
                            
                                <CardText> Artist {values.artist}</CardText>
                                <CardText> Address {values.muralAddress} </CardText>
                                <img alt={`Mural by ${values.artist}`} src={values.img} style={{maxWidth:'100%'}}/>
                            </CardBody>
                            
                            </Card>
                            <button name='deny'> Deny</button>
                            <button name='approve'> Approve</button>
            </form>




            )
        }
    

        export default AdminMuralCard;


 