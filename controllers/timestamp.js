const timestampRouter = require('express').Router();

timestampRouter.get('/:dateString?', (request, response) => {
  const { dateString } = request.params;
  const date = dateString
    ? new Date(Number(dateString) || dateString)
    : new Date();

  if (isNaN(date)) {
    return response.json({ error: date.toUTCString() });
  }

  response.json({ unix: date.getTime(), utc: date.toUTCString() });
});

module.exports = timestampRouter;
