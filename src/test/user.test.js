const userService = require('../services/user.services');
const mongoose = require('mongoose');
const model = {
    email: "test@test.com",
    firstname: "test",
    lastname: "test",
    age: 22,
    password: "1344"
};
describe('User model test', () => {
    beforeAll(done => {
        mongoose.connect('mongodb://localhost/starter', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        done()
    });

    it('should create user with jwt token', async () => {
        const object = await userService.createUser(model);
        expect(object.user.email).toEqual(model.email);
    });

    it('should get users', async () => {
        const users = await userService.getUsers();
        expect(users).toBeInstanceOf(Array);
    });

    it('should get user', async () => {
        const user = await userService.getUser(model.email);
        expect(user.email).toEqual(model.email);
    });

    it('should update', async () => {
        model.firstname = "test2";
        const object = await userService.updateUser(model);
        expect(object.user.firstname).toEqual(model.firstname);
    });

    it('should delete', async () => {
        const result = await userService.deleteUser(model);
        expect(result.deletedCount).toBe(1);
    })

    afterAll(done => {
        mongoose.connection.close();
        done();
    })
});

