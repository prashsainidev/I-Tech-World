function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
    return;
  }

  callback();
}

function scrollAppear() {
  var introText = document.querySelector(".side-text");
  var sideImage = document.querySelector(".sideImage");

  if (!introText || !sideImage) {
    return;
  }

  var screenPosition = window.innerHeight / 1.2;

  if (introText.getBoundingClientRect().top < screenPosition) {
    introText.classList.add("side-text-appear");
  }

  if (sideImage.getBoundingClientRect().top < screenPosition) {
    sideImage.classList.add("sideImage-appear");
  }
}

function updateNavbarShadow() {
  var nav = document.querySelector("nav");

  if (!nav) {
    return;
  }

  nav.classList.toggle("black", window.scrollY > 10);
}

var lastScrollY = 0;
function updateNavbarVisibility() {
  var nav = document.querySelector("nav");

  if (!nav) {
    return;
  }

  var currentScrollY = window.scrollY;
  var isScrollingDown = currentScrollY > lastScrollY;
  var shouldHide = isScrollingDown && currentScrollY > 120;

  nav.classList.toggle("nav-hidden", shouldHide);
  lastScrollY = currentScrollY;
}

function searchCourses() {
  var input = document.getElementById("searchInput");
  var resultsBox = document.getElementById("searchResults");

  if (!input || !resultsBox) {
    return;
  }

  var query = input.value.trim().toLowerCase();

  if (!query) {
    resultsBox.innerHTML = "";
    resultsBox.classList.remove("active");
    return;
  }

  var searchableLinks = Array.from(
    document.querySelectorAll("a[href]")
  ).filter(function (link) {
    var href = link.getAttribute("href");
    var text = link.textContent.trim();

    return href && text && href !== "#";
  });

  var uniqueMatches = [];
  var seen = new Set();

  searchableLinks.forEach(function (link) {
    var text = link.textContent.trim().toLowerCase();
    var href = link.getAttribute("href");
    var key = text + "::" + href;

    if (!text.includes(query) || seen.has(key)) {
      return;
    }

    seen.add(key);
    uniqueMatches.push(link);
  });

  var matches = uniqueMatches.slice(0, 6);

  if (!matches.length) {
    resultsBox.innerHTML = '<p class="search-empty">No matching sections found.</p>';
    resultsBox.classList.add("active");
    return;
  }

  resultsBox.innerHTML = matches.map(function (link) {
    return '<a href="' + link.getAttribute("href") + '">' + link.textContent.trim() + "</a>";
  }).join("");
  resultsBox.classList.add("active");
}

var i = 2;
function switchTAB() {
  var list = document.getElementById("list-switch");
  var search = document.getElementById("search-switch");

  if (!list || !search) {
    return;
  }

  if (i % 2 === 0) {
    list.style = "display: grid; height: 50vh; margin-left: 5%;";
    search.style = "display: block; margin-left: 5%;";
  } else {
    list.style = "display: none;";
    search.style = "display: none;";
  }

  i++;
}

function getLoginElements() {
  return {
    x: document.getElementById("login"),
    y: document.getElementById("register"),
    z: document.getElementById("btn"),
    a: document.getElementById("log"),
    b: document.getElementById("reg"),
    w: document.getElementById("other")
  };
}

function register() {
  var elements = getLoginElements();

  if (!elements.x || !elements.y || !elements.z || !elements.a || !elements.b || !elements.w) {
    return;
  }

  elements.x.style.left = "-400px";
  elements.y.style.left = "50px";
  elements.z.style.left = "110px";
  elements.w.style.visibility = "hidden";
  elements.b.style.color = "#fff";
  elements.a.style.color = "#000";
}

function login() {
  var elements = getLoginElements();

  if (!elements.x || !elements.y || !elements.z || !elements.a || !elements.b || !elements.w) {
    return;
  }

  elements.x.style.left = "50px";
  elements.y.style.left = "450px";
  elements.z.style.left = "0px";
  elements.w.style.visibility = "visible";
  elements.a.style.color = "#fff";
  elements.b.style.color = "#000";
}

function goFurther() {
  var agree = document.getElementById("chkAgree");
  var submitButton = document.getElementById("btnSubmit");

  if (!agree || !submitButton) {
    return;
  }

  submitButton.style = agree.checked
    ? "background: linear-gradient(to right, #FA4B37, #DF2771);"
    : "background: lightgray;";
}

function google() {
  window.open("https://accounts.google.com/", "_blank", "noopener,noreferrer");
}

function quizt(frame) {
  for (var index = 1; index <= 11; index++) {
    var frameElement = document.getElementById("f" + index);

    if (frameElement) {
      frameElement.style = "display: none;";
    }
  }

  var activeFrame = document.getElementById("f" + frame);

  if (activeFrame) {
    activeFrame.style = "display: block;";
  }
}

function startquiz() {
  var title = document.getElementById("title");
  var panel = document.getElementById("panel");
  var left = document.getElementById("left");
  var right = document.getElementById("right");

  if (title) {
    title.style = "display: none;";
  }

  if (panel) {
    panel.style = "display: inline-flex;";
  }

  if (left) {
    left.style = "display: block;";
  }

  if (right) {
    right.style = "display: block;";
  }
}

function searchdisplay() {
  var panel = document.getElementById("searchpanel");

  if (panel) {
    panel.style.display = "block";
  }
}

function display(n) {
  var imageIds = ["img1", "img2", "img3", "img4"];
  var switchIds = ["s1", "s2", "s3", "s4"];

  imageIds.forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.style = "display: none;";
    }
  });

  switchIds.forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.style = "background: #DF2771; color: #FFF;";
    }
  });

  var activeImage = document.getElementById("img" + n);
  var activeSwitch = document.getElementById("s" + n);

  if (activeImage) {
    activeImage.style = "display: block;";
  }

  if (activeSwitch) {
    activeSwitch.style = "background: #E5E8EF; color: #DF2771;";
  }
}

function sideMenu(toggle) {
  var menu = document.getElementById("side-menu");
  var backdrop = document.getElementById("menu-backdrop");

  if (!menu) {
    return;
  }

  if (toggle === 0) {
    menu.classList.add("is-open");
    if (backdrop) {
      backdrop.classList.add("is-open");
    }
    document.body.classList.add("menu-open");
    return;
  }

  menu.classList.remove("is-open");
  if (backdrop) {
    backdrop.classList.remove("is-open");
  }
  document.body.classList.remove("menu-open");
}

onReady(function () {
  updateNavbarShadow();
  updateNavbarVisibility();
  scrollAppear();

  window.addEventListener("scroll", scrollAppear);
  window.addEventListener("scroll", updateNavbarShadow);
  window.addEventListener("scroll", updateNavbarVisibility);

  var searchInput = document.getElementById("searchInput");
  var searchResults = document.getElementById("searchResults");

  if (searchInput) {
    searchInput.addEventListener("input", searchCourses);
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        searchCourses();
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (!searchResults || !searchInput) {
      return;
    }

    if (!searchResults.contains(event.target) && event.target !== searchInput) {
      searchResults.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      sideMenu(1);
    }
  });

  var sideMenuLinks = document.querySelectorAll("#side-menu a[href]");
  sideMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sideMenu(1);
    });
  });
});
