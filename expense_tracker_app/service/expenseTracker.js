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
            await db.none('INSERT INTO expense (category_id, amount, expense) VALUES ($1, $2, $3)', [categoryId, amount, expense]);
    
            // Calculate the total amount of expenses for the given category based on frequency 
            let total = 0;
    
            for (const categoryType of categories) {
                if (categoryType.category_type === category) {
                    total = await db.one('SELECT SUM(expense.amount) AS total FROM expense JOIN category ON expense.category_id = category.id WHERE category.category_type = $1', [category]);
                    if (categoryType.category_type === 'monthly') {
                        total.total *= 1;
                    } else if (categoryType.category_type === 'weekly') {
                        total.total *= 4;
                    } else if (categoryType.category_type === 'weekday') {
                        total.total *= 5;
                    } else if (categoryType.category_type === 'weekend') {
                        total.total *= 2;
                    } else if (categoryType.category_type === 'once-off') {
                        total.total *= 1;
                    } else if (categoryType.category_type === 'daily') {
                        total.total *= 30;
                    }
                    // Update the total 
                    await db.none(`UPDATE expense SET total = $1 WHERE category_id = $2`, [total.total, categoryId]);
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
            if(expenses[i].category_id === categoryId){
                expenseForCategory.push(expenses[i]);
            }
        }
    
   return expenseForCategory

    }

// function to delete expense by id
    async function deleteExpense(expenseId){
        //get the expenses data
        let expenses = await db.manyOrNone(`SELECT * FROM expense`)
        //get the expense Id
        for(var i = 0; i<expenses.length; i++){
                expenseId = expenses[i].id
        }
        if(expenseId){
            await db.none(`DELETE FROM expense WHERE id = $1`, [expenseId])
        }
    }

    async function getTotals(){

    }
    return{
        addExpense,
        allExpenses,
        allExpensesForCategory,
        deleteExpense,
        getTotals

    }
}


export default expenseTracker