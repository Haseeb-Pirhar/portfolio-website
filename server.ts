import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app: Express = express();
const PORT = 5000;

// CORS Configuration
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3001', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer Transporter Configuration
// Update with your email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Verify SMTP credentials at startup (helpful for debugging bad credentials)
let smtpVerified = false;
transporter.verify()
  .then(() => {
    smtpVerified = true;
    console.log('✅ SMTP transporter verified — email sending is configured');
  })
  .catch((err) => {
    smtpVerified = false;
    console.error('❌ SMTP transporter verification failed. Email sending may not work.');
    console.error(err);
  });

// Health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'Backend server is running' });
});

// Contact Form Route (supports both /contact and /api/contact)
app.post(['/contact', '/api/contact'], async (req: Request, res: Response) => {
  try {
    // If SMTP wasn't verified at startup, return a 503 to avoid attempts with bad config
    if (!smtpVerified) {
      console.error('Attempt to send email while SMTP not verified');
      return res.status(503).json({
        success: false,
        message: 'Email service not configured. Please try again later.'
      });
    }
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.CONTACT_EMAIL || 'your-email@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Best regards</p>
      `
    });

    res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      data: { name, email }
    });

  } catch (error) {
    // Log full error server-side for debugging, but send a generic message to clients
    console.error('Error sending message:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send contact message.'
    });
  }
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`🔧 CORS enabled for: http://localhost:3000, http://localhost:5173, http://localhost:3001`);
  if (!smtpVerified) {
    console.warn('⚠️ SMTP not verified. Contact emails will fail until EMAIL_USER/EMAIL_PASS are fixed.');
  }
});
