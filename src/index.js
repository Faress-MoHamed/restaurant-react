import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header></Header>
			<Menu></Menu>
			<Footer></Footer>
		</div>
	);
}
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menue</h2>

			<ul className="pizzas">
				{pizzaData.map((el) => {
					return <Pizza pizzaObj={el} key={Pizza.name}></Pizza>;
				})}
			</ul>
			{/* <Pizza
				name="pizza spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="./pizzas/spinaci.jpg"
				price={10}
			></Pizza> */}
		</main>
	);
}
function Pizza({ pizzaObj }) {
	console.log();

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
			</div>
		</li>
	);
	{
		// {
		// 	pizzaObj.soldOut ? (
		// 		<span> Sold Out</span>
		// 	) : (
		// 		<span> {pizzaObj.price}</span>
		// 	);
		// }
	}
}

function Header() {
	const style = {};
	return (
		<header className="header">
			<h1 style={style}>Fast React pizza Co.</h1>
		</header>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const OpenHour = 12;
	const CloseHour = 22;
	const isOpen = hour >= OpenHour && hour <= CloseHour;

	// if (hour >= OpenHour && hour <= CloseHour) alert("we're currently open");
	// else alert("sorry we're closed");
	return (
		<footer className="footer">
			{isOpen ? (
				<Order CloseHours={CloseHour}></Order>
			) : (
				<p>
					we're happy to welcome you between {OpenHour}:00 and {CloseHour}:00.
				</p>
			)}
		</footer>
	);
}
function Order(props) {
	return (
		<div className="order">
			<p>
				we're open until {props.CloseHours}:00. come visit us or order online.
			</p>
			<button className="btn">oreder</button>
		</div>
	);
}

const root = createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
