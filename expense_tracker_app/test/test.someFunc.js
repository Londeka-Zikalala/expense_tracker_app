import assert from 'assert';
import shoeCatalogue from '../service/shoeCatalogueDb.js';
import db from '../db.js';


const shoeService = shoeCatalogue(db);

describe('shoeCatalogue function', function () {
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