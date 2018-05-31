"use strict";

(function () {
  var sideNavEl = getEl(".side-nav");
  var niveaus = vtaTextNodes.niveaus;
  var onderwerpen = vtaTextNodes.onderwerpen;
  var accenten = vtaTextNodes.accenten;

  var huidigNiveau = "basis";

  var mobileMenuOpen = false;

  /* ----------------------------------------
  // Page build functions
  // --------------------------------------*/
  function build() {
    appendNiveaus();
    appendOnderwerpen();
    appendAccenten();

    addEventListeners();

    getEl(".mobile-menu-button").addEventListener("click", function () {
      if (mobileMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    getEl(".content").addEventListener("click", function () {
      closeMobileMenu();
    });

    getAllEl(".vouw-button").forEach(function (listObj) {
      listObj.addEventListener("click", function () {
        var parentOnderwerp = listObj.parentElement;
        var parentOnderwerpName = parentOnderwerp.querySelector(".nav-item.onderwerp").getAttribute("data-name");
        var targetAccenten = document.querySelector(".accenten[data-name=" + parentOnderwerpName + "]");
        if (targetAccenten.classList.contains("collapsed")) {
          targetAccenten.classList.remove("collapsed");
          listObj.querySelector("i").classList.add("fa-chevron-up");
          listObj.querySelector("i").classList.remove("fa-chevron-down");
        } else {
          targetAccenten.classList.add("collapsed");
          listObj.querySelector("i").classList.remove("fa-chevron-up");
          listObj.querySelector("i").classList.add("fa-chevron-down");
        }
      });
    });
  }

  function openMobileMenu() {
    mobileMenuOpen = true;
    getEl(".mobile-menu-button i").classList.remove("fa-bars");
    getEl(".mobile-menu-button i").classList.add("fa-times");
    getEl(".side-nav").classList.add("opened");
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    getEl(".mobile-menu-button i").classList.add("fa-bars");
    getEl(".mobile-menu-button i").classList.remove("fa-times");
    getEl(".side-nav").classList.remove("opened");
  }

  function appendNiveaus() {
    getEl(".niveaus").innerHTML += createNiveau(niveaus[huidigNiveau].name, huidigNiveau);
  }

  function appendOnderwerpen() {
    for (var onderwerp in onderwerpen) {
      if (onderwerpen.hasOwnProperty(onderwerp)) {
        if (onderwerpen[onderwerp].parent === huidigNiveau) {
          getEl(".onderwerpen[data-name='" + onderwerpen[onderwerp].parent + "'").innerHTML += createOnderwerp(onderwerpen[onderwerp].name, onderwerp);
        }
      }
    }
  }

  function appendAccenten() {
    var huidigLevel = -1;
    for (var accent in accenten) {
      if (accenten.hasOwnProperty(accent)) {
        if (onderwerpen[accenten[accent].parent].parent === huidigNiveau) {
          var parentElement = getEl(".accenten[data-name='" + accenten[accent].parent + "']");
          var elementLevel = accenten[accent].level;
          if (huidigLevel != elementLevel) {
            parentElement.innerHTML += "<div class='level " + accenten[accent].parent + "-level' data-levelId='" + elementLevel + "'></div>";
            huidigLevel = elementLevel;
          }
          var parentLevel = getEl("." + accenten[accent].parent + "-level[data-levelId='" + elementLevel + "']");
          parentLevel.innerHTML += createAccent(accenten[accent].name, accent);
        }
      }
    }
  }

  function addEventListeners() {
    var niveauElements = getAllEl(".niveau");
    niveauElements.forEach(function (listObj) {
      listObj.addEventListener("click", function () {
        closeMobileMenu();
        var niveauName = this.getAttribute("data-name");
        changeText(this, niveauName, "niveau");
      });
    });
    var onderwerpElements = getAllEl(".onderwerp");
    onderwerpElements.forEach(function (listObj) {
      listObj.addEventListener("click", function () {
        closeMobileMenu();
        var onderwerpName = this.getAttribute("data-name");
        changeText(this, onderwerpName, "onderwerp");
      });
    });
    var accentElements = getAllEl(".accent");
    accentElements.forEach(function (listObj) {
      listObj.addEventListener("click", function () {
        closeMobileMenu();
        var accentName = this.getAttribute("data-name");
        changeText(this, accentName, "accent");
      });
    });
  }

  function addRedirectListeners() {
    var redirectLinks = getAllEl("a.text-verwijzing");
    redirectLinks.forEach(function (listObj) {
      listObj.addEventListener("click", function () {
        var accentName = this.getAttribute("data-name");
        changeText(this, accentName, this.getAttribute("data-target-type"));
      });
    });
  }

  /* ----------------------------------------
  // Page modifiers
  // --------------------------------------*/
  function changeText(menuItem, textOrigin, type) {
    getAllEl(".nav-item").forEach(function (listObj) {
      listObj.classList.remove("active");
    });
    getEl("." + type + "[data-name=" + textOrigin + "]").classList.add("active");
    crumbBread(menuItem, type);
    if (type === "niveau") {
      getEl(".text-area").innerHTML = niveaus[textOrigin].text;
    } else if (type === "onderwerp") {
      getEl(".text-area").innerHTML = onderwerpen[textOrigin].text;
    } else {
      getEl(".text-area").innerHTML = accenten[textOrigin].text;
    }
    addRedirectListeners();
  }

  function changeNiveau() {
    getEl(".niveaus").innerHTML = "";
    getEl(".niveaus").innerHTML += createNiveau(niveaus[huidigNiveau].name, huidigNiveau);
  }

  function crumbBread(menuItem, type) {
    var breadcrumbs = getEl(".breadcrumbs");
    if (type === "niveau") {
      var breadCrumbName = niveaus[menuItem.getAttribute("data-name")].name;
      breadcrumbs.innerHTML = "<span class='breadcrumb-segment breadcrumb-" + type + " active'>" + breadCrumbName + "</span>";
    } else if (type === "onderwerp") {
      var _breadCrumbName = onderwerpen[menuItem.getAttribute("data-name")].name;
      var parentNiveau = onderwerpen[menuItem.getAttribute("data-name")].parent;
      breadcrumbs.innerHTML = "<span class='breadcrumb-segment breadcrumb-niveau'><a href='#' class='text-verwijzing' data-name='" + parentNiveau + "' data-target-type='niveau'>" + parentNiveau + "</a></span>";
      breadcrumbs.innerHTML += "<i class='fas fa-chevron-right'></i>";
      breadcrumbs.innerHTML += "<span class='breadcrumb-segment breadcrumb-" + type + " active'>" + _breadCrumbName + "</span>";
    } else {
      var _breadCrumbName2 = accenten[menuItem.getAttribute("data-name")].name;
      var parentOnderwerp = accenten[menuItem.getAttribute("data-name")].parent;
      var _parentNiveau = onderwerpen[parentOnderwerp].parent;
      breadcrumbs.innerHTML = "<span class='breadcrumb-segment breadcrumb-niveau'><a href='#' class='text-verwijzing' data-name='" + _parentNiveau + "' data-target-type='niveau'>" + _parentNiveau + "</a></span>";
      breadcrumbs.innerHTML += "<i class='fas fa-chevron-right'></i>";
      breadcrumbs.innerHTML += "<span class='breadcrumb-segment breadcrumb-onderwerp'><a href='#' class='text-verwijzing' data-name='" + parentOnderwerp + "' data-target-type='onderwerp'>" + parentOnderwerp + "</a></span>";
      breadcrumbs.innerHTML += "<i class='fas fa-chevron-right'></i>";
      breadcrumbs.innerHTML += "<span class='breadcrumb-segment breadcrumb-accent active'>" + _breadCrumbName2 + "</span>";
    }
  }

  /* ----------------------------------------
  // Element builders
  // --------------------------------------*/
  function createNiveau(niveauName, key) {
    return "<div class='niveau-wrap'><button class='nav-item niveau' data-name='" + key + "'><div class='nav-item-title'><h3>" + niveauName + "</h3></div></button><button class='niveau-toggle'><i class='fas fa-exchange-alt'></i></button></div><div class='onderwerpen' data-name='" + key + "'></div>";
  }

  function createOnderwerp(onderwerpName, key) {
    return "<div class='onderwerp-wrap'><button class='nav-item onderwerp' data-name='" + key + "'><div class='nav-item-title'><h3>" + onderwerpName + "</h3></div></button><button class='vouw-button'><i class='fas fa-chevron-up'></i></button></div><div class='accenten' data-name='" + key + "'></div>";
  }

  function createAccent(accentName, key) {
    return "<button class='nav-item accent' data-name='" + key + "'><div class='nav-item-title'><h3>" + accentName + "</h3></div></button>";
  }

  /* ----------------------------------------
  // Common functions
  // --------------------------------------*/
  function getAllEl(selector) {
    return document.querySelectorAll(selector);
  }

  function getEl(selector) {
    var foundEl = document.querySelector(selector);
    if (foundEl == null) {
      throw new Error("getEl(" + selector + ") returned null");
    } else {
      return document.querySelector(selector);
    }
  }

  build();
})();