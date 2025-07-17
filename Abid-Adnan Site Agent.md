# **AbidAdnan.com — Project Log & Current Setup**

**Owner:** Abid Adnan  
 **Main Domain:** [abid-adnan.com](https://abid-adnan.com)  
 **Date:** July 4, 2025  
 **Overall Goal:** Personal portfolio & thought leadership hub with modern web stack, performance-optimized for Bangladesh and global visitors.

---

## **✅ Platform Overview**

| Platform | Purpose | Email Used | Notes |
| ----- | ----- | ----- | ----- |
| **Limda Host** | Domain registration \+ cPanel hosting | abid.mahmud.adnan@gmail.com | Holds domain `abid-adnan.com`; cPanel hosting used before migration. |
| **Cloudflare** | DNS \+ CDN \+ Edge Security | udvabon.io@gmail.com | Manages DNS, SSL, WAF, edge cache; sits in front of both Astro & Vercel. |
| **GitHub** | Version control (Astro & Next.js) | udvabon-tech org | Repos: [`abid-adnan-site`](https://github.com/udvabon-tech/abid-adnan-site) & [`AbidAdnan.comVercel`](https://github.com/udvabon-tech/AbidAdnan.comVercel) |
| **Vercel** | Production hosting for Next.js SSR | udvabon.io@gmail.com | Deploys Next.js site behind Cloudflare proxy. |
| **Cloudflare Pages** | Static hosting for Astro version | udvabon.io@gmail.com | Previous Astro site at `https://abid-adnan-site.pages.dev`. |

---

## **✅ What’s LIVE**

### **🟢 New Site**

* **Framework:** Next.js 15 (App Router, SSR, ISR)

* **Local Dev Path:** `/Users/Adnan/Sites/AbidAdnan.comVercelGit`

* **Repo:** [`AbidAdnan.comVercel`](https://github.com/udvabon-tech/AbidAdnan.comVercel)

* **Hero:** Custom grouped layout, branch image, portrait, Inter \+ Noto Sans Bengali.

* **Deployed via:** Vercel → Cloudflare DNS & Proxy → `abid-adnan.com`.

---

### **🟢 DNS & Proxy**

* **Root (`@`):** A record → `216.198.79.1` (Vercel’s new IP) → **Proxied ON**

* **WWW:** CNAME → `81476b92a208bd7f.vercel-dns-017.com` → **Proxied ON**

* **Mail:** MX & TXT for Zoho Mail untouched (`DNS Only`).

---

### **🟢 Performance**

* Cloudflare delivers static assets from Dhaka edge cache.

* Browser cache \+ stale-while-revalidate → minimal origin hits.

* Vercel handles SSR/ISR & edge functions with no code rewrite.

* Primary domain: `abid-adnan.com` (www redirects to root).

---

## **✅ Older Astro Site (Legacy)**

* **Codebase:** Astroplate template, Tailwind CSS.

* **Repo:** [`abid-adnan-site`](https://github.com/udvabon-tech/abid-adnan-site)

* **Deployed:** Cloudflare Pages → [abid-adnan-site.pages.dev](https://abid-adnan-site.pages.dev)

* Domain: `abid-adnan.com` pointed here before switching to Vercel.

---

## **✅ Passwords & Access**

* **Password sheet:** [Google Sheets Master](https://docs.google.com/spreadsheets/d/1d6ep91FMHaiMvXs_8athXWqJwQPfvXWbqqPwxpofZrY/edit?gid=0#gid=0)

---

## **✅ Deliveries & Payments**

* **Courier:** Steadfast.com for physical delivery.

* **Payment Gateways:** SSLCommerz or bKash integration plan for digital products.

---

## **✅ Current Local Dev**

| Local Path | Notes |
| ----- | ----- |
| `/Sites/abid-adnan-site` | Astro version, legacy with hero patch. |
| `/Sites/AbidAdnan.comVercelGit` | Next.js 15 site, new hero & branch image. |

---

## **✅ What’s Next**

* Fully retire Astro Cloudflare Pages if no longer needed.

* Keep Cloudflare DNS in sync when swapping stacks.

* Build additional pages: Writing, About, Contact.

* Add analytics, caching tests, and Codex integration for automated content blocks.

* Maintain `writer-clone-abid.md` and `hard-rules-bangla.md` in `/docs/`.

---

## **✅ Last Deployment Status**

* Vercel Domains: `abid-adnan.com` → Proxy Detected (✅ Normal)

* `www.abid-adnan.com` → SSL cert generated and valid.

* Cloudflare Proxy: ON for both root & [www](http://www).

* Tests: Hero loads, images correct, responsive on mobile, edge caching confirmed.

---

## **📌 Reference Links**

* ✅ **GitHub (Next.js)** → [AbidAdnan.comVercel](https://github.com/udvabon-tech/AbidAdnan.comVercel)

* ✅ **GitHub (Astro)** → [abid-adnan-site](https://github.com/udvabon-tech/abid-adnan-site)

* ✅ **Live Site:** [abid-adnan.com](https://abid-adnan.com)

* ✅ **Cloudflare DNS:** dash.cloudflare.com

* ✅ **Vercel Dashboard:** [vercel.com](https://vercel.com)

---

## **✅ Root Maintainer**

* **Managed by:** Abid Adnan

* **Updated by:** Udvabon.io Vercel Account

* **Last updated:** **July 4, 2025**

✅ Latest Dev Log    
Date: July 13, 2025

\- ✅ Rolled back Git to commit \`35fe6f8\` to restore the Uber Magic 2.0 version safely, confirming force push synced both local and remote \`main\`.  
\- ✅ Replaced the Uber card with the first Journey milestone using the same card design grammar: white card background, rounded corners, soft shadow, consistent padding, same typography.  
\- ✅ New Journey card structure:  
   • Logo centered at the top: \`/public/images/My\_journey\_logo/onnorokom-Edtech-logo-abid-adnan.jpeg\`  
   • Below logo: time → role → short description, all text center-aligned.  
   • Example content:    
     \- Time: \`2024 – Present\`    
     \- Role: \`Head of AI, OnnoRokom EdTech\`    
     \- Short description: \`Leading and reshaping workflows around AI initiatives, building custom AI agents for internal use.\`

\- ✅ Confirmed that the single card layout stays responsive and visually matches the original Uber block’s design system.  
\- ✅ \`My\_journey\_logo\` folder structure under \`/public/images/\` holds all milestone logos for consistency.  
\- ✅ Codex agent prompt prepared for extending the same centered card structure to all Journey milestones.  
\- Next actions:  
   • Implement map loop for all Journey elements.  
   • Add optional subtle timeline branch or vertical line for organic flow.  
   • Keep design minimal, no extra colors or icons, fully aligned with Islam | Future | Insight theme.  
   • Continue Codex instructions for About page details and future Writing block.

