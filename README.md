This is a URL Redirecter app written with Next.js 14+.
This can be used to redirect users from your old domain to a new domain and preserve SEO.

## Getting Started

1. Fork this repo onto your own account
2. Create and account / Login on [Vercel.com](https://www.vercel.com)
3. Start a deploy for this repo (from your own account) to vercel

   1. BEFORE you hit 'Deploy' button, make sure you set the environment variable below:

   ```
   WEBSITE="https://your-new-domain.com"
   ```

4. Deploy
5. Go to Settings > Domains , and add your **old domain** there.
6. Set the required DNS changes for your old domain to point to this deployment
7. Done!

After this, any user goes to your old domain will be redirected permanently (using 308 Permanent Redirect HTTP Code) to your new domain.

Any url and path is forwarded to your new domain as well.

## Credits

Arman -
<a href="https://twitter.com/programmerByDay" target="_blank">
<img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/programmerByDay?label=Follow%20me%20%40programmerByDay">
</a>

Initially created this for [Taranify Mood AI](https://www.taranify.com)
