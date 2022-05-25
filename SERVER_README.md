# PRODUCTION SERVER configuration

Follow the guidelines in this file to spin a production server for this application.

__Prerequisites__

    1. Nodejs 14+ installed
    2. PM2 install
    3. yarn install


__Optional__

    apache2/nginx server for proxy and load balancer configuration

Based on PM2 configuration options in `ecosystem.config.js`,
please make sure that all options set therein are present in `.env` file.
initially there is a sample .env file `.env.example` which can be used to set production environmental variables.


__Build Nuxt Project__ 

**run `yarn build` and/or `yarn generate` to generate static and server assets for deployment**

__PM2 deployment__

run the following scripts:
    
    
1. `pm2 start` # to start the server
   
2. `pm2 reload` # to reload the server

3. `pm2 stop #` # to stop a specific instanced - 0, 1,2 etc depending on the number of intances running.

4. `pm2 stop all` # to stop all instabces

5. `pm2 logs` # view pm2 logs

