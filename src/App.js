import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
	const [latest, setLatest] = useState("");
	useEffect(() => {
		axios
			.get("https://covidtracking.com/api/states/")
			.then((res) => {
				setLatest(res.data[37]);
				console.log(res.data[37]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<CardDeck>
				<Card
					bg="secondary"
					text="white"
					className="text=center"
					style={{ margin: "10px" }}
				>
					<Card.Img variant="top" src="holder.js/100px" />
					<Card.Body>
						<Card.Title>Cases</Card.Title>
						<Card.Text>{latest.positive} </Card.Text>
					</Card.Body>
				</Card>
				<Card
					bg="secondary"
					text="white"
					className="text=center"
					style={{ margin: "10px" }}
				>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Deaths</Card.Title>
						<Card.Text>{latest.death}</Card.Text>
					</Card.Body>
				</Card>
				<Card
					bg="secondary"
					text="white"
					className="text=center"
					style={{ margin: "10px" }}
				>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Recovered</Card.Title>
						<Card.Text>{latest.recovered}</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
		</div>
	);
}

export default App;
