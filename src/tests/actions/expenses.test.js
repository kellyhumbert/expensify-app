import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'Test Note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Test Note'
        }
    });
});

test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 195000,
        createdAt: 1000,
        note: 'Test Note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should set up add expense action object with default values', () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});