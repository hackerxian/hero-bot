/**
 * Created by xianda on 15/7/10.
 */


'use strict';


var task = require('./controllers/index');

module.exports = function routes(app) {
  app.get('/', task.home);

  // restful task API
  app.post('/', task.handle);
  //app.post('/tasks/complete', task.complete);
  //app.get('/tasks', task.list);
  //app.post('/tasks', task.add);
  //app.put('/tasks/:id', task.update);
  //app.del('/tasks/:id', task.destroy);
};