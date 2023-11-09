import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productdetails() {
 
  return (
    <div className='d-flex  justify-content-center flex-wrap' >
    <div className='col-md-4'>
        
       <Card style={{ width: '18rem' }} className='text-center m-5'>
       <h4>Details</h4>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Parippuvada</Card.Title>
        <Card.Text>$ 15</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    </div>
    </div>

      
    
  )
}

export default Productdetails