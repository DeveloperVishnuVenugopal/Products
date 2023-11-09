import React, { useEffect, useState } from "react";
import { Row, Col , Card, Button} from "react-bootstrap";


function Products() {
  const [allProducts,setAllProducts] = useState([]);

    const fetchProducts =()=>{
        fetch('https://api.denzo.io/api/cus/v1/products?page=1').then(result=>result.json()).then(res=>setAllProducts(res))
    }
    console.log(allProducts);
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
   <>
       <div style={{marginLeft:'500px', marginTop:'100px'}}>
         <div className="container-fluid" style={{ alignItems: "center" }}>
          <h3>Canteen</h3>
           <div className="allitems d-flex">
             <div className="d-flex">
               <img style={{width:'70px'}} src="https://somethingiscooking.com/wp-content/uploads/2019/04/parippu-vada-2.jpg" alt="" />
             </div>
            <div>
              <h5>Parippuvada</h5>
              <p>₹ 15</p>
             
           </div>
            <span className='badge bg-primary text-dark pills ms-1 mt-3 mb-5 p-2'>
            1
           </span>
           
           </div>
         </div>
       </div>
  {/* ------------------------------------------------------ */}
      <div style={{ marginTop: "100px" }} className="container-fluid">
      <Row>
      {allProducts && allProducts.map(item=>(
        <Col className="mb-3" sm={12} md={6} lg={4} xl={3}>
          <Card className="p-3 text-center" style={{ width: "18rem" ,height:'500px'}}>
            <Card.Img height={'300px'} variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                ₹<span style={{color:'red'}}>{item.price}</span>
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>    
      ))}
            
        
      </Row>
    </div>
   </>
  );
}

export default Products;
