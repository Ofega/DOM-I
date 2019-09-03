const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },

  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },

  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },

  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


function setImage() {
  const logo = document.getElementById("logo-img");
  const ctaImage = document.getElementById("cta-img");
  const middleImage = document.getElementById("middle-img");

  // Set images src
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
  middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
}

function createNewLink() {
  const newLink = document.createElement('a');
  const nav = document.querySelector('nav');

  newLink.textContent = 'Contact';
  newLink.setAttribute('href', '#');
  newLink.style.color = 'green';

  nav.appendChild(newLink);
}

function setNavigation() {
  const navLinks = document.querySelectorAll('nav a');

  // Show each nav link and give green color
  navLinks.forEach((link, index) => {
    link.textContent = siteContent['nav'][`nav-item-${index}`];
    link.style.color = 'green';
  })
  
  createNewLink();
}

function updateCTA() {
  const ctaContentHeader = document.querySelector(".cta-text h1");
  const ctaContentButton = document.querySelector(".cta-text button"); 

  // Update cta content
  ctaContentHeader.innerHTML = `DOM<br> Is<br> Awesome`;
  ctaContentButton.textContent = siteContent['cta']['button'];
}

function updateMain() {
  const mainContentArray = document.querySelectorAll(".text-content");
  const idArray = ["features", "about", "services", "product", "vision"];

  // Update content for the children of text content
  mainContentArray.forEach((item, index) => {
    item.children[0].textContent = siteContent['main-content'][`${idArray[index]}-h4`];
    item.children[1].textContent = siteContent['main-content'][`${idArray[index]}-content`];
  })
}

function updateContact() {
  const contactHeading = document.querySelector('.contact h4');
  const contactTexts = document.querySelectorAll('.contact p');

  // Update content for contact
  contactHeading.textContent = siteContent['contact']['contact-h4'];
  contactTexts[0].innerHTML = `123 Way 456 Street<br> Somewhere, USA`;
  contactTexts[1].textContent = siteContent['contact']['phone'];
  contactTexts[2].textContent = siteContent['contact']['email'];
}

function updateFooter() {
  const footerText = document.querySelector('footer p');

  // Update footer content
  footerText.textContent = siteContent['footer']['copyright'];
}

function init() {
  let isUpdated = false;
  const toggleBtn = document.createElement('button');

  toggleBtn.style = 'position:fixed;top:0;left:0';
  toggleBtn.textContent = 'Update Content';

  toggleBtn.addEventListener('click', function() {
    if(isUpdated) {
      alert('Page is already updated')
    } else {
      setImage();
      setNavigation();
      updateCTA();
      updateMain();
      updateContact();
      updateFooter();
      isUpdated = true;
    }
  })

  document.body.prepend(toggleBtn);
}

init();
  




