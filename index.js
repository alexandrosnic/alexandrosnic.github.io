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
import { corePillars, domainMatrix, toolbox } from './skillset/data.js';

const { medium, gitConnected, gitRepo } = URLs;

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

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

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
      mediaHtml = `<img class="featured-media" src="images/projects/${project.image}" alt="${project.title}">`;
    }

    slide.innerHTML = `
      ${mediaHtml}
      <a href="${project.demoLink}" class="featured-link" aria-label="Open ${project.title}"></a>
      <div class="featured-caption">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    container.appendChild(slide);
  });

  // Auto-rotate
  let current = 0;
  const changeSlide = () => {
    const slides = container.querySelectorAll('.featured-slide');
    if (slides.length === 0) return;
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  };
  setInterval(changeSlide, 5000);
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

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  const count = 4; // Adjust this count based on the number of repos you want to display

  // Set up a wrapper div to hold repo cards in rows of 2
  const rowWrapper = document.createElement("div");
  rowWrapper.style =
    "display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between;";
  projectdesign.appendChild(rowWrapper);

  for (let i = 0; i < count; i++) {
    // Create elements for each repo card
    const repoCard = document.createElement("div");
    repoCard.className = "repo-card";
    repoCard.style = `
          flex: 1 0 48%;  /* Two cards in one row */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          background: linear-gradient(135deg, #ffdd99, #f9bf3f);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
          cursor: pointer;
      `;

    // Make the card clickable by wrapping the content inside an anchor tag
    const repoLink = document.createElement("a");
    repoLink.href = `https://github.com/${items[i].author}/${items[i].name}`;
    repoLink.target = "_blank";
    repoLink.style =
      "text-decoration: none; color: black; display: block; height: 100%;";

    repoCard.appendChild(repoLink);

    // Repository name
    const repoName = document.createElement("h4");
    repoName.className = "repo-heading";
    repoName.innerHTML = items[i].name;
    repoName.style = "margin: 0; font-size: 18px; font-weight: bold;";
    repoLink.appendChild(repoName);

    // Repository description
    const repoDescription = document.createElement("p");
    repoDescription.className = "repo-description";
    repoDescription.innerHTML = items[i].description;
    repoDescription.style = "margin-top: 8px; font-size: 12px; color: #555;";
    repoLink.appendChild(repoDescription);

    // Stats row (Language, Stars, Forks)
    const statsRow = document.createElement("div");
    statsRow.style = `
          display: flex; 
          align-items: center; 
          gap: 16px; 
          margin-top: 12px; 
          font-size: 12px; 
          color: #666;
      `;

    // Language
    const languageDiv = document.createElement("div");
    languageDiv.style = "display: flex; align-items: center; gap: 4px;";
    languageDiv.innerHTML = `
          <span style="width: 8px; height: 8px; background-color: #666; border-radius: 50%; display: inline-block;"></span>
          ${items[i].language}
      `;
    statsRow.appendChild(languageDiv);

    // Stars
    const starsDiv = document.createElement("div");
    starsDiv.style = "display: flex; align-items: center; gap: 4px;";
    starsDiv.innerHTML = `
          <img src="https://img.icons8.com/ios-filled/16/666666/star--v1.png" alt="Stars">
          ${items[i].stars}
      `;
    statsRow.appendChild(starsDiv);

    // Forks
    const forksDiv = document.createElement("div");
    forksDiv.style = "display: flex; align-items: center; gap: 4px;";
    forksDiv.innerHTML = `
          <img src="https://img.icons8.com/ios-filled/16/666666/code-fork.png" alt="Forks">
          ${items[i].forks}
      `;
    statsRow.appendChild(forksDiv);

    repoLink.appendChild(statsRow);

    // Add the repo card to the row wrapper
    rowWrapper.appendChild(repoCard);
  }
}

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

populateSkills(skills, "skills");

// fetchBlogsFromMedium(medium);
fetchReposFromGit(gitRepo);
fetchGitConnectedData(gitConnected);

const featured = getFeaturedProjects(projects);
populateFeaturedProjects(featured, 'featured-projects');
populateProjectsGallery(projects, featured, 'projects-gallery', 'show-more-projects');

// Skillset tiers
function populateCorePillars(items, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'skill-pillar-card';
    const mediaIsVideo = /\.(mp4|webm)$/i.test(item.media || '');
    const mediaHtml = mediaIsVideo
      ? `<video class="skill-pillar-media" autoplay muted loop playsinline preload="metadata"><source src="${item.media}" type="video/mp4" /></video>`
      : `<img class="skill-pillar-media" src="${item.media}" alt="${item.title}">`;
    card.innerHTML = `
      ${mediaHtml}
      <div class="skill-pillar-body">
        <h3 class="skill-pillar-title">${item.title}</h3>
        <p class="skill-pillar-text">${item.story}</p>
      </div>
    `;
    el.appendChild(card);
  });
}

function populateDomainMatrix(items, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'domain-card';
    card.innerHTML = `
      <div class="domain-card-header">
        <h4 class="domain-card-title">${item.title}</h4>
        <p class="domain-card-sub">${item.teaser}</p>
      </div>
      <div class="domain-card-body">
        <p style="margin:0 0 8px 0; font-size:13px; color:#333;">${item.description}</p>
        <div class="domain-card-tools">
          ${item.tools.map(t => `<span class="tool-chip">${t}</span>`).join('')}
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
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

console.log('About to populate experience:', experience);
populateExp_Edu(experience, "experience");
// populateTrekking(trekking);
console.log('About to populate education:', education);
populateExp_Edu(education, "education");

populateLinks(footer, "footer");

// Render skillset tiers after legacy list
populateCorePillars(corePillars, 'skills-core');
populateDomainMatrix(domainMatrix, 'skills-domain');
populateToolbox(toolbox, 'skills-toolbox');
