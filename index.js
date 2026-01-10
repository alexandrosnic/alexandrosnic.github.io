import {
  bio,
  skills,
  education,
  experience,
  // trekking,
  footer,
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";

import { projects } from './user-data/projects.js';
import { heroProjects } from './user-data/hero-projects.js';
import { carouselMedia } from './user-data/carousel.js';
import { corePillars, domainMatrix, toolbox } from './skillset/data.js';

const { medium, gitConnected } = URLs;

// async function fetchBlogsFromMedium(url) {
//   try {
//     const response = await fetch(url);
//     const { items } = await response.json();
//     populateBlogs(items, "blogs");
//   } catch (error) {
//     throw new Error(
//       `Error in fetching the blogs from Medium profile: ${error}`
//     );
//   }
// }

// Removed repos fetching

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    const { basics } = await response.json();
    // populateBlogs(items, "blogs");
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  // added title of page
  window.parent.document.title = name;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

function populateTrekking(items) {
  const skillsTag = document.getElementById('trekking');
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

function populateBlogs(items, id) {
  const projectdesign = document.getElementById(id);
  const count = 3; // Number of blogs to display

  for (let i = 0; i < count; i++) {
      // Create a wrapper for the blog card
      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";
      blogCard.style = `
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          background: linear-gradient(135deg, rgb(255, 221, 153), rgb(249, 191, 63));
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          min-height: 150px;
          cursor: pointer;
      `;

      // Wrap the card content in an anchor tag
      const blogLink = document.createElement("a");
      blogLink.href = items[i].link;
      blogLink.target = "_blank";
      blogLink.style = "text-decoration: none; color: black; display: block;";

      blogCard.appendChild(blogLink);

      // Blog Title
      const blogTitle = document.createElement("h4");
      blogTitle.className = "blog-heading";
      blogTitle.innerHTML = items[i].title;
      blogTitle.style = "margin: 0 0 8px; font-size: 18px; font-weight: bold;";
      blogLink.appendChild(blogTitle);

      // Publish Date
      const pubDateEle = document.createElement("p");
      pubDateEle.className = "publish-date";
      pubDateEle.innerHTML = getBlogDate(items[i].pubDate);
      pubDateEle.style = "margin: 0 0 12px; font-size: 12px; color: #555;";
      blogLink.appendChild(pubDateEle);

      // Blog Description
      const blogDescription = document.createElement("p");
      blogDescription.className = "blog-description";
      const html = items[i].content;
      const [, doc] = /<p>(.*?)<\/p>/g.exec(html) || [];
      blogDescription.innerHTML = doc;
      blogDescription.style = "margin: 0 0 12px; font-size: 12px; color: #000;";
      blogLink.appendChild(blogDescription);

      // Categories (Tags)
      const categoriesDiv = document.createElement("div");
      categoriesDiv.style = "display: flex; gap: 8px; margin-top: 12px;";

      for (const category of items[i].categories) {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.innerHTML = category;
          badge.style = `
              font-size: 12px;
              padding: 4px 8px;
              background-color: #007acc;
              color: white;
              border-radius: 4px;
          `;
          categoriesDiv.appendChild(badge);
      }

      blogLink.appendChild(categoriesDiv);

      // Append the blog card to the container
      projectdesign.appendChild(blogCard);
  }
}


function populateProjects(items, id) {
  const container = document.getElementById(id);
  items.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-md-4 animate-box';
    projectCard.innerHTML = `
      <div class="project-card">
        <img src="images/projects/${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.demoLink}" class="btn btn-primary">View Project</a>
          <a href="${project.sourceLink}" class="btn btn-secondary">Source Code</a>
        </div>
      </div>
    `;
    container.appendChild(projectCard);
    const viewBtn = projectCard.querySelector('.btn.btn-primary');
    if (viewBtn && project.demoLink) {
      viewBtn.addEventListener('click', (e) => { e.preventDefault(); openProjectOverlay(project.demoLink); });
    }
  });
}

// New: Featured carousel (3-4 projects, rotate every ~5s)
function getFeaturedProjects(items) {
  const featured = items.filter(p => p.featured);
  if (featured.length > 0) {
    return featured.slice(0, 4);
  }
  return items.slice(0, Math.min(4, items.length));
}

