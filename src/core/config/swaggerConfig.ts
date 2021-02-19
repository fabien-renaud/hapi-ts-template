import hapiSwagger from 'hapi-swagger';

const swaggerConfig = {
    plugin: hapiSwagger,
    options: {
        info: {
            title: 'Hapi TS Template',
            version: '1.0.0'
        }
    }
};

export default swaggerConfig;
