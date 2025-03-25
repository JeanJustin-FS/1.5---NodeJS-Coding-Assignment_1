const {todoService, todoServiceById} = require('./todoService');

jest.mock('./__mocks__/todoService');

describe('Todo Service Test', () => {
    test ('It GETS all todos', async () => {
        const result = await todoService();
        expect(result.data).toHaveLength(200);
    });

    test ('It GETS todo by ID', async () => {
        const result = await todoServiceById(2);
        expect(result.data.userId).toEqual(1);
        // expect(result.data.completed).toEqual(true);
    });
});