function populateFeaturedProjects(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container || items.length === 0) return;

  container.innerHTML = '';

  items.forEach((project, idx) => {
    const slide = document.createElement('div');
    slide.className = `featured-slide${idx === 0 ? ' active' : ''}`;

    // image vs video support
    let mediaHtml = '';
    if (project.video) {
      mediaHtml = `
        <video class="featured-media" autoplay muted loop playsinline preload="metadata">
          <source src="${project.video}" type="video/mp4" />
        </video>
      `;
    } else {
      const imgSrc = project.imageFullPath
        ? project.imageFullPath
        : `images/projects/${project.image}`;
      mediaHtml = `<img class="featured-media" src="${imgSrc}" alt="${project.title}">`;
    }

    slide.innerHTML = `
      ${mediaHtml}
      <div class="featured-caption">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    container.appendChild(slide);
  });

  // Navigation controls (prev/next)
  const prevBtn = document.createElement('button');
  prevBtn.className = 'featured-nav featured-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.innerHTML = '<i class="fa fa-chevron-left"></i>';
  const nextBtn = document.createElement('button');
  nextBtn.className = 'featured-nav featured-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.innerHTML = '<i class="fa fa-chevron-right"></i>';
  container.appendChild(prevBtn);
  container.appendChild(nextBtn);

  // Dot indicators
  const dots = document.createElement('div');
  dots.className = 'featured-dots';
  const slides = container.querySelectorAll('.featured-slide');
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `featured-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dots.appendChild(dot);
  });
  container.appendChild(dots);

  // State + helpers
  let current = 0;
  function renderActive() {
    slides.forEach((s, i) => {
      if (i === current) s.classList.add('active');
      else s.classList.remove('active');
    });
    const dotEls = dots.querySelectorAll('.featured-dot');
    dotEls.forEach((d, i) => {
      if (i === current) d.classList.add('active');
      else d.classList.remove('active');
    });
  }

  function goto(index) {
    const total = slides.length;
    current = ((index % total) + total) % total; // normalize
    renderActive();
  }

  // Wire controls
  prevBtn.addEventListener('click', () => goto(current - 1));
  nextBtn.addEventListener('click', () => goto(current + 1));
  dots.querySelectorAll('.featured-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => goto(i));
  });

  // Auto-rotate
  const changeSlide = () => goto(current + 1);
  const intervalMs = Number(container?.dataset?.interval) || 10000; // allow override via data-interval
  setInterval(changeSlide, intervalMs);
}

// New: Gallery with show-more
function populateProjectsGallery(items, featuredItems, galleryId, toggleBtnId) {
  const gallery = document.getElementById(galleryId);
  const toggleBtn = document.getElementById(toggleBtnId);
  if (!gallery || !toggleBtn) return;

  // Exclude featured from gallery
  const featuredTitles = new Set(featuredItems.map(p => p.title));
  const rest = items.filter(p => !featuredTitles.has(p.title));

  // Render all but control visibility
  gallery.innerHTML = '';
  rest.forEach((project, idx) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 animate-box gallery-item';
    // Initially only show first 3
    if (idx >= 3) col.classList.add('collapsed');
    col.innerHTML = `
      <div class="project-card">
        <img src="images/projects/${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.demoLink}" class="btn btn-primary">View Project</a>
          <a href="${project.sourceLink}" class="btn btn-secondary">Source Code</a>
        </div>
      </div>
    `;
    gallery.appendChild(col);
    const viewBtn = col.querySelector('.btn.btn-primary');
    if (viewBtn && project.demoLink) {
      viewBtn.addEventListener('click', (e) => { e.preventDefault(); openProjectOverlay(project.demoLink); });
    }
  });

  // Toggle behavior
  let expanded = false;
  toggleBtn.onclick = () => {
    expanded = !expanded;
    toggleBtn.innerText = expanded ? 'Show Less' : 'Show More';
    gallery.querySelectorAll('.gallery-item.collapsed').forEach(el => {
      el.style.display = expanded ? '' : 'none';
    });
  };

  // Apply initial collapsed state
  gallery.querySelectorAll('.gallery-item.collapsed').forEach(el => {
    el.style.display = 'none';
  });
}

