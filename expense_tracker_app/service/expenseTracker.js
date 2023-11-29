function expenseTracker(db){
    //function to get the category id 

    async function addExpense(category, amount, expense) {
        try {
            let categoryId;
    
            // Get all the categories to get the id 
            const categories = await db.any('SELECT * FROM category');
            
            for (const type of categories) {
                if (type.category_type === category) {
                    categoryId = type.id;
                    
                }
            }
    
            if (categoryId) {
              
            // Insert the new expense into the expense table
            await db.none('INSERT INTO expense (expense, amount, category_id) VALUES ($1, $2, $3)', [categoryId, amount, expense]);
    
            // Calculate the total amount of expenses for the given category based on frequency 
            let total;
    
            for (const categoryType of categories) {
                if (categoryType.category_type === 'monthly' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) AS total FROM expense WHERE category_id = $1', [categoryId]);
                } else if (categoryType.category_type === 'weekly' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) * 4 AS total FROM expense WHERE category_id = $1', [categoryId]);
                } else if (categoryType.category_type === 'weekday' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) * 5 AS total FROM expense WHERE category_id = $1', [categoryId]);
                } else if (categoryType.category_type === 'weekend' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) * 2 AS total FROM expense WHERE category_id = $1', [categoryId]);
                } else if (categoryType.category_type === 'once-off' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) AS total FROM expense WHERE category_id = $1', [categoryId]);
                } else if (categoryType.category_type === 'daily' && categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(amount) * 30 AS total FROM expense WHERE category_id = $1', [categoryId]);
                }
            }
    
            return "expenses inserted successfully"
    
            }
    else {
        return 'insert '
    }
        } catch (error) {
            console.error(error.message);
           
        }
    }

    //function to fetch all the expenses 
    async function allExpenses(){
        try{
            // use * to return all the table data
            let allData =  await db.manyOrNone(`SELECT * FROM expense`);
            return allData
        }catch (error) {
            console.error(error.message);
           
        }
    }
  
    //function to filter expenses 
    async function allExpensesForCategory(categoryId){
        let expenses = await allExpenses()
        let expenseForCategory =[]

        for(var i = 0; i<expenses.length; i++){
            categoryId= expenses[i].category_id
            if(categoryId){
                expenseForCategory = await db.manyOrNone(`SELECT * FROM expense WHERE category_id = $1`, [categoryId])
            }
    }
   return expenseForCategory

    }

    async function deleteExpense(expenseId){
        let expenses = await db.manyOrNone(`SELECT * FROM expense`)
        for(var i = 0; i<expenses.length; i++){
                expenseId = expenses[i].id
        }
        if(expenseId){
            await db.none(`DELETE FROM expense WHERE id = $1`, [expenseId])
        }
    }
    return{
        addExpense,
        allExpenses,
        allExpensesForCategory,
        deleteExpense,

    }
}


export default expenseTracker