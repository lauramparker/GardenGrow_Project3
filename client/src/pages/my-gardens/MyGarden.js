/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import API from "../../utils/API";
import Loading from "../../components/Loading";
import { ListGroup, Item } from "../../components/ListGroup";
// import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";

function MyGarden() {
  const [gardens, setGardens] = useState([]); //user specific gardens, not releated to overall garden state
  const { user } = useAuth0();
  const history = useHistory();

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
    console.log(event.currentTarget)
    API.deleteGarden(id)
      .then(() => loadGardens())
      .catch((err) => console.log(err));
  }

  function handleRedirect(e) {
    const id = e.currentTarget.dataset.id;
    console.log(id);
    history.push("/Garden/" + id);
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
                handleRedirect={handleRedirect}
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
