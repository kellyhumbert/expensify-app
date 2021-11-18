import React from "react";
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses';

test('should correctly render ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1298} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary correctly with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={21} expensesTotal={235000987} />);
    expect(wrapper).toMatchSnapshot();
});