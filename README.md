# CadburyCICD Landing Page

A modern landing page for CadburyCICD - a self-hosted CI/CD solution built with Next.js, React, and Tailwind CSS using the shadcn/ui component library.

![CadburyCICD Preview](https://raw.githubusercontent.com/xxparthparekhxx/Cadbury/refs/heads/master/public/landing.png)

## Features
- 🚀 **Self-Hosted**: Deploy on your own infrastructure with full control
- 🔗 **Custom Webhooks**: Configure triggers for any git provider
- 💻 **Script Freedom**: Run any build, test, or deployment script
- 🔒 **Data Sovereignty**: Keep your code and deployment data in your infrastructure
- ⚡ **Performance**: Optimized for **speed** and **efficiency**

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/xxparthparekhxx/Cadbury.git
cd Cadbury
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── components/
│   └── ui/          # shadcn/ui components
├── app/
│   └── page.tsx     # Main landing page
├── public/          # Static assets
└── styles/         # Global styles
```

## Configuration

The landing page components are built using shadcn/ui. To customize the theme or add new components:

1. Configure the theme in `tailwind.config.js`
2. Add new shadcn/ui components using their CLI:
```bash
npx shadcn-ui add [component-name]
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
   
