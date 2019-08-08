import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from 'emotion-theming';
// import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import SwaggerUI from './swagger';
import theme from './index.theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                {/* <SwaggerUI 
                    url="./swagger-3.0.json"
                    oauth2RedirectUrl='http://localhost:8080/oauth2-redirect.html'
                    plugins={[ AugmentingLayoutPlugin ]}
                    layout="AugmentingLayout"
                /> */}
                <SwaggerUI />
            </div>
        </ThemeProvider>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
