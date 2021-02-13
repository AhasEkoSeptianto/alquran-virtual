import { Component, Fragment } from "react";
import { Grid, Paper } from "@material-ui/core";

// components
import Footer from "./../components/footer.js";

// mycss
import styles from "./../asset/css/about.module.css";

// image
import ref from "./../asset/image/ref1.png";

class about extends Component {
	showImg() {}

	render() {
		document.title = "about";
		return (
			<Fragment>
				<Grid container spacing={0}>
					<Paper className={styles.container_about}>
						<h1>About</h1>
						<p>
							aplikasi website ini adalah SPA sekaligus aplikasi
							tentang Al-Quran dimana memudahkan user ketika ingin
							membaca Qur'an secara virtual, dalam pembuatan
							website ini saya menggunakan API dari{" "}
							<a href="https://alquran.cloud/api">
								"alquran.clud"
							</a>
							, dengan memanipulasi cara kerja dalam pemilihan juz
							dan surah serta ayatnya.
						</p>
						<p>
							Website SPA ini saya buat dengan teknologi React Js,
							material-ui, Css module dan Axios sebagai pengambil
							API,dan website ini mendukung responsive pada device
							handphone dan desktop, pada mulanya saya mendapatkan
							ide ini dari teman dan referensi desain dari gambar
							berikut
						</p>
						<a href="/image/ref1.png" target="_blank">
							<img
								src={ref}
								alt="referensi website ini"
								className={styles.image}
							/>
						</a>
						<p>
							meskipun sedikit berbeda karena agak kabur sehingga
							tidak jelas gambarnya,
						</p>
						<p>
							kesulitan saya membuat aplikasi ini adalah pada
							awalnya sedikit bingung ketika mengambil array dari
							suatu object tetapi saya dapat memecahkan masalahnya
							dalam waktu singkat
						</p>
					</Paper>
				</Grid>
				<Footer />
			</Fragment>
		);
	}
}

export default about;
