import React from "react";

import { Paper } from "@material-ui/core";

import styles from "./footer.module.css";

export default function footer() {
	return (
		<Paper className={styles.footer}>
			&#169;copyright by Ahas Eko Septianto
		</Paper>
	);
}
