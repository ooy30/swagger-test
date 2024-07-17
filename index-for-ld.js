const { base_path, host } = require( './config');

module.exports.handler = async (event, context) => {

    //await generateSwaggerJson();
    let swaggerDocument = require('./swagger-output.json');
    swaggerDocument.host = host;
    swaggerDocument.basePath = base_path;

    return {
        statusCode: 200,
        headers: {
            'content-type': 'text/html; charset=utf-8',
        },
        isBase64Encoded: false,
        body: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta
              name="description"
              content="SwaggerUI"
            />
            <title>SwaggerUI</title>
            <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
          </head>
          <body>
          <div id="swagger-ui"></div>
          <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
          <script>
            window.onload = () => {
              window.ui = SwaggerUIBundle({
                dom_id: '#swagger-ui',
                spec: ${JSON.stringify(swaggerDocument)}
              });
            };
          </script>
          </body>
        </html>`,
    };
};
