import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Box, Paper, Tabs, Tab, SvgIcon } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import logoNav from "./../asset/image/alquran-logo.png";
import s from "./navbar.module.css";

import Home from "./../pages/home.js";
import About from "./../pages/about.js";
import Quran from "./../pages/quran.js";

export default function navbar() {
	const [value, setValue] = react.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const togleOpen = () => {
		document
			.getElementById("menu_hp")
			.setAttribute(
				"style",
				"width:100%;height:" +
					document.documentElement.scrollHeight +
					"px"
			);
	};
	const togleClose = () => {
		document
			.getElementById("menu_hp")
			.setAttribute(
				"style",
				"width:0%;height:" +
					document.documentElement.scrollHeight +
					"px"
			);
	};

	return (
		<Router>
			<Box className={s.container_navbar}>
				<Container fixed>
					<Box className={s.navbar}>
						<Paper className={s.navbar_desktop}>
							<img
								src={logoNav}
								className={s.logoNav}
								alt="logo-quran"
							/>
						</Paper>
						<Paper className={s.navbar_menu}>
							<Tabs
								value={value}
								indicatorColor="primary"
								textColor="primary"
								onChange={handleChange}
								aria-label="disabled tabs example"
							>
								<Tab label="Home" component={Link} to={"/"} />
								<Tab
									label="About"
									component={Link}
									to={"/about"}
								/>
								<Tab
									label="Qur'an"
									component={Link}
									to={"/quran"}
									id="getStarted"
								/>
							</Tabs>
						</Paper>
						<div className={s.togle_hp} onClick={togleOpen}>
							<SvgIcon
								component={DehazeIcon}
								style={{ fontSize: 30 }}
							/>
						</div>
						<div className={s.togle_hp_menu} id="menu_hp">
							<ul>
								<li
									key={"1"}
									className={s.togle_hp_btn}
									onClick={togleClose}
								>
									<SvgIcon
										component={ArrowForwardIosIcon}
										style={{ fontSize: 30 }}
									/>
								</li>
								<Link to="/" className={s.href_line}>
									<li
										key={"2"}
										className={s.togle_hp_li}
										onClick={togleClose}
									>
										Home
									</li>
								</Link>
								<Link to="/about">
									<li
										key={"3"}
										className={s.togle_hp_li}
										onClick={togleClose}
									>
										About
									</li>
								</Link>
								<Link to="/quran">
									<li
										className={s.togle_hp_li}
										onClick={togleClose}
									>
										Quran
									</li>
								</Link>
							</ul>
						</div>
					</Box>
				</Container>
			</Box>

			<Switch>
				<Route exact path="/" componenct={Home}>
					{" "}
					<Home />
				</Route>
				<Route exact path="/about" componenct={About}>
					<About />
				</Route>
				<Route exact path="/quran" componenct={Quran}>
					<Quran />
				</Route>
			</Switch>
		</Router>
	);
}
