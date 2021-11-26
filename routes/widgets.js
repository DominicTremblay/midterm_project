/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    let query = `SELECT * FROM widgets`;
    console.log(query);
    db.query(query)
      .then((data) => {
        const widgets = data.rows;
        const templateVars = { widgets };
        console.log(templateVars);
        res.json({ widgets });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  // /api/widgets/users
  router.get('/users', (req, res) => {
    const queryText = {
      text: `SELECT users.id as user_id, users.name as username, widgets.id as widget_id, widgets.name as widget_name
      FROM users
      INNER JOIN widgets
      ON users.id = widgets.user_id
      `,
    };

    db.query(queryText)
      .then((data) => {
        res.json({ userWidgets: data.rows });
      })
      .catch((err) => console.log(err.message));
  });
  return router;
};
