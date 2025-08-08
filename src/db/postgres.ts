import { Client } from "pg";

export const postgres = new Client(
	"postgres://gibson:123@localhost:5432/task_system",
);
