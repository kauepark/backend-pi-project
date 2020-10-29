const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const {getEvents, setEvent, deleteEvent, updateEvent} = require('./controller');

app.get('/events', getEvents);
app.post('/register-event', setEvent);
app.delete('/delete-event', deleteEvent);
app.put('/update-event', updateEvent);

app.listen(3000, () => console.log('Server na porta 3000'));