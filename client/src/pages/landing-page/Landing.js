import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../../components/Loading";
import API from "../../utils/API";
import Form from "../../components/Form";
import "./Landing.css";




function Landing() {

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
      sub: user.sub
    }).then((data) => {
      console.log("user created", data);
      localStorage.setItem("user", data._id);
    });
  }

  return (
      <Container >
        <Form />
        <Row />
        <Col />
      </ Container>
  );
}

export default withAuthenticationRequired(Landing, {
  onRedirecting: () => <Loading />,
});
