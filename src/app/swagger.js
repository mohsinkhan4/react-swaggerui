import React from "react";
import { cx } from 'emotion';
import { withTheme } from 'emotion-theming';
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";
import 'swagger-ui-dist/swagger-ui.css';
import swaggerJson from '../../swagger-3.0.json';

class SwaggerUIComponent extends React.Component {

    componentDidMount() {
        this.initializeSwaggerUIBundle();
    }

    initializeSwaggerUIBundle() {
        // const location = { window };
        SwaggerUIBundle({
            spec: swaggerJson,
            dom_id: '#apim-swagger-ui',
            oauth2RedirectUrl: `https://${window.location.hostname}:${window.location.port}/react-swaggerui/oauth2-redirect.html`,
            validatorUrl: null,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: 'StandaloneLayout'
        });
    }

    render() {
        return (
          <div id="apim-swagger-ui" />
        );
    }
}

export default withTheme(SwaggerUIComponent);