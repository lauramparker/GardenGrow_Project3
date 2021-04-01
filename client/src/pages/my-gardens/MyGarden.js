/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../../utils/API";
import Loading from '../../components/Loading';
import { ListGroup, Item } from "../../components/ListGroup";


function MyGarden() {

  const [gardens, setGardens] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    loadGardens()
  }, []);

  function loadGardens() {
    API.getUser(user.email)
    .then((res) => {
      return setGardens(res.data[0].gardens)
    })
    .catch(err => console.log(err))
  }

  function handleDelete(event) {
    const id = event.currentTarget.value
    API.deleteGarden(id)
      .then(() => loadGardens())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>

            <h3>My Gardens </h3>

            <ListGroup>
              {gardens.map(garden => (
                <Item
                  key={garden._id}
                  garden={garden}
                  handleDelete={handleDelete}
                >
                </Item>
              ))}
            </ListGroup>

          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default withAuthenticationRequired(MyGarden, {
  onRedirecting: () => <Loading />,
});

