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
 * events?: string[];
 * teamSize?: number;
 * token: string;
 * teamMembers?: string[];
 * transactionId: string;
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
            college VARCHAR(255) NOT NULL,
            state VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            pincode INTEGER NOT NULL,
            type VARCHAR(255) NOT NULL,
            events VARCHAR(255)[] NULL,
            teamSize INTEGER,
            teamMembers VARCHAR(255)[],
            token VARCHAR(255),
            transactionId VARCHAR(255)
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
      "INSERT INTO users (name, email, college, state, city, pincode, type, events, teamSize, teamMembers, token, transactionId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11,$12)",
      [
        user.name,
        user.email,
        // user.password,
        user.college,
        user.state,
        user.city,
        user.pincode,
        user.type,
        user.events,
        user.teamSize,
        user.teamMembers,
        user.token,
        user.transactionId,
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
      "SELECT * FROM users WHERE $1 = ANY(events)",
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
      "UPDATE users SET name=$1, email=$2, college=$3, state=$4, city=$5, pincode=$6, type=$7,events=$8, teamSize=$9, teamMembers=$10 WHERE email=$11",
      [
        user.name,
        user.email,
        // user.password,
        user.college,
        user.state,
        user.city,
        user.pincode,
        user.type,
        user.events,
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
   * @returns {any}
   */
  async addEvent(email, event) {
    return this.client.query(
      "UPDATE users SET events = array_append(events, $1) WHERE email=$2",
      [event, email]
    );
  }

  /**
   * Description
   * @param {string} email
   * @param {string} event
   * @returns {any}
   */

  async removeEvent(email, event) {
    return this.client.query(
      "UPDATE users SET events = array_remove(events, $1) WHERE email=$2",
      [event, email]
    );
  }
}
