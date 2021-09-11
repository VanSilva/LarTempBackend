import cluster from 'cluster';
import os from 'os';

import app from './app';

if (cluster.isMaster && process.env.NODE_ENV !== 'development') {
  for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork();
  }
} else {
  app.listen(process.env.PORT || 3335);
}
