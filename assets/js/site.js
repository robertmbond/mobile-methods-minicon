(function () {
  const data = window.SITE_DATA;

  function pathName() {
    const file = window.location.pathname.split('/').pop();
    return file || 'index.html';
  }

  function setMetaDefaults() {
    const title = document.body.dataset.pageTitle || data.conference.title;
    const description =
      document.body.dataset.pageDescription ||
      `${data.conference.title} (${data.conference.dates}) — ${data.conference.tagline}`;

    document.title = `${title} | ${data.conference.title}`;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.content = description;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = `${title} | ${data.conference.title}`;

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = description;
  }

  function renderHeader() {
    const mount = document.querySelector('[data-site-header]');
    if (!mount) return;

    const navLinks = data.nav
      .map(
        (item) =>
          `<li><a href="${item.href}" ${pathName() === item.href ? 'aria-current="page"' : ''}>${item.label}</a></li>`
      )
      .join('');

    mount.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${data.conference.title} home">
            <span class="brand-mark" aria-hidden="true">◍</span>
            <span>${data.conference.title}</span>
          </a>
          <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
          <nav id="site-nav" class="site-nav" aria-label="Primary">
            <ul>${navLinks}</ul>
          </nav>
        </div>
      </header>
    `;

    const toggle = mount.querySelector('.menu-toggle');
    const nav = mount.querySelector('.site-nav');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  function renderFooter() {
    const mount = document.querySelector('[data-site-footer]');
    if (!mount) return;
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <p><strong>${data.conference.title}</strong></p>
          <p>${data.conference.dates}</p>
          <p>${data.conference.hostLine}</p>
        </div>
      </footer>
    `;
  }

  function initRegistrationCtas() {
    document.querySelectorAll('[data-register-cta]').forEach((cta) => {
      const isReady = data.conference.rsvpReady;
      cta.textContent = isReady ? 'Register for May 1' : 'RSVP link coming soon';
      if (isReady) {
        cta.href = data.conference.rsvpUrl;
      } else {
        cta.href = '#';
        cta.setAttribute('aria-disabled', 'true');
        cta.classList.add('disabled');
      }
    });
  }

  function renderSpeakers() {
    const mount = document.querySelector('[data-speaker-grid]');
    if (!mount) return;
    mount.innerHTML = data.speakers
      .map(
        (speaker) => `
          <article class="card person-card">
            <img src="${speaker.image}" alt="${speaker.alt || `Headshot of ${speaker.name}`}" loading="lazy" data-speaker-image />
            <div class="card-body">
              <h3>${speaker.name}</h3>
              <p class="muted">${speaker.affiliation}</p>
              <p>${speaker.bio}</p>
            </div>
          </article>
        `
      )
      .join('');

    mount.querySelectorAll('[data-speaker-image]').forEach((image) => {
      image.addEventListener('error', () => {
        image.src = 'assets/images/speaker-placeholder.svg';
      });
    });
  }

  function renderOrganizers() {
    const mount = document.querySelector('[data-organizer-grid]');
    if (!mount) return;
    mount.innerHTML = data.organizers
      .map(
        (person) => `
          <article class="card person-card">
            <img src="${person.image}" alt="${person.alt}" loading="lazy" style="object-position: ${person.focus || '50% 35%'}; object-fit: ${person.fit || 'cover'}" data-organizer-image />
            <div class="card-body">
              <h3>${person.name}</h3>
              <p class="muted">${person.title}</p>
              <p>${person.bio}</p>
            </div>
          </article>
        `
      )
      .join('');

    mount.querySelectorAll('[data-organizer-image]').forEach((image) => {
      image.addEventListener('error', () => {
        image.src = 'assets/images/organizer-placeholder.svg';
      });
    });
  }

  function renderVenues() {
    const day1 = document.querySelector('[data-venue-day1]');
    if (day1) {
      day1.innerHTML = `
        <h2>${data.venues.day1.name}</h2>
        <p>${data.venues.day1.blurb}</p>
        <div class="venue-map" aria-label="Map showing the Day 1 venue location">
          <iframe
            src="${data.venues.day1.mapEmbedUrl}"
            title="Map for ${data.venues.day1.name}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
        <a class="button button-secondary" href="${data.venues.day1.link}" target="_blank" rel="noopener noreferrer">Visit Venue Website</a>
      `;
    }
  }

  setMetaDefaults();
  renderHeader();
  renderFooter();
  initRegistrationCtas();
  renderSpeakers();
  renderOrganizers();
  renderVenues();
})();
