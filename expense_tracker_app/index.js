import express from 'express';
import {engine} from 'express-handlebars'
import bodyParser from 'body-parser';
import expenseTracker from './service/expenseTracker.js';
import expenseTrackerRoute from './routes/expenseTrackerRoutes.js';
import db from './db.js';

const app = express();
const expensedb = expenseTracker(db);
const expenseRoute = expenseTrackerRoute(expensedb)
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup handlebars engine

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
//public static
app.use(express.static('public'));

app.get('/', expenseRoute.showIndex)
app.post('/add', expenseRoute.addExpenseRoute)
app.get('/add', expenseRoute.allExpensesRoute)



//local host 
const PORT = process.env.PORT || 3011

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});