// Removed repos rendering function

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  // Add debugging
  // console.log(`Attempting to populate ${id}`);
  // console.log('Container:', mainContainer);
  // console.log('Items:', items);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("span");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    for (let j = 0; j < items[i].details.length; j++) {
      let pTimelineText = document.createElement("p");
      pTimelineText.className = "timeline-text";
      pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
      divTimelineLabel.append(pTimelineText);
    }

    let divTags = document.createElement("div");
    for (let j = 0; j < items[i].tags.length; j++) {
      let spanTags = document.createElement("span");
      spanTags.className = "badge";
      spanTags.innerHTML = items[i].tags[j];
      divTags.append(spanTags);
    }
    divTimelineLabel.append(divTags);

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  let divTimelineIcon = document.createElement("div");
  divTimelineIcon.className = "timeline-icon color-2";

  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box";
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}

function populateLinks(items, id) {
  let footer = document.getElementById(id);

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let span = document.createElement("span");
      span.className = "col";

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      span.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        if (data.link) {
          a.href = data.link;
          a.target = "_blank";
        }
        if (data.func) {
          a.setAttribute("onclick", data.func);
        }
        a.innerHTML = data.text;

        // Style Links entries as buttons for better visibility
        if (item.label && item.label.toLowerCase() === "links") {
          a.className = "hero-btn footer-btn";
        }

        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      span.append(nav);
      footer.append(span);
    }

    if (item.label === "copyright-text") {
      let div = document.createElement("div");
      div.className = "copyright-text no-print";
      item.data.forEach(function (copyright) {
        let p = document.createElement("p");
        p.innerHTML = copyright;
        div.append(p);
      });
      footer.append(div);
    }
  });
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}

populateBio(bio, "bio");

// Legacy skills list removed in favor of unified skills grid

// fetchBlogsFromMedium(medium);
// Removed Top Repositories rendering
fetchGitConnectedData(gitConnected);

// Render Hero Projects (4 cards)
function populateHeroProjects(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn('[HeroProjects] Container not found:', containerId);
    return;
  }
  if (!items || items.length === 0) {
    console.warn('[HeroProjects] No items to render');
    return;
  }

  container.innerHTML = '';
  items.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'hero-card';

    // Media: support optional video
    let mediaHtml = '';
    if (p.media && p.media.video) {
      mediaHtml = `<video class="hero-media" autoplay muted loop playsinline preload="metadata"><source src="${p.media.video}" type="video/mp4" /></video>`;
    } else if (p.media && p.media.image) {
      mediaHtml = `<img class="hero-media" src="${p.media.image}" alt="${p.title}">`;
    } else {
      mediaHtml = `<div class="hero-media"></div>`;
    }

    const chips = (p.techStack || []).map(t => `<span class="hero-chip">${t}</span>`).join('');

    card.innerHTML = `
      ${mediaHtml}
      <a href="${p.demoLink}" class="hero-link" aria-label="Open ${p.title}"></a>
      <div class="hero-content">
        <h3 class="hero-title">${p.title}</h3>
        <p class="hero-subtitle">${p.subtitle}</p>
        <p class="hero-narrative">${p.narrative}</p>
        <div class="hero-tech">${chips}</div>
      </div>
    `;
    container.appendChild(card);
    const heroLink = card.querySelector('.hero-link');
    if (heroLink && p.demoLink) {
      heroLink.addEventListener('click', (e) => { e.preventDefault(); openProjectOverlay(p.demoLink); });
    }
  });
}

console.log('[HeroProjects] Rendering', heroProjects?.length, 'items into #hero-projects');
populateHeroProjects(heroProjects, 'hero-projects');

// Gallery removed: show only Hero Projects
// New: About carousel gallery
try {
  const forCarousel = (carouselMedia || []).map(item => ({
    ...item,
    imageFullPath: item.image ? `images/carousel/${item.image}` : undefined
  }));
  populateFeaturedProjects(forCarousel, 'about-carousel');
} catch (e) {
  console.warn('[AboutCarousel] Failed to initialize carousel:', e);
}

