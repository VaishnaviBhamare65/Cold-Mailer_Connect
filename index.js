import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js'
import fileRoutes from './routes/file.routes.js' 
import mailRoutes from './routes/mail.routes.js';
const app = express()

app.get('/', (req, res) => {
  res.send("ColdMailer API is running");
});
const port = 5000;
app.use(express.json())
app.use('/api/auth' , authRoutes)
app.use('/api/file' , fileRoutes)
app.use('/api/mails' , mailRoutes)
connectDB()
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});