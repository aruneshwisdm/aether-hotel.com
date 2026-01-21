# Deployment Guide - Aether Hotel

## Quick Deploy to Vercel

### Option 1: Using Vercel CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

3. **Set Custom Domain (optional):**
   ```bash
   vercel domains add aether-hotel.com
   ```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

### Option 3: GitHub Integration

1. Push code to GitHub
2. Connect repository to Vercel
3. Enable automatic deployments on push

## Environment Variables

Create these in Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL | No |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint | Yes (for forms) |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps embed | No |

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Test booking form flow
- [ ] Check room modal functionality
- [ ] Verify responsive design on mobile
- [ ] Test navigation and links
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Set up custom domain (if applicable)
- [ ] Enable HTTPS redirect

## Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your domain: `aether-hotel.com`
4. Configure DNS records as instructed:
   - A Record: `76.76.21.21`
   - Or CNAME: `cname.vercel-dns.com`

## Performance Optimization

The site is optimized for:
- Static generation for fast page loads
- Image optimization via Next.js Image
- Font optimization with next/font
- CSS optimization with Tailwind

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Images Not Loading
Ensure `images.unsplash.com` is in `next.config.ts` remotePatterns.

### Form Not Submitting
1. Set up Formspree account
2. Add endpoint to environment variables
3. Update contact form action URL

## Support

For issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
