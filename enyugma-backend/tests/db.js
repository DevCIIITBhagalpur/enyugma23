import Database from "../database/index.js";
import { randomBytes } from "crypto";
const db = new Database();

/**
 * @typedef {{
 *  name: string;
 * email:string;
 * password:string;
 * college: string;
 * state: string;
 * city: string;
 * pincode: number;
 * type: "individual" | "teamLead" | "cognizance";
 * events?: string[];
 * teamSize?: number;
 * token: string;
 * teamMembers?: string[];
 * }} user
 */

// await db.createUser({
//   name: "John",
//   age: 25,
//   email: "john@doe.com",
//   password: "password",
//   college: "NIT",
//   state: "Delhi",
//   city: "Delhi",
//   pincode: 110001,
//   type: "individual",
//   events: ["event1", "event2"],
//   teamSize: 1,
//   teamMembers: ["John", "Doe"],
//   token: randomBytes(16).toString("hex"),
// });

console.log(await db.isUserExists("joh@doe.com"));
