import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
import API from "../../utils/API";
import Form from "../../components/Form";
import "./Landing.css";
// import { useHistory } from "react-router-dom";



function Landing(props) {

  // const { isLoading, error } = useAuth0();

  //     if (error) {
  //       return <div>Oops... {error.message}</div>;
  //     }

  //     if (isLoading) {
  //       return <Loading />;
  //     }

    const { user } = useAuth0();
    const loggedInUser = localStorage.getItem("user") || "";

  
    console.log("user", user);
    if (!loggedInUser) {
      API.createUser({
        lastName: user.family_name,
        firstName: user.given_name,
        userName: user.nickname,
        email: user.email,
        profilePicture: user.picture,
      }).then((data) => {
        console.log("user created", data);
        localStorage.setItem("user", data._id);
      });
    }



  return (
    <div>
      <Loading />;

      <Container >
          <Form
            props
            garden={props.garden}
            handleSubmit={props.handleSubmit}
          >
          </Form>


        <Row />
        <Col />
      </ Container>
    </div>
  );
}

export default withAuthenticationRequired(Landing, {
  onRedirecting: () => <Loading />,
});

