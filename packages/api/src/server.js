import express  from 'express';
import cors  from 'cors';

const app = express()
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: `API Connected to DB successfully!`
    });
});

app.listen(PORT);