// Unified skills grid: merge core pillars and domain skills and open overlay on click
function populateSkillsGrid(coreItems, domainItems, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const items = [...coreItems, ...domainItems];
  el.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'domain-card';
    card.innerHTML = `
      <div class="domain-card-header">
        <h4 class="domain-card-title">${item.title}</h4>
      </div>
    `;
    card.addEventListener('click', () => {
      if (item.overlayFile) openSkillOverlay(item.overlayFile);
    });
    el.appendChild(card);
  });
}

function populateToolbox(items, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  items.forEach(t => {
    const chip = document.createElement('span');
    chip.className = 'toolbox-chip';
    chip.innerHTML = `<i class="${t.icon}"></i>${t.label}`;
    el.appendChild(chip);
  });
}

// Overlay logic for skill pages: strip Links and add icons to tools
function openSkillOverlay(filePath) {
  const overlay = document.getElementById('skill-overlay');
  const body = document.getElementById('skill-overlay-body');
  if (!overlay || !body) return;

  body.innerHTML = '<p style="margin:8px 0;color:#666;">Loading…</p>';
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');

  fetch(filePath, { credentials: 'same-origin' })
    .then(r => r.text())
    .then(html => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;

      const titleEl = tmp.querySelector('.project-title');
      const imageEl = tmp.querySelector('.project-overlay-image') || tmp.querySelector('.project-image');
      const descEl = tmp.querySelector('.project-description');

      const title = titleEl ? titleEl.outerHTML : '';
      const image = imageEl ? imageEl.outerHTML : '';
      const description = descEl ? descEl.outerHTML : html;

      body.innerHTML = `${title}${image}${description}`;
      // Remove Links sections
      body.querySelectorAll('.project-links').forEach(el => el.remove());
      body.querySelectorAll('h2').forEach(h => {
        if (h.textContent.trim().toLowerCase() === 'links') h.remove();
      });
      body.querySelectorAll('a').forEach(a => a.remove());

      // Remove empty elements (including NBSP) that can create extra whitespace
      body.querySelectorAll('p, h1, h2, h3, div, section').forEach(el => {
        const text = (el.textContent || '').replace(/\u00a0/g, '').trim();
        const hasImg = el.querySelector('img');
        const hasList = el.querySelector('ul, ol');
        if (!text && !hasImg && !hasList) el.remove();
      });

      // Remove stray <br> tags that add vertical gaps
      body.querySelectorAll('br').forEach(br => br.remove());

      // Normalize trailing margins to avoid large white gaps
      body.style.marginBottom = '0';
      if (body.lastElementChild) body.lastElementChild.style.marginBottom = '0';

      // Add icons to tools list items
      const iconMap = {
        'linux': 'fa fa-linux',
        'c++': 'fa fa-code',
        'python': 'fa fa-code',
        'ros': 'fa fa-cog',
        'ros1': 'fa fa-cog',
        'ros2': 'fa fa-cog',
        'opencv': 'fa fa-eye',
        'pcl': 'fa fa-cubes',
        'docker': 'fa fa-cubes',
        'solidworks': 'fa fa-cube',
        'gazebo': 'fa fa-cubes',
        'webots': 'fa fa-cubes',
        'isaac sim': 'fa fa-rocket',
        'camera': 'fa fa-camera',
        'realsense': 'fa fa-eye',
        'oak-d': 'fa fa-eye',
        'yolo': 'fa fa-eye',
        'vlm': 'fa fa-eye',
        'urdf': 'fa fa-cube',
        'pid': 'fa fa-sliders',
        'mpc': 'fa fa-sliders',
        'lqr': 'fa fa-sliders',
        'ekf': 'fa fa-sliders',
        'ukf': 'fa fa-sliders',
        'can': 'fa fa-exchange'
      };
      const toolLis = body.querySelectorAll('.tech-stack li');
      toolLis.forEach(li => {
        const text = li.textContent.trim().toLowerCase();
        const key = Object.keys(iconMap).find(k => text.includes(k));
        const cls = key ? iconMap[key] : 'fa fa-cog';
        li.innerHTML = `<i class="${cls}" style="margin-right:6px;"></i>${li.textContent.trim()}`;
      });
    })
    .catch(err => {
      body.innerHTML = `<p style="color:#b00020;">Failed to load skill content: ${err}</p>`;
    });
}

