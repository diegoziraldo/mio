import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
const PresupuestosArmados = () => {
    const electronicProducts = [
        { name: 'Circuito integrado', price: 50 },
        { name: 'Pantalla LCD', price: 30 },
        { name: 'Conector de alimentación', price: 10 },
      ];
    
      const laborCost = 100;
      const shippingCost = 20;
    
      const totalCost = electronicProducts.reduce((total, product) => total + product.price, 0) + laborCost + shippingCost;
    
      return (
        <Card className="quote-card">
        <Card.Header as="h2">Presupuesto de Reparación de Sintetizador</Card.Header>
        <Card.Body>
          <Card.Title>Productos Electrónicos</Card.Title>
          <ListGroup variant="flush">
            {electronicProducts.map((product, index) => (
              <ListGroup.Item key={index}>
                <span className="product-name">{product.name}</span>
                <span className="product-price">${product.price}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Card.Text>
            <span className="cost-description">Costo de la mano de obra:</span>
            <span className="cost-value">${laborCost}</span>
          </Card.Text>
          <Card.Text>
            <span className="cost-description">Costo de envío del sintetizador:</span>
            <span className="cost-value">${shippingCost}</span>
          </Card.Text>
          <Card.Text className="total-cost">
            Total: ${totalCost}
          </Card.Text>
        </Card.Footer>
      </Card>
      );
    };
    
    
    
    
    
    
    
    export default PresupuestosArmados;