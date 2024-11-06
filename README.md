# blair.scot

Personal portfolio website showcasing my work and experience as a software engineer.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 🛠️ Technologies

- Next.js
- TypeScript
- Tailwind CSS
- Docker
- Nginx

## 🏗️ Project Structure

```text
blair.scot/
├── components/       # Reusable UI components
├── pages/           # Next.js pages
├── public/          # Static assets
├── styles/          # CSS styles
├── out/            # Production build output
├── Dockerfile      # Container configuration
└── package.json    # Project dependencies
```

## 🐳 Docker Deployment

Build and run using Docker:

```bash
# Build the container
docker build -t blair-scot .

# Run the container
docker run -p 3000:80 blair-scot
```

Or using docker-compose:

```bash
docker-compose up -d
```

## 🌐 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## 📝 Development Guidelines

1. Use TypeScript for all new files
2. Follow the existing component structure
3. Use Tailwind CSS for styling
4. Write meaningful commit messages

## 🚀 Deployment

The site is automatically deployed when pushing to the main branch:

1. Build process creates static files in `out/` directory
2. Nginx serves the static files
3. SSL is handled by Certbot
4. Domain management through Cloudflare

## 🔧 Maintenance

Regular updates:
- `npm audit` for security updates
- `npm outdated` to check for package updates
- Regular dependency updates
- SSL certificate renewal (automated with Certbot)

## 📈 Performance

Current Lighthouse scores:
- Performance: 98/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 📞 Contact

- Website: [blair.scot](https://blair.scot)
- Email: [contact@blair.scot](mailto:contact@blair.scot)
- LinkedIn: [Blair Murray](https://linkedin.com/in/yourusername)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for deployment inspiration
- Open source community

---

Made with ❤️ by Blair Murray
