# 🚀 CareerPulse Pro - Quick Start Guide

## Step 1: Open in VS Code

1. **Open VS Code**
2. **File → Open Folder**
3. **Select the `careerpulse-app` folder**

## Step 2: Run Locally

### Option A: Using Live Server (Easiest)
1. **Install "Live Server" extension:**
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

2. **Start Live Server:**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Browser opens automatically at `http://localhost:5500`

### Option B: Using Python
```bash
# Open terminal in VS Code (Ctrl+`)
python -m http.server 8000

# Open http://localhost:8000
```

### Option C: Using Node.js
```bash
# Install dependencies (if needed)
npm install

# Start server
npm start

# Open http://localhost:8000
```

## Step 3: Test Features

1. **Sign Up:**
   - Click "Sign Up"
   - Enter: Name, Email, Password
   - Click "Create Account"

2. **Browse Jobs:**
   - See 550+ jobs loading
   - Jobs sorted by newest first

3. **Search:**
   - Type "React" in search
   - See React-related jobs

4. **Filter:**
   - Select "CA" from State filter
   - Select "Python" from Technology filter

5. **Sort:**
   - Change sort to "⭐ Highest Match Score"
   - Jobs re-sort automatically

6. **Enhance Resume:**
   - Click any job's "✨ Enhance & Apply"
   - Upload or paste resume
   - Click "Continue to Enhancement"
   - Click "Enhance with AI"
   - Review enhanced resume
   - Click "Apply with Enhanced Resume"

## Step 4: Deploy to Netlify (Recommended)

### Method 1: Using Netlify GUI (Easiest)

1. **Push to GitHub:**
   ```bash
   # Initialize git in terminal
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/careerpulse-pro.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect your GitHub account
   - Select `careerpulse-pro` repository
   - Deploy settings (all auto-detected)
   - Click "Deploy site"
   - Site goes live! 🎉

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod

# Your site will be live!
```

## Step 5: Alternative Deployment Options

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select "main" branch
4. Site lives at: https://YOUR_USERNAME.github.io/careerpulse-pro

### Deploy to Heroku
```bash
npm install -g heroku
heroku login
heroku create careerpulse-pro
git push heroku main
```

## 📁 File Structure

```
careerpulse-app/
├── index.html          ← Main page
├── styles.css          ← All styling
├── app.js              ← All JavaScript logic
├── package.json        ← NPM config
├── netlify.toml        ← Netlify config
├── vercel.json         ← Vercel config
├── README.md           ← Full documentation
└── .gitignore          ← Git config
```

## 🎯 Key Features to Demo

| Feature | How to Test |
|---------|-----------|
| 550+ Jobs | Browse dashboard |
| 100+ Technologies | Open Tech filter dropdown |
| Smart Sort | Change sort option |
| Smart Filter | Select state + technology |
| Real-time Search | Type in search box |
| AI Resume | Click "Enhance & Apply" |
| Job Posting Time | See "📅 2h ago" on cards |
| Responsive | Shrink browser window |

## 🔑 Test Credentials

```
Email: any@email.com
Password: any123
```
(Works after signing up)

## ⚙️ Customize Before Deploying

### 1. Update Company Name
`index.html` and `app.js`:
```javascript
// Replace "CareerPulse Pro" with your name
```

### 2. Update Colors
`styles.css`:
```css
:root {
    --primary: #00d4ff;      /* Change cyan color */
    --secondary: #ff006e;    /* Change pink color */
    --accent: #ffd60a;       /* Change yellow color */
}
```

### 3. Add Your Claude API Key (Optional)
For real AI enhancement, add API key in `app.js`:
```javascript
// In enhanceResumeWithAI() function
// Your Claude API key goes here
```

## 🆘 Troubleshooting

### Issue: "Cannot find module"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Port already in use
```bash
# Use different port
python -m http.server 8001  # Use 8001 instead of 8000
```

### Issue: Jobs not loading
1. Open DevTools (F12)
2. Check Console tab for errors
3. Clear localStorage: `localStorage.clear()`
4. Refresh page

### Issue: Resume upload not working
- Ensure file is < 5MB
- Try copy-paste instead

## 📊 Performance Tips

1. **Cache busting:** Add `?v=1` to CSS/JS links in index.html
2. **Image optimization:** No images currently, but use WebP if adding
3. **Lazy loading:** Jobs render on demand
4. **Minification:** For production, minify CSS/JS

## 🔐 Security Checklist

- [ ] Never commit `.env` file
- [ ] Use HTTPS in production (auto on Netlify/Vercel)
- [ ] Move Claude API key to backend
- [ ] Add CORS headers if needed
- [ ] Add rate limiting
- [ ] Sanitize user input

## 📈 Monitor Deployment

1. **Netlify Analytics:**
   - Go to Netlify dashboard
   - View site analytics
   - Check error logs

2. **Vercel Analytics:**
   - Go to Vercel dashboard
   - Monitor performance
   - Check deployments

## 🎉 Success!

Your CareerPulse Pro site is now:
✅ Developed locally  
✅ Tested thoroughly  
✅ Ready for deployment  
✅ Live on the internet!  

---

**Next Steps:**
1. Customize branding
2. Deploy to your preferred platform
3. Share the URL
4. Gather feedback
5. Iterate and improve

**Support:** Check README.md for detailed documentation
