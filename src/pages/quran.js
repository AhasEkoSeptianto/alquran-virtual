import { Component, Fragment } from "react";
import {
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Button,
	TextField,
	Paper,
	FormControlLabel,
	Switch,
	CircularProgress,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

// componen
import Footer from "./../components/footer.js";

// Axios
import Axios from "axios";

// import css
import styles from "./../asset/css/quran.module.css";

class quran extends Component {
	constructor(props) {
		super(props);
		this.state = {
			db: [],
			listJuz: [],
			listSurah: [],
			listAyat: [],
			checked: true,
			nowSurah: "",
		};
	}

	// function generated number juz
	listJuzFunction() {
		var juzlist = [];
		juzlist.push({ juz: "All" });
		for (let i = 1; i < 31; i++) {
			juzlist.push({ juz: i + "" });
		}
		this.setState({ listJuz: juzlist });
		return juzlist;
	}

	// f ambil surah dari user

	fastLooping(value) {
		var changeSurah = []; // wadah object baru
		// looping untuk parent mengembalikan nilai object list quran dan ubah state list quran
		for (let i = value[0]; i <= value[1]; i++) {
			changeSurah.push({
				listSurah: this.state.db[i].englishName,
				text: this.state.db[i].name,
				number: this.state.db[i].number,
				ayat: this.state.db[i].ayahs,
			});
		}
		this.setState({ listSurah: changeSurah });
	}

	listSurahFunction(surah) {
		// jika load pertama kali maka akan diambil semua list quran nya
		if (typeof surah == "undefined") {
			surah = 0;
			var listSurah = [];
			this.state.db.map((res) =>
				listSurah.push({
					listSurah: res.englishName,
					text: res.name,
					number: res.number,
					ayat: res.ayahs,
				})
			);
			this.setState({ listSurah: listSurah });
		} else {
			// filter berdasarkan surah dari juz
			if (surah.juz === "All") {
				this.fastLooping([0, 113]);
			} else if (surah.juz === "1") {
				this.fastLooping([0, 1]);
			} else if (surah.juz === "2") {
				this.fastLooping([1, 1]);
			} else if (surah.juz === "3") {
				this.fastLooping([2, 2]);
			} else if (surah.juz === "4") {
				this.fastLooping([2, 3]);
			} else if (surah.juz === "5") {
				this.fastLooping([3, 3]);
			} else if (surah.juz === "6") {
				this.fastLooping([3, 4]);
			} else if (surah.juz === "7") {
				this.fastLooping([4, 5]);
			} else if (surah.juz === "8") {
				this.fastLooping([5, 6]);
			} else if (surah.juz === "9") {
				this.fastLooping([6, 7]);
			} else if (surah.juz === "10") {
				this.fastLooping([7, 8]);
			} else if (surah.juz === "11") {
				this.fastLooping([8, 10]);
			} else if (surah.juz === "12") {
				this.fastLooping([10, 11]);
			} else if (surah.juz === "13") {
				this.fastLooping([11, 13]);
			} else if (surah.juz === "14") {
				this.fastLooping([13, 14]);
			} else if (surah.juz === "15") {
				this.fastLooping([16, 17]);
			} else if (surah.juz === "16") {
				this.fastLooping([17, 19]);
			} else if (surah.juz === "17") {
				this.fastLooping([20, 21]);
			} else if (surah.juz === "18") {
				this.fastLooping([22, 24]);
			} else if (surah.juz === "19") {
				this.fastLooping([24, 26]);
			} else if (surah.juz === "20") {
				this.fastLooping([26, 28]);
			} else if (surah.juz === "21") {
				this.fastLooping([28, 32]);
			} else if (surah.juz === "22") {
				this.fastLooping([32, 35]);
				this.fastLooping([35, 38]);
			} else if (surah.juz === "24") {
				this.fastLooping([38, 40]);
			} else if (surah.juz === "25") {
				this.fastLooping([40, 44]);
			} else if (surah.juz === "26") {
				this.fastLooping([45, 50]);
			} else if (surah.juz === "27") {
				this.fastLooping([50, 56]);
			} else if (surah.juz === "28") {
				this.fastLooping([57, 65]);
			} else if (surah.juz === "29") {
				this.fastLooping([66, 76]);
			} else if (surah.juz === "30") {
				this.fastLooping([77, 113]);
			} else {
				this.fastLooping([0, 133]);
			}
		}
	}

	listBooks(surah) {
		if (surah === "undefined" || surah === "0") {
			surah = 0;
		}
		// get value from api
		var pageSurah = this.state.db[surah - 1].ayahs;
		var name_surah = this.state.db[surah - 1].englishName;
		this.setState({ nowSurah: this.state.db[surah - 1].number }); // definisi nomor surah sekarang
		// console.log(this.state.nowSurah);
		var ayat = pageSurah.map((res) => res.text);

		// define template
		var template = document.getElementById("ayat");
		template.innerHTML = ""; // hapus buku ketika surah diclick lagi
		ayat.forEach((i, index) => {
			template.innerHTML += i + " (" + (index + 1) + ") ";
		});

		// give name surah
		document.getElementById("judul_ayat").innerHTML = name_surah;
	}

	handleChangeSwitch = (event) => {
		this.setState({ checked: event.target.checked });

		if (this.state.checked === false) {
			document.getElementById("ayat").innerHTML = "";
			// update list buku
			this.listBooks(this.state.nowSurah);
		} else {
			document.getElementById("ayat").innerHTML = "";
			// ambil semua data
			var pageSurah = this.state.db[this.state.nowSurah - 1].ayahs;
			var name_surah = this.state.db[this.state.nowSurah - 1].englishName;
			var ayat = pageSurah.map((res) => res.text);
			this.setState({
				nowSurah: this.state.db[this.state.nowSurah - 1].number,
			}); // definisi nomor surah sekarang

			// define template
			var template = document.getElementById("ayat");
			ayat.forEach((i, index) => {
				var para = document.createElement("P");
				para.style.cssText =
					"border-top:1px solid black;border-bottom:1px solid black;";
				para.innerHTML += i + " (" + index + ")";
				template.appendChild(para);
			});

			// give name surah
			document.getElementById("judul_ayat").innerHTML = name_surah;
		}
	};

	async componentDidMount() {
		// ambil semua data api dan simpan dalam state
		var getApi = Axios.get(
			"http://api.alquran.cloud/v1/quran/quran-uthmani"
		).then((res) => {
			this.setState({ db: res.data.data.surahs });
			// setup semua db
			this.listJuzFunction();
			this.listSurahFunction();
		});

		// f untuk menampilkan loading ambil api lalu menghapus nya
		getApi.then(() => {
			try {
				document.getElementById("loadApi").remove();
			} catch (e) {
				console.log(e);
			}
		});
	}

	render() {
		document.title = "quran";
		return (
			<Fragment>
				<Container>
					<div className={styles.container_nav_quran}>
						<Autocomplete
							onChange={(event, value) =>
								this.listSurahFunction(value)
							}
							className={styles.margin_right}
							options={this.state.listJuz}
							getOptionLabel={(option) => option.juz}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Juz"
									variant="outlined"
								/>
							)}
						/>
						<Autocomplete
							className={styles.margin_right}
							options={this.state.listSurah}
							getOptionLabel={(option) => option.listSurah}
							style={{ width: 300 }}
							renderInput={(params) => (
								<TextField
									{...params}
									label="Surat"
									variant="outlined"
								/>
							)}
						/>
					</div>
					<div className={styles.loadApi} id="loadApi">
						<p>
							wait.. <CircularProgress />
						</p>
					</div>
					<Grid
						id="list-quran"
						container
						spacing={2}
						className={styles.container_list_quran}
					>
						{this.state.listSurah.map((res) => (
							<Fragment>
								<Grid item sm={2}>
									<Card>
										<CardContent>
											<span>
												{res.number}.{res.listSurah}
											</span>
										</CardContent>
										<CardContent>
											<span>{res.text}</span>
										</CardContent>
										<CardActions>
											<Button
												id={res.listSurah}
												size="small"
												color="primary"
												href="#quran"
												onClick={() => {
													this.listBooks(res.number);
												}}
											>
												Reading
											</Button>
										</CardActions>
									</Card>
								</Grid>
							</Fragment>
						))}
					</Grid>
					<Paper className={styles.container_quran} id="quran">
						<div>
							<h1 id="judul_ayat" className={styles.header_quran}>
								Select surah
							</h1>
							<FormControlLabel
								className={styles.option_quran}
								control={
									<Switch
										className={styles.option_quran}
										checked={this.state.checked}
										onChange={this.handleChangeSwitch}
										color="primary"
										value="checked"
									/>
								}
								label="Mode Buku / List"
							/>
						</div>
						<div className={styles.show_ayat} id="ayat"></div>
					</Paper>
				</Container>
				<Footer />
			</Fragment>
		);
	}
}

export default quran;
