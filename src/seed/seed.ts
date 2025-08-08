import { postgres } from "../db/postgres.ts";

export default async function seed() {
	try {
		await postgres.connect();

		let text = `TRUNCATE TABLE USERS CASCADE;`;
		await postgres.query(text);

		await postgres.query("TRUNCATE TABLE users  RESTART IDENTITY CASCADE;");

		text = `CREATE TABLE IF NOT EXISTS USERS
		            (id SERIAL PRIMARY KEY,
		            name VARCHAR(255) NOT NULL,
		            username VARCHAR(255) NOT NULL,
		            password VARCHAR(255) NOT NULL);`;
		await postgres.query(text);

		text = `CREATE TABLE IF NOT EXISTS TASKS
                (id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                start_date VARCHAR(255) NOT NULL,
                end_date VARCHAR(255) NOT NULL,
                status VARCHAR(255) NOT NULL,
                user_id INTEGER NOT NULL,
                FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE); `;
		await postgres.query(text);

		text = `INSERT INTO users (name, username, password) VALUES ($1, $2, $3)`;
		let values = ["gibson", "gibson.cruz", "40028922"];
		await postgres.query(text, values);

		values = [
			"ler",
			new Date().toISOString(),
			new Date().toISOString(),
			"pending",
			"1",
		];
		text = `INSERT INTO tasks (name, start_date, end_date,status, user_id) VALUES ($1,$2,$3,$4,$5);`;
		await postgres.query(text, values);
	} catch (err) {
		console.error(err);
		throw new Error("connect to postgres falied!");
	}
}
