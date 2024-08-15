import app from './app';

// Setup PORT
const PORT = 5000 || process.env.PORT;
// Connect to mongodb
// Handle unexpected errors: => Log the errors and exit the process
// Run server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
