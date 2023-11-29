import assert from 'assert';
import expenseTracker from '../service/expenseTracker.js';


const expenseTrackerTest = expenseTracker(db);

describe('expenseTracker function', function () {
    // Set a timeout for the tests
    this.timeout(15000);

//You can set mock data here

    beforeEach(async function () {
        // Set up mock data in the database
        

    });

    afterEach(async function () {
        // Clean up mock after data each test
     
    });
    it('...',function(){

    });
    after(function () {
        db.$pool.end();}
    )
});