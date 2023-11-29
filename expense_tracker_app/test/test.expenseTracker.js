import assert from 'assert';
import expenseTracker from '../service/expenseTracker.js';
import db from '../db.js';


const expenseTrackerTest = expenseTracker(db);

describe('expenseTracker function', function () {
    // Set a timeout for the tests
    this.timeout(15000);


    beforeEach(async function () {
      //Clear the expense table
        await db.none(`TRUNCATE expense RESTART IDENTITY CASCADE`)

    });

    it('should add an expense', async function(){
        const category = "monthly";
        const amount = 50.00
        const expense = "post office subscription"
        let expenseTotal = await expenseTrackerTest.addExpense(category, amount, expense);
        assert.equal(expenseTotal , "expenses inserted successfully")
    });

    it('should get the expenses list', async function(){
        //add the expenses 
        const category = "monthly";
        const amount = 50.00
        const expense = "post office subscription";

        const category2 = "weekly";
        const amount2 = 125.00
        const expense2= "vegetables";
        await expenseTrackerTest.addExpense(category, amount, expense);
        await expenseTrackerTest.addExpense(category2, amount2, expense2);

        //call the all expenses function which returns all the data
        let allExpenses = await expenseTrackerTest.allExpenses();

        assert.deepEqual(allExpenses, [
            {
              amount: '50',
              category_id: 2,
              expense: 'post office subscription',
              id: 1,
              total: '50'
            },
            {
              amount: '125',
              category_id: 1,
              expense: 'vegetables',
              id: 2,
              total: '500'
            }
          ]
          )
    })
    after(function () {
        db.$pool.end();}
    )
});