function expenseTracker(db){
    //function to get the category id 

    async function addExpense(category, amount, description ){
        
        //get the categoryId 
        let categoryId = await db.oneOrNone(`SELECT id FROM category WHERE category_id = $1 AND description = $2`, [category, description]);

         // Insert the new expense into the expense table
     await db.none(`INSERT INTO expense (expense, amount, category_id) VALUES ($1, $2, $3)`, [amount, categoryId.id]);

    // Calculate the total amount of expenses for the given category
    let total = await db.one(`SELECT SUM(amount) AS total FROM expense WHERE category_id = $1`, [categoryId]);
   
        return total

    }
    return{
        getCategory,
    }
}


export default expenseTracker