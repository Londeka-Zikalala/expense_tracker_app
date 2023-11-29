function expenseTrackerRoute(){
    async function showIndex(req, res, next){
        try{
            res.render('index')
        }
        catch(error){
            console.error(error.message)
            next(error)
        }
    }

    return{
        showIndex
    }
}

export default expenseTrackerRoute