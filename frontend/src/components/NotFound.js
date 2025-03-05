import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="text-danger">404 - Page Not Found</h1>
      <p className="text-muted">Sorry, the page you are looking for does not exist.</p>
      <img 
        src="https://comodosslstore.com/blog/wp-content/uploads/2024/01/website-page-found-error-robot-character-broken-chatbot-mascot-disabled-site-technical-work_502272-1888.jpg" 
        alt="Not Found" 
        className="img-fluid my-4"
        width={300}
      />
      <Button variant="warning" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;

