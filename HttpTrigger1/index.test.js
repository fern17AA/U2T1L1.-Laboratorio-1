const functions = require('./index');
const context = require('../testing/Context');
//const { test } = require('@jest/globals');

test('Http trigger', async () =>{
    const request = {
        query: { name: 'Ivan' }
    };

    await functions(context, request);
    expect(context.res.body).toEqual('Hello, Ivan`s');
    expect(context.log.mock.calls.length).toBe(1);
});