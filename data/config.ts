export interface Config {
    user: string;
    password: string;
    firstName: string;
    lastName: string;
    postalCode: string;
}

export const config = require('./data.json') as Config;