const {Pool} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: '',
    port: 5432
});

const getEvents = async (req, res) => {
    const response = await pool.query('SELECT * FROM eventos');
    res.status(200).json(response.rows);
}

const setEvent = async (req, res) => {
    const {name, details, start, end, color} = req.body;
    const response = await pool.query('INSERT INTO eventos(name, details, start, "end", color) VALUES($1, $2, $3, $4, $5)', [name, details, start, end, color]);
    res.send(response);
}

const deleteEvent = async (req, res) => {
    const id = req.body.id;
    const response = await pool.query('DELETE FROM eventos WHERE id = $1', [id]);
    res.send(response);
}

const updateEvent = async (req, res) => {
    const {id, name, details, start, end} = req.body;
    const response = await pool.query('UPDATE eventos SET name = $1, details = $2, start = $3, "end" = $4 WHERE id = $5', [name, details, start, end, id]);
    res.send(response);
}

module.exports = {
    getEvents,
    setEvent,
    deleteEvent,
    updateEvent
}