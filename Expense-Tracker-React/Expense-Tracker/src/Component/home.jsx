import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';

const HomePage = () => {
    // Define animation for welcome message
    const welcomeAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }
    });

    return (
        <div>
            <Container className="mt-5">
                <Row className="align-items-center">
                    <Col md={6}>
                        {/* Image on the left side */}
                        <img src="https://moneyview.in/images/blog/wp-content/uploads/2017/10/Blog-what-is-exp-manager.jpg" alt="Expense Tracker" className="img-fluid rounded" />
                    </Col>
                    <Col md={6}>
                        {/* Welcome message with animation */}
                        <animated.div style={welcomeAnimation}>
                            <h1 className="text-center mb-4">Welcome to Expense Tracker</h1>
                            <p className="text-center mb-4">Track and manage your expenses easily with our app!</p>
                        </animated.div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {/* Cards for different expense categories */}
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Food</Card.Title>
                                <Card.Text>
                                    Record your food expenses here. This includes groceries, dining out, and snacks.
                                </Card.Text>
                                <Button variant="primary" href="/food">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Food</Card.Title>
                                <Card.Text>
                                    Record your food expenses here. This includes groceries, dining out, and snacks.
                                </Card.Text>
                                <Button variant="primary" href="/food">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Food</Card.Title>
                                <Card.Text>
                                    Record your food expenses here. This includes groceries, dining out, and snacks.
                                </Card.Text>
                                <Button variant="primary" href="/food">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Food</Card.Title>
                                <Card.Text>
                                    Record your food expenses here. This includes groceries, dining out, and snacks.
                                </Card.Text>
                                <Button variant="primary" href="/food">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Other columns for different expense categories */}
                </Row>
                <Row className="justify-content-center mt-5">
                    {/* Login and Register buttons */}
                    <Col md={6} className="text-center">
                        <Button variant="primary" href="/login" className="mr-3">Login</Button>
                        <Button variant="success" href="/register">Register</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
