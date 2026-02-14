import app from "./app";

const bootstrap = () => {
    try {
        app.listen(process.env.PORT || 5001, () => {
            console.log(`Server is running on http://localhost:5001`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
}

bootstrap();