function closeSkillOverlay() {
  const overlay = document.getElementById('skill-overlay');
  const body = document.getElementById('skill-overlay-body');
  if (!overlay || !body) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  body.innerHTML = '';
}

// Wire overlay close behavior
(function initSkillOverlayControls() {
  const overlay = document.getElementById('skill-overlay');
  const closeBtn = document.getElementById('skill-overlay-close');
  if (closeBtn) closeBtn.addEventListener('click', closeSkillOverlay);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSkillOverlay();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeSkillOverlay();
    });
  }
})();
// CV overlay controls
function openCvOverlay() {
  const overlay = document.getElementById('cv-overlay');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeCvOverlay() {
  const overlay = document.getElementById('cv-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

(function initCvOverlayControls() {
  const overlay = document.getElementById('cv-overlay');
  const closeBtn = document.getElementById('cv-overlay-close');
  const trigger = document.getElementById('cv-nav-link');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openCvOverlay();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeCvOverlay);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCvOverlay();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeCvOverlay();
    });
  }
})();

// Overlay logic for project pages (keeps project links)
function openProjectOverlay(filePath) {
  const overlay = document.getElementById('project-overlay');
  const body = document.getElementById('project-overlay-body');
  if (!overlay || !body) return;

  body.innerHTML = '<p style="margin:8px 0;color:#666;">Loading…</p>';
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');

  fetch(filePath, { credentials: 'same-origin' })
    .then(r => r.text())
    .then(html => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;

      // Render the full project details as-is to allow custom placement
      const detailsEl = tmp.querySelector('.project-details');
      const contentHtml = detailsEl ? detailsEl.innerHTML : html;
      body.innerHTML = contentHtml;

      // Normalize relative src/href paths to work from index.html
      try {
        const baseDir = (filePath.includes('/') ? filePath.split('/').slice(0, -1).join('/') : '') + '/';
        const isAbsolute = (u) => /^(?:[a-z]+:)?\/\//i.test(u) || u.startsWith('/') || u.startsWith('#') || u.startsWith('mailto:') || u.startsWith('tel:');
        const normalize = (u) => {
          if (!u) return u;
          if (isAbsolute(u)) return u;
          if (u.startsWith('../')) return u.replace(/^\.\.\//, '');
          if (u.startsWith('./')) return (baseDir + u.replace(/^\.\//, ''));
          // plain relative (e.g., "autonomous-driving.html") should be under the same folder as the project file
          return baseDir + u;
        };
        body.querySelectorAll('img[src], video[src], source[src], a[href]').forEach(el => {
          const attr = el.hasAttribute('src') ? 'src' : 'href';
          const val = el.getAttribute(attr);
          const newVal = normalize(val);
          if (newVal !== val) el.setAttribute(attr, newVal);
        });
      } catch (_) { /* no-op */ }

      // Clean up empty elements and stray <br>, but preserve media blocks
      body.querySelectorAll('p, h1, h2, h3, div, section').forEach(el => {
        const text = (el.textContent || '').replace(/\u00a0/g, '').trim();
        const hasImg = el.querySelector('img');
        const hasVideo = el.querySelector('video');
        const hasList = el.querySelector('ul, ol');
        if (!text && !hasImg && !hasVideo && !hasList) el.remove();
      });
      body.querySelectorAll('br').forEach(br => br.remove());
      body.style.marginBottom = '0';
      if (body.lastElementChild) body.lastElementChild.style.marginBottom = '0';

      // Add icons to tools list items if present
      const iconMap = {
        'linux': 'fa fa-linux',
        'c++': 'fa fa-code',
        'python': 'fa fa-code',
        'ros': 'fa fa-cog',
        'ros1': 'fa fa-cog',
        'ros2': 'fa fa-cog',
        'opencv': 'fa fa-eye',
        'pcl': 'fa fa-cubes',
        'docker': 'fa fa-cubes',
        'solidworks': 'fa fa-cube',
        'gazebo': 'fa fa-cubes',
        'webots': 'fa fa-cubes',
        'isaac sim': 'fa fa-rocket',
        'camera': 'fa fa-camera',
        'realsense': 'fa fa-eye',
        'oak-d': 'fa fa-eye',
        'yolo': 'fa fa-eye',
        'vlm': 'fa fa-eye',
        'urdf': 'fa fa-cube',
        'pid': 'fa fa-sliders',
        'mpc': 'fa fa-sliders',
        'lqr': 'fa fa-sliders',
        'ekf': 'fa fa-sliders',
        'ukf': 'fa fa-sliders',
        'can': 'fa fa-exchange'
      };
      const toolLis = body.querySelectorAll('.tech-stack li');
      toolLis.forEach(li => {
        const text = li.textContent.trim().toLowerCase();
        const key = Object.keys(iconMap).find(k => text.includes(k));
        const cls = key ? iconMap[key] : 'fa fa-cog';
        li.innerHTML = `<i class="${cls}" style="margin-right:6px;"></i>${li.textContent.trim()}`;
      });
    })
    .catch(err => {
      body.innerHTML = `<p style="color:#b00020;">Failed to load project content: ${err}</p>`;
    });
}

function closeProjectOverlay() {
  const overlay = document.getElementById('project-overlay');
  const body = document.getElementById('project-overlay-body');
  if (!overlay || !body) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  body.innerHTML = '';
}

(function initProjectOverlayControls() {
  const overlay = document.getElementById('project-overlay');
  const closeBtn = document.getElementById('project-overlay-close');
  if (closeBtn) closeBtn.addEventListener('click', closeProjectOverlay);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProjectOverlay();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeProjectOverlay();
    });
  }
})();

