import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./app.css";
import NumberFormat from "react-number-format";

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const App = () => {
	const [latest, setLatest] = useState("");
	const [federalLatest, federalsetLatest] = useState("");

	useEffect(() => {
		axios
			.get("https://covidtracking.com/api/states/")
			.then((res) => {
				setLatest(res.data[37]);

				axios
					.get("http://covidtracking.com/api/us")
					.then((res) => {
						federalsetLatest(res.data[0]);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="out-div">
			<Container>
				<h2>Covid-19: Status of Oregon</h2>>
				<Row>
					<Col>
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/2000px-Flag_of_Oregon.svg.png" />
					</Col>
				</Row>
				<Row>
					<CardDeck style={{ margin: "50px" }}>
						<Col xs={6}>
							<Card bg="secondary" text="white" style={{ margin: "10px" }}>
								<Card.Header>Cases</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={latest.positive}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card
								bg="danger"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Deaths</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={latest.death}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6}>
							<Card
								bg="success"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Recovered</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={latest.recovered}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6}>
							<Card
								bg="info"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Currently Hospitalized</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={latest.hospitalizedCurrently}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					</CardDeck>
				</Row>
			</Container>
			<Container>
				<h2>Covid-19: Status of United State</h2>>
				<Row>
					<Col>
						<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" />
					</Col>
				</Row>
				<Row>
					<CardDeck style={{ margin: "50px" }}>
						<Col xs={6}>
							<Card bg="secondary" text="white" style={{ margin: "10px" }}>
								<Card.Header>Total tested results</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={federalLatest.totalTestResults}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card
								bg="danger"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Total tested positives</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={federalLatest.positive}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6}>
							<Card
								bg="success"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Total tested negatives</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={federalLatest.negative}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6}>
							<Card
								bg="info"
								text="white"
								className="text=center"
								style={{ margin: "10px" }}
							>
								<Card.Header>Total test pending</Card.Header>
								<Card.Body>
									<Card.Title>
										<NumberFormat
											value={federalLatest.pending}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"Total: "}
										/>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					</CardDeck>
				</Row>
			</Container>
		</div>
	);
};

export default App;
