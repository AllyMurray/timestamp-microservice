const timestampRouter = require('express').Router();

timestampRouter.get('/:dateString?', (request, response) => {
  const { dateString } = request.params;
  const date = dateString ? new Date(dateString) : new Date();
  response.json({ unix: date.getTime(), utc: date.toUTCString() });
});

module.exports = timestampRouter;
