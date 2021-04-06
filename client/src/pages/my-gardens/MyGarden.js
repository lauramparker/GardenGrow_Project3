/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../../utils/API";
import Loading from "../../components/Loading";
import { ListGroup, Item } from "../../components/ListGroup";
import Footer from "../../components/Footer";

function MyGarden() {
  const [gardens, setGardens] = useState([]); //user specific gardens, not releated to overall garden state
  const { user } = useAuth0();

  useEffect(() => {
    loadGardens();
  }, []);

  function loadGardens() {
    console.log(user);
    API.getGardens()
      .then((res) => {
        setGardens(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(event) {
    const id = event.currentTarget.value;
    API.deleteGarden(id)
      .then(() => loadGardens())
      .catch((err) => console.log(err));
  }

  return (
    <Container style={{ minHeight: "100%" }} >
      <Row>
        <Col>
          <h3>My Gardens </h3>
          <ListGroup>
            {gardens.map((garden) => (
              <Item
                key={garden._id}
                garden={garden}
                handleDelete={handleDelete}
              ></Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      {/* <div>
      <Footer/>
      </div> */}
    </Container>
  );
}

export default withAuthenticationRequired(MyGarden, {
  onRedirecting: () => <Loading />,
});
