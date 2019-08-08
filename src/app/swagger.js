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
        SwaggerUIBundle({
            spec: swaggerJson,
            dom_id: '#apim-swagger-ui',
            oauth2RedirectUrl: 'http://localhost:8080/oauth2-redirect.html'
        });
    }

    render() {
        return (
          <div id="apim-swagger-ui" />
        );
    }
}

export default withTheme(SwaggerUIComponent);