fetch('data.json')
  .then(res => res.json())
  .then(data => {
    document.title = data.title;
    document.body.style.backgroundColor = data.theme.backgroundColor;
    document.body.style.fontFamily = data.theme.font;

    const app = document.getElementById('app');

    // HERO
    const hero = data.sections.find(s => s.type === 'hero');
    app.innerHTML += `
      <section class="hero">
        <h1>${hero.heading}</h1>
        <p>${hero.subheading}</p>
        <img src="${hero.image}" alt="Hero Image">
        <br><br>
        <a href="${hero.cta.url}" class="contact-btn">${hero.cta.label}</a>
      </section>
    `;

    // FEATURES
    const features = data.sections.find(s => s.type === 'features');
    app.innerHTML += `
      <section>
        <div class="features">
          ${features.items.map(f => `
            <div class="feature">
              <h2>${f.icon} ${f.title}</h2>
              <p>${f.description}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // PORTFOLIO
    const portfolio = data.sections.find(s => s.type === 'portfolio');
    app.innerHTML += `
      <section>
        <h2>${portfolio.heading}</h2>
        <div class="portfolio">
          ${portfolio.items.map(p => `
            <div class="portfolio-item">
              <a href="${p.url}">
                <img src="${p.image}" alt="${p.title}">
                <h3>${p.title}</h3>
              </a>
            </div>
          `).join('')}
        </div>
      </section>
    `;

    // CONTACT
    const contact = data.sections.find(s => s.type === 'contact');
    app.innerHTML += `
      <section>
        <h2>${contact.heading}</h2>
        <p>${contact.description}</p>
        <div class="contact-buttons">
          ${contact.buttons.map(b => `<a href="${b.url}">${b.label}</a>`).join('')}
        </div>
      </section>
    `;

    // FOOTER
    const footer = data.footer;
    document.body.innerHTML += `
      <footer>
        <p>${footer.text}</p>
        ${footer.links.map(l => `<a href="${l.url}" style="color:white;margin:0 10px;">${l.label}</a>`).join('')}
      </footer>
    `;
  });