// Show a friendly banner when opened from disk to explain missing dynamic content
(function initFileOriginBanner() {
  try {
    if (location && location.protocol === 'file:') {
      const container = document.querySelector('.colorlib-about .colorlib-narrow-content')
        || document.getElementById('colorlib-main');
      if (container) {
        const banner = document.createElement('div');
        banner.style.background = '#fff3cd';
        banner.style.border = '1px solid #ffeeba';
        banner.style.color = '#856404';
        banner.style.padding = '10px 12px';
        banner.style.margin = '10px 0 20px 0';
        banner.style.borderRadius = '4px';
        banner.textContent = 'Viewing from disk (file://). Some content loads via fetch; for full experience, run a local server.';
        container.insertBefore(banner, container.firstChild);
      }
    }
  } catch (_) {
    // no-op
  }
})();

/* Duplicate overlay block removed */

console.log('About to populate experience:', experience);
populateExp_Edu(experience, "experience");
// populateTrekking(trekking);
console.log('About to populate education:', education);
populateExp_Edu(education, "education");

// Removed Achievements rendering

populateLinks(footer, "footer");

// Render skillset tiers after legacy list
populateSkillsGrid(corePillars, domainMatrix, 'skills-grid');
populateToolbox(toolbox, 'skills-toolbox');

// Rotating hero roles
(function initHeroRotator() {
  const target = document.getElementById('hero-rotating');
  if (!target) return;
  const roles = [
    'Robotics Engineer',
    'Simulation Developer',
    'Mechanical Engineer',
    'Mechanical Designer',
    'Music Artist'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  const typeDelay = 80;   // ms per character
  const eraseDelay = 40;  // ms per character when erasing

  function type() {
    const word = roles[wordIndex];
    if (charIndex < word.length) {
      target.textContent = word.slice(0, charIndex + 1) + '_';
      charIndex++;
      setTimeout(type, typeDelay);
    } else {
      // Pause for 1s before starting to erase
      setTimeout(erase, 1000);
    }
  }

  function erase() {
    const word = roles[wordIndex];
    if (charIndex > 0) {
      target.textContent = word.slice(0, charIndex - 1) + '_';
      charIndex--;
      setTimeout(erase, eraseDelay);
    } else {
      // Move to next word and begin typing immediately
      wordIndex = (wordIndex + 1) % roles.length;
      setTimeout(type, typeDelay);
    }
  }

  // Initialize with cursor underscore
  target.textContent = '_';
  setTimeout(type, typeDelay);
})();

