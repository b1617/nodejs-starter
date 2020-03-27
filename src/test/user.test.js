const userService = require('../services/user.services');
const mongoose = require('mongoose');
const model = {
    email: "test@test.com",
    password: "12345"
}

describe('User model test', () => {
    beforeAll(done => {
        mongoose.connect('mongodb://localhost/starter', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        done()
    });
    it('should get users', async () => {
        const users = await userService.getUsers();
        expect(users).toBeInstanceOf(Array);
    });

    it('should get user', async () => {
        const user = await userService.getUser(model.email);
        console.log(user);
        expect(user.email).toEqual(model.email);
    })

    afterAll(done => {
        mongoose.connection.close();
        done();
    })
});

