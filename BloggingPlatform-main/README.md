# BlogHub - Full-Stack Blogging Platform

A modern, full-featured blogging platform built with React, Node.js, Express, and MongoDB.

## 🚀 Features

### Frontend
- **Modern React UI** with TypeScript and Tailwind CSS
- **Rich Text Editor** for creating beautiful blog posts
- **Responsive Design** that works on all devices
- **User Authentication** with JWT tokens
- **Advanced Search & Filtering** by categories, tags, and content
- **Social Features** - likes, comments, user profiles
- **Admin Dashboard** for content and user management

### Backend
- **RESTful API** built with Express.js
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** with secure password hashing
- **File Upload Support** for images and media
- **Email Integration** for contact forms and notifications
- **Rate Limiting** and security middleware
- **Comprehensive Error Handling**

### Additional Pages
- **About Us** - Learn about the platform and team
- **Contact** - Get in touch with support
- **Privacy Policy** - Detailed privacy information
- **Terms of Service** - Platform terms and conditions
- **Cookie Policy** - Cookie usage and management
- **Community Guidelines** - Rules and best practices

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- Nodemailer for email functionality
- Helmet for security
- CORS for cross-origin requests

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/Student1shruti/bloghub.git
cd bloghub
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173

# MongoDB
MONGODB_URI=mongodb://localhost:27017/bloghub

# JWT
JWT_SECRET=your-super-secret-jwt-key-here

# Email Configuration
EMAIL_USER=13579shrutigupta@gmail.com
EMAIL_PASS=your-app-password-here
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas cloud service
```

### 5. Run the Application
```bash
# Start both frontend and backend
npm run dev

# Or run separately:
# Backend only
npm run server

# Frontend only
npm run client
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🗄️ Database Setup

The application will automatically create the necessary collections in MongoDB. Sample data will be seeded on first run.

### Default Admin Account
- Email: admin@bloghub.com
- Password: admin123

### Sample User Accounts
- Email: john@example.com / Password: user123
- Email: jane@example.com / Password: user123

## 📁 Project Structure

```
bloghub/
├── server/                 # Backend code
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js          # Server entry point
├── src/                   # Frontend code
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── context/          # React context
│   ├── hooks/            # Custom hooks
│   ├── services/         # API services
│   └── types/            # TypeScript types
├── public/               # Static assets
└── package.json         # Dependencies
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Posts
- `GET /api/posts` - Get all posts (with filtering)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like/unlike post

### Comments
- `GET /api/comments/post/:postId` - Get post comments
- `POST /api/comments` - Create comment
- `POST /api/comments/:id/like` - Like/unlike comment
- `DELETE /api/comments/:id` - Delete comment

### Users
- `GET /api/users/:id` - Get user profile
- `GET /api/users/:id/posts` - Get user posts
- `POST /api/users/:id/follow` - Follow/unfollow user

### Contact
- `POST /api/contact` - Send contact message

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend:
```bash
npm run build
```
2. Deploy the `dist` folder to your hosting service

### Backend (Heroku/Railway/DigitalOcean)
1. Set environment variables on your hosting platform
2. Deploy the server code
3. Ensure MongoDB connection is configured

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
CLIENT_URL=https://your-domain.com
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bloghub
JWT_SECRET=your-production-jwt-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contact

- **Developer**: Shruti Gupta
- **Email**: 13579shrutigupta@gmail.com
- **GitHub**: https://github.com/Student1shruti

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of BlogHub

---

Made with ❤️ by Shruti Gupta