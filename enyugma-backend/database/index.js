import pg from "pg";
import env from "dotenv";
env.config();
const { Client } = pg;

/**
 * @typedef {{
 *  name: string;
 * email:string;
 * password:string;
 * college: string;
 * state: string;
 * city: string;
 * pincode: number;
 * type: "individual"  | "cognizance";
 * technicalEvents: string[];
 * culturalEvents: string[];
 * teamSize?: number;
 * token: string;
 * teamMembers?: string[];
 * }} user
 */

// create a table users in postgres
// postgres query for creating a table

export default class Database {
  constructor() {
    this.client = new Client({
      user: process.env.user,
      host: "localhost",
      database: "enyugma",
      password: process.env.password,
      port: 5432,
    });
    this.client.connect();

    // create tables if not exists
    this.client.query(`CREATE TABLE IF NOT EXISTS users (
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            college VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            pincode INTEGER NOT NULL,
            type VARCHAR(255) NOT NULL,
            technicalEvents VARCHAR(255)[] NOT NULL,
            culturalEvents VARCHAR(255)[] NOT NULL,
            teamSize INTEGER,
            teamMembers VARCHAR(255)[],
            token VARCHAR(255)
        )`);
  }
  /**
   * Description
   * @param {user} user
   *
   */
  async createUser(user) {
    // postgres query for inserting a user
    return this.client.query(
      "INSERT INTO users (name, email, password, college, state, city, pincode, type, technicalEvents, culturalEvents, teamSize, teamMembers, token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
      [
        user.name,
        user.email,
        user.password,
        user.college,
        user.state,
        user.city,
        user.pincode,
        user.type,
        user.technicalEvents,
        user.culturalEvents,
        user.teamSize,
        user.teamMembers,
        user.token,
      ]
    );
  }
  /**
   * Description
   * @param {string} email
   * @param {string} password
   */
  async getUser(email) {
    // postgres query for getting a user
    return this.client.query("SELECT * FROM users WHERE email=$1", [email]);
  }
  /**
   * Description
   * @param {string} email
   */
  async isUserExists(email) {
    // postgres query for getting a user
    return this.client.query("SELECT * FROM users WHERE email=$1", [email]);
  }

  /**
   * Description
   */
  async getAllUsers() {
    return this.client.query("SELECT * FROM users");
  }

  /**
   * Description
   * @param {user['type']} type
   */
  async getAllUsersByType(type) {
    return this.client.query("SELECT * FROM users WHERE type=$1", [type]);
  }

  /**
   * Description
   * @param {
   *  string
   * } event
   * @returns {any}
   */
  async getUsersByEvent(event) {
    return this.client.query(
      "SELECT * FROM users WHERE $1 = ANY (technicalEvents) OR $1 = ANY (culturalEvents)",
      [event]
    );
  }
  /**
   * Description
   * @param {string} email
   * @param {user} user
   */
  async modifyUser(email, user) {
    // postgres query for modifying a user where provided data might not be complete
    return this.client.query(
      "UPDATE users SET name=$1, email=$2, password=$3, college=$4, state=$5, city=$6, pincode=$7, type=$8, technicalEvents=$9, culturalEvents=$10, teamSize=$11, teamMembers=$12 WHERE email=$13",
      [
        user.name,
        user.email,
        user.password,
        user.college,
        user.state,
        user.city,
        user.pincode,
        user.type,
        user.technicalEvents,
        user.culturalEvents,
        user.teamSize,
        user.teamMembers,
        email,
      ]
    );
  }

  /**
   * Description
   * @param {string} email
   * @param {string} password
   */

  async deleteUser(email, password) {
    // postgres query for deleting a user
    return this.client.query(
      "DELETE FROM users WHERE email=$1 AND password=$2",
      [email, password]
    );
  }

  /**
   * Description
   * @param {string} email
   * @param {string} password
   */

  async changePassword(email, password) {
    // postgres query for changing password
    return this.client.query("UPDATE users SET password=$1 WHERE email=$2", [
      password,
      email,
    ]);
  }

  /**
   * Description
   * @param {string} email
   * @param {string} event
   * @param {"technical" | "cultural"} type
   * @returns {any}
   */
  async addEvent(email, event, type) {
    if (type === "technical") {
      return this.client.query(
        "UPDATE users SET technicalEvents = array_append(technicalEvents, $1) WHERE email=$2",
        [event, email]
      );
    } else if (type === "cultural") {
      return this.client.query(
        "UPDATE users SET culturalEvents = array_append(culturalEvents, $1) WHERE email=$2",
        [event, email]
      );
    } else {
      throw new Error("Invalid type");
    }
  }

  /**
   * Description
   * @param {string} email
   * @param {string} event
   * @param {"technical" | "cultural"} type
   * @returns {any}
   */

  async removeEvent(email, event, type) {
    if (type === "technical") {
      return this.client.query(
        "UPDATE users SET technicalEvents = array_remove(technicalEvents, $1) WHERE email=$2",
        [event, email]
      );
    } else if (type === "cultural") {
      return this.client.query(
        "UPDATE users SET culturalEvents = array_remove(culturalEvents, $1) WHERE email=$2",
        [event, email]
      );
    } else {
      throw new Error("Invalid type");
    }
  }
}
