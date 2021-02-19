import {ResponseObject, ResponseToolkit, ServerRoute} from '@hapi/hapi';

const routes: ServerRoute[] = [
    {
        method: 'GET',
        path: '/health',
        options: {
            handler: (req: Request, h: ResponseToolkit): ResponseObject => h.response('OK').code(200),
            description: 'Health check',
            notes: 'Health check',
            tags: ['api'],
            response: {
                status: {
                    200: undefined
                }
            }
        }
    }
];

export default routes;
