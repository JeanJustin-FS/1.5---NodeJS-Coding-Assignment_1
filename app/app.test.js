const {app} = require('./app');

describe ('App Server Test', () => {
    test('GET / should respond with 200 and "Service is up"', async () => {
            const response = await request(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.body).toBe('Service is up');


    test('should return 404 for an unknown route', async () => {
                const response = await request(app).get('/not-a-real-route');
                expect(response.statusCode).toBe(404);
                expect(response.body.error.message).toBe('Not Found');
            });
        
})
});


// // app.test.js
// const request = require('supertest');
// const app = require('./app'); // Adjust the path if needed

// describe('App', () => {
//   it('GET / should respond with 200 and "Service is up"', async () => {
//     const response = await request(app).get('/');
//     expect(response.statusCode).toBe(200);
//     // Because you're calling res.json('Service is up'),
//     // Supertest automatically parses JSON to a JavaScript string.
//     expect(response.body).toBe('Service is up');
//   });

//   it('should return 404 for an unknown route', async () => {
//     const response = await request(app).get('/not-a-real-route');
//     expect(response.statusCode).toBe(404);
//     expect(response.body.error.message).toBe('Not Found');
//   });
// });
