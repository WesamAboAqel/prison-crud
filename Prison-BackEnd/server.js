import express from 'express'
import managersRoute from './src/managers/routes.js'
import prisonersRoute from './src/prisoners/routes.js'
import staffRoute from './src/staff/routes.js'
import visitorsRoute from './src/visitors/routes.js'
import visitsRoute from './src/visits/routes.js'
import offencesRoute from './src/offences/routes.js'
import recordsRoute from './src/records/routes.js'
import casesRoute from './src/PrisonerCases/routes.js'
import S2FRoute from './src/S2F/routes.js'
import P2FRoute from './src/P2F/routes.js'
import facilitiesRoute from './src/facilities/routes.js'
import utilsRoute from './src/utils/routes.js'
import logger from './src/middleware/logger.js';
import cors from 'cors';
import errorHandler from './src/middleware/error.js';

const port = 8080
const app = express();
app.use(express.json());

app.use(cors());
app.use(logger);

app.use('/managers/',managersRoute)

app.use('/prisoners/',prisonersRoute)

app.use('/staff/',staffRoute)

app.use('/visitors/',visitorsRoute)

app.use('/visits/',visitsRoute)

app.use('/offences/',offencesRoute)

app.use('/records/',recordsRoute)

app.use('/prisonercases/',casesRoute)

app.use('/facilities/',facilitiesRoute)

app.use('/staffallowedfacilities/',S2FRoute)

app.use('/prisonerallowedfacilities/',P2FRoute)

app.use('/utils', utilsRoute)

app.use(errorHandler);

const startServer = async () => {
    
    app.listen(port , ()=>console.log(`The Server is running on port ${port}`));
};

startServer();
