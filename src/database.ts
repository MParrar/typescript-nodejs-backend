import mongoose from 'mongoose';
import config from './config';


(async () => {

    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,

            // user: config.MONGO_PASSWORD,
            // pass:config.MONGO_USER
        });
        console.log('Database is connected to: ', db.connection.name);

    } catch (error) {
        console.log(error);
    }

})()