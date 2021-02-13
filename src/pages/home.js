import { Component, Fragment } from "react";
import { Grid, Button } from "@material-ui/core/";

// components
import Footer from "./../components/footer.js";

// import image
import imgQuotes from "./../asset/image/quotes.png";
import imgNgaji from "./../asset/image/edit_2.png";
import imgNgaji2 from "./../asset/image/gambar2_edit.png";

// import css
import styles from "./../asset/css/home.module.css";

class home extends Component {
	getStarted() {
		document.getElementById("getStarted").click();
	}

	render() {
		document.title = "Home";
		return (
			<Fragment>
				<Grid container spacing={0}>
					{/* jumbotron */}
					<Grid item sm={6}>
						<div className={styles.container_image}>
							<img
								src={imgQuotes}
								alt="logo-quotes"
								className={styles.image_quote}
							/>
							<h5 className={styles.header_quote_arab}>
								خيركم من يتعلم القرآن ويعلمه.
							</h5>
							<h1 className={styles.header_quote_english}>
								the best amongs you is the one who learns the
								Qur'an and teaches it.
							</h1>
							<Button
								variant="contained"
								color="primary"
								className={styles.header_button}
								onClick={this.getStarted}
							>
								Start Reading
							</Button>
						</div>
					</Grid>
					<Grid item sm={6}>
						<div className={styles.right}>
							<div className={styles.bingkaiImage}>
								<div className={styles.backgroundImage}></div>
							</div>
							<img
								src={imgNgaji}
								className={styles.photoImage}
								alt="ngaji"
							/>
							<div className={styles.backgroundColor}></div>
							<div className={styles.borderBackground}></div>
						</div>
					</Grid>
					{/* End Jumbotron */}
				</Grid>

				<div className={styles.welcome_text}>
					<Grid container spacing={0}>
						{/* welcome say */}
						<Grid item sm={6}>
							<div className={styles.container_bottom_img}>
								<div className={styles.bingkaiImageBoth}></div>
								<img
									src={imgNgaji2}
									className={styles.photoImageBoth}
									alt="ngaji2"
								/>
							</div>
						</Grid>
						<Grid item sm={6}>
							<div className={styles.container_text_footer}>
								<div className={styles.writeText}>
									<h1 className={styles.padding_phone}>
										Welcome to us
									</h1>
									<h1
										className={`${styles.h1_welcome} ${styles.padding_phone}`}
									>
										Learn Quran in an Interactive way
									</h1>
									<p
										className={`${styles.p_welcome} ${styles.padding_phone}`}
									>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy es, and more recently with desktop
										publishing software like Aldus PageMaker
										including versions of Lorem Ipsum.
									</p>
								</div>
							</div>
						</Grid>
						{/* End welcome say */}
					</Grid>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

export default home;
