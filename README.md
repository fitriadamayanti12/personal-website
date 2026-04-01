# Personal Website

My personal portfolio and blog built with Next.js, TypeScript, Tailwind CSS, and Supabase.

🔗 **Live Site:** [fitria.vercel.app](https://fitria.vercel.app)

---

## 📌 About

This website is a reflection of my journey as a software engineer, my passion for technology, and my commitment to family. Here I share:

- **Projects** I've built
- **Blog posts** about tech, digital parenting, and my experiences
- **My story** of balancing career growth with caring for my mother

---

## 🛠️ Tech Stack

| **Technology** | **Purpose** |
|----------------|-------------|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety and better developer experience |
| Tailwind CSS | Styling and responsive design |
| Supabase | PostgreSQL database for blog content |
| Vercel | Hosting and deployment |

---

## 🗄️ Database Structure

Blog posts are stored in Supabase with the following schema:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `title` | TEXT | Post title |
| `slug` | TEXT | URL-friendly identifier (unique) |
| `content` | TEXT | Full post content |
| `excerpt` | TEXT | Short summary |
| `cover_image` | TEXT | Optional cover image URL |
| `published` | BOOLEAN | Visibility status |
| `created_at` | TIMESTAMP | Publication date |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier)

### Environment Variables
Create a `.env.local` file:

``env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key``

---

### Installation

```bash
# Clone repository
git clone https://github.com/fitriadamayanti12/personal-website.git

# Navigate to project
cd personal-website

# Install dependencies
npm install

# Run development server
npm run dev