import assert from 'assert';
import expenseTracker from '../service/expenseTracker.js';


const expenseTrackerTest = expenseTracker(db);

describe('expenseTracker function', function () {
    // Set a timeout for the tests
    this.timeout(15000);

//You can set mock data here

    beforeEach(async function () {
        // Set up mock data in the database
        await db.none(`TRUNCATE expenses RESTART IDENTITY TUSCADE`)

    });

    it('should add an expense', async function(){
        const category = "monthly";
        const amount = 50.00
       const expense = "post office subscription"
       let expenseTotal = await expenseTrackerTest.addExpense(category, amount, expense);
        assert.equal(expenseTotal , "expense added successfully")
    });
    after(function () {
        db.$pool.end();}
    )
});