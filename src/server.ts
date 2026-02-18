import app from "./app";
import { envVars } from "./app/config/env";


const bootstrap = () => {
    try {
        app.listen(envVars.PORT || 5001, () => {
            console.log(`Server is running on http://localhost:${envVars.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

bootstrap();