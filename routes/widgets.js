/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM widgets`;
    console.log(query);
    db.query(query)
      .then(data => {
        const widgets = data.rows;
        const templateVars = {widgets};
        console.log(templateVars);
        res.json({widgets})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // get the date of both widgets and users
  router.get("/users", (req, res) => {

  }

  return router;
};
