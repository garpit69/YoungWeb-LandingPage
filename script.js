const data = [
  {
    "type": "hero",
    "title": "YoungWeb - Jasa Pembuatan Website Profesional",
    "subtitle": "Bangun identitas digital bisnis Anda dengan desain modern, responsif, dan memikat.",
    "image": "https://i.imgur.com/8k6Q2pJ.png",
    "ctaText": "Konsultasi Gratis",
    "ctaLink": "https://wa.me/6281234567890"
  },
  {
    "type": "about",
    "title": "Mengapa Memilih YoungWeb?",
    "description": "YoungWeb membantu UMKM, startup, dan perusahaan membangun website profesional yang cepat, aman, dan sesuai kebutuhan bisnis. Kami mengutamakan desain yang menarik, performa optimal, dan keamanan tingkat tinggi."
  },
  {
    "type": "features",
    "title": "Layanan Unggulan YoungWeb",
    "items": [
      { "icon": "🎨", "title": "Desain Premium", "description": "Tampilan elegan, responsif, dan sesuai identitas brand Anda." },
      { "icon": "⚡", "title": "Performa Optimal", "description": "Website cepat diakses dan ramah SEO untuk mendukung pemasaran online." },
      { "icon": "🔒", "title": "Keamanan Terjamin", "description": "Menggunakan teknologi SSL dan proteksi keamanan terkini." },
      { "icon": "📱", "title": "Mobile Friendly", "description": "Desain menyesuaikan semua ukuran layar." },
      { "icon": "🛒", "title": "Toko Online", "description": "Integrasi e-commerce untuk meningkatkan penjualan Anda." }
    ]
  },
  {
    "type": "portfolio",
    "title": "Portofolio Kami",
    "description": "Beberapa proyek yang telah kami selesaikan untuk klien dari berbagai industri.",
    "projects": [
      { "image": "https://i.imgur.com/m6S3z7V.png", "title": "Website Perusahaan", "link": "#" },
      { "image": "https://i.imgur.com/5cF7Hn8.png", "title": "Toko Online Fashion", "link": "#" },
      { "image": "https://i.imgur.com/OxGfEHO.png", "title": "Landing Page Startup", "link": "#" }
    ]
  },
  {
    "type": "testimonials",
    "title": "Apa Kata Klien Kami?",
    "items": [
      { "name": "Budi Santoso", "company": "PT Maju Jaya", "testimonial": "YoungWeb benar-benar membantu bisnis kami memiliki website profesional dan meningkatkan penjualan." },
      { "name": "Siti Rahma", "company": "Toko Online Hijab", "testimonial": "Desainnya keren, supportnya cepat, dan hasilnya sesuai harapan." }
    ]
  },
  {
    "type": "contact",
    "title": "Hubungi YoungWeb Sekarang",
    "description": "Siap memulai perjalanan digital Anda? Hubungi kami dan wujudkan website impian Anda.",
    "ctaText": "Hubungi via WhatsApp",
    "ctaLink": "https://wa.me/6281234567890",
    "email": "info@youngweb.id",
    "phone": "+62 812-3456-7890",
    "address": "Jl. Teknologi No. 123, Jakarta, Indonesia"
  }
];

function render() {
  const app = document.getElementById('app');

  data.forEach(section => {
    let html = '';

    if (section.type === 'hero') {
      html = `
        <section class="hero">
          <h1>${section.title}</h1>
          <p>${section.subtitle}</p>
          <img src="${section.image}" alt="${section.title}">
          <br>
          <a class="cta-btn" href="${section.ctaLink}">${section.ctaText}</a>
        </section>
      `;
    }

    if (section.type === 'about') {
      html = `
        <section>
          <h2>${section.title}</h2>
          <p>${section.description}</p>
        </section>
      `;
    }

    if (section.type === 'features') {
      html = `
        <section>
          <h2>${section.title}</h2>
          <div class="features">
            ${section.items.map(item => `
              <div class="feature-item">
                <h3>${item.icon} ${item.title}</h3>
                <p>${item.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (section.type === 'portfolio') {
      html = `
        <section>
          <h2>${section.title}</h2>
          <p>${section.description}</p>
          <div class="portfolio">
            ${section.projects.map(p => `
              <div class="portfolio-item">
                <img src="${p.image}" alt="${p.title}">
                <h3>${p.title}</h3>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (section.type === 'testimonials') {
      html = `
        <section>
          <h2>${section.title}</h2>
          <div class="testimonials">
            ${section.items.map(t => `
              <div class="testimonial-item">
                <p>"${t.testimonial}"</p>
                <strong>- ${t.name}, ${t.company}</strong>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }

    if (section.type === 'contact') {
      html = `
        <section class="contact">
          <h2>${section.title}</h2>
          <p>${section.description}</p>
          <a class="cta-btn" href="${section.ctaLink}">${section.ctaText}</a>
          <p>Email: ${section.email}</p>
          <p>Telp: ${section.phone}</p>
          <p>Alamat: ${section.address}</p>
        </section>
      `;
    }

    app.innerHTML += html;
  });
}

render();
