'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// skill card click functionality
const skillItems = document.querySelectorAll(".skill-item");

// add click event to all skill items
for (let i = 0; i < skillItems.length; i++) {
  skillItems[i].addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    
    // Get the skill name from the span element
    const skillName = this.querySelector(".skill-name").textContent.toLowerCase();
    
    // Map skill names to blog IDs
    const skillToBlogMap = {
      'java': 'java-blog',
      'python': 'python-blog',
      'javascript': 'javascript-blog',
      'c': 'c-blog',
      'reactjs': 'reactjs-blog',
      'bootstrap 5': 'bootstrap-blog',
      'html5': 'html5-blog',
      'css3': 'css3-blog',
      'flask': 'flask-blog',
      'git': 'git-blog',
      'canva': 'canva-blog',
      'firebase': 'firebase-blog',
      'mysql': 'mysql-blog',
      'gcp': 'gcp-blog',
      'opencv': 'opencv-blog',
      'federated learning': 'federated-learning-blog',
      'yolo': 'yolo-blog',
      'pandas': 'pandas-blog',
      'communication': 'communication-blog',
      'team leadership': 'leadership-blog',
      'creativity': 'creativity-blog'
    };
    
    // Find the corresponding blog post
    const blogId = skillToBlogMap[skillName];
    if (blogId) {
      const blogPost = document.getElementById(blogId);
      if (blogPost) {
        // Navigate to blog section
        const blogPage = document.querySelector('[data-page="blog"]');
        let blogNavLink = null;
        
        // Find the blog nav link by checking its text content
        for (let i = 0; i < navigationLinks.length; i++) {
          if (navigationLinks[i].textContent.toLowerCase() === 'blog') {
            blogNavLink = navigationLinks[i];
            break;
          }
        }
        
        // Activate blog page
        pages.forEach(page => page.classList.remove("active"));
        blogPage.classList.add("active");
        
        // Activate blog nav link
        navigationLinks.forEach(link => link.classList.remove("active"));
        if (blogNavLink) blogNavLink.classList.add("active");
        
        // Scroll to the specific blog post
        setTimeout(() => {
          blogPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // Scroll to top of page
        window.scrollTo(0, 0);
      }
    }
  });
}

// portfolio modal variables
const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
const portfolioModalContainer = document.querySelector("[data-portfolio-modal-container]");
const portfolioModalCloseBtn = document.querySelector("[data-portfolio-modal-close-btn]");

// portfolio modal toggle function
const portfolioModalFunc = function () {
  portfolioModalContainer.classList.toggle("active");
}

// portfolio project data
const portfolioProjects = {
  'college-auction-website-frontend': {
    title: 'College Auction Website - Frontend',
    category: 'Web development',
    video: '<iframe src="https://www.loom.com/embed/6b6d81df45fc41e889b2861c75419f70" frameborder="0" allowfullscreen></iframe>',
    description: 'Frontend development of the college auction website using React.js. Features include responsive design, real-time bidding interface, user authentication forms, and interactive auction management dashboard. Built with modern React hooks, context API, and styled-components for a seamless user experience.',
    github: 'https://github.com/YOUR_USERNAME/college-auction-website',
    live: 'https://your-auction-website-demo.com'
  },
  'college-auction-website-backend': {
    title: 'College Auction Website - Backend',
    category: 'Web development',
    video: '<iframe src="https://www.loom.com/embed/6b6d81df45fc41e889b2861c75419f70" frameborder="0" allowfullscreen></iframe>',
    description: 'Backend API development using Node.js and Express.js. Implements RESTful APIs for auction management, user authentication with JWT, real-time communication using Socket.io for live bidding, and payment integration. Features include auction CRUD operations, user management, and real-time notifications.',
    github: 'https://github.com/YOUR_USERNAME/college-auction-website',
    live: 'https://your-auction-website-demo.com'
  },
  'college-auction-website-database': {
    title: 'College Auction Website - Database',
    category: 'Web development',
    video: '<iframe src="https://www.loom.com/embed/6b6d81df45fc41e889b2861c75419f70" frameborder="0" allowfullscreen></iframe>',
    description: 'Database design and implementation using MongoDB. Schema design for users, auctions, bids, and transactions. Features include data validation, indexing for performance optimization, and backup strategies. Implements secure data storage with encryption for sensitive information.',
    github: 'https://github.com/YOUR_USERNAME/college-auction-website',
    live: 'https://your-auction-website-demo.com'
  }
  // Add more projects here as needed
};

// add click event to all portfolio items
for (let i = 0; i < portfolioItems.length; i++) {
  portfolioItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    
    // Get project identifier from the data-project-section attribute or fallback to title
    const projectSection = this.getAttribute("data-project-section");
    let projectTitle = this.querySelector(".project-title").textContent.toLowerCase().replace(/\s+/g, '-');
    
    // If we have a section, use it to get the correct project key
    if (projectSection) {
      projectTitle = `college-auction-website-${projectSection}`;
    }
    
    const project = portfolioProjects[projectTitle];
    
    if (project) {
      // Update modal content
      document.querySelector("[data-portfolio-modal-title]").textContent = project.title;
      document.querySelector("[data-portfolio-modal-category]").textContent = project.category;
      document.querySelector("[data-portfolio-modal-video]").innerHTML = project.video;
      document.querySelector("[data-portfolio-modal-description]").textContent = project.description;
      document.querySelector("[data-portfolio-modal-github]").href = project.github;
      document.querySelector("[data-portfolio-modal-live]").href = project.live;
      
      // Show modal
      portfolioModalFunc();
    }
  });
}

// add click event to portfolio modal close button
portfolioModalCloseBtn.addEventListener("click", portfolioModalFunc);
portfolioModalContainer.addEventListener("click", function (e) {
  if (e.target === portfolioModalContainer) {
    portfolioModalFunc();
  }
});