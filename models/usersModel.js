const db = require("./conn"),
    bcrypt = require('bcryptjs');

class UsersList {
    constructor(id, username, email, password) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
    }
    async checkPassword(hashedPassword) {
        //returns a TRUE or FALSE statement
        return bcrypt.compareSync(this.password, hashedPassword);
    }
    async save() {
        try {
            console.log('Issue');
            const response = await db.one(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`, [this.username, this.email, this.password]);
            return response;
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }


    async login() {
        try {
            const response = await db.one(`SELECT id, username, email, password FROM users WHERE usernam = $1;`, [this.email]);
            const isValid = await this.checkPassword(response.password)
            if (!!isValid) {
                const {
                    name,
                    id
                } = response;
                return {
                    isValid,
                    name,
                    user_id: id
                };
            } else {
                return {
                    isValid
                }
            }
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }
}

module.exports = UsersList;