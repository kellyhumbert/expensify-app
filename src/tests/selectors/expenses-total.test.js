import getExpensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('should return 0 for no expenses', () => {
    const sum = getExpensesTotal([]);
    expect(sum).toBe(0);
});

test('should handle single expense', () => {
    const sum = getExpensesTotal([expenses[1]]);
    expect(sum).toBe(1095);
});

test('should handle multipe expenses', () => {
    const sum = getExpensesTotal(expenses);
    expect(sum).toBe(5790)
});