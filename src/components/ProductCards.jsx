import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function ProductCards(props) {
    var button1 = 'Eliminar';
    var button2 = 'Agregar carrito';

    var [selectedIds, setSelectedIds] = useState([]);

    var agregarProductoCarro = (id) => {
      if (!selectedIds.includes(id)) {
        setSelectedIds([...selectedIds, id]);
      }
    };

    var eliminarProductoCarro = (id) => {
        if (selectedIds.includes(id)) {
            selectedIds = selectedIds.filter(producto => producto.id !== id);
        }
      };
  

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.srcImage} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.Descripcion}
        </Card.Text>
        <Button onClick={() => agregarProductoCarro(props.key)} variant="primary">{button1}</Button>
        <Button onClick={() => eliminarProductoCarro(props.key)} variant="primary">{button2}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCards;