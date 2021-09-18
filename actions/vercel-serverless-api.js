'use strict';

const { API, handler } = require('vercel-serverless-api');

const responseDummy = {
    status() { return this; },
    json() { return this; },
    send() { return this; },
    setHeader() { return this; }
};

class ApiDummy extends API {}

(async () => {
    try{
        await handler(ApiDummy, {}, responseDummy);
    } catch(error) {
        throw new Error('Vercel Serverless API not Working')
    }
})()
