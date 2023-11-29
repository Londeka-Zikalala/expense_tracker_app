function expenseTrackerRoute(expensedb){
    async function showIndex(req, res, next){
        try{
            res.render('index')
        }
        catch(error){
            console.error(error.message)
            next(error)
        }
    }

    async function addExpenseRoute(req, res,next){
        try{
            //insert values taken from the body
            const expense = req.body.expense;
            const amount = req.body.amount;
            const category = req.body.category
                //call the addExpense function 
            await expensedb.addExpense(category, amount, expense)
                res.render('index')
        }catch(error){
            console.error(error.message)
            next(error)
        }
    }

    async function allExpensesRoute(req, res, next){
        //call the all expenses function 
        let categories = await expensedb.allExpenses();
        res.render('index', {
            categories
        })
    }
    return{
        showIndex,
        addExpenseRoute,
    }
}

export default expenseTrackerRoute