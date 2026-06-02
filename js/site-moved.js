(function () {
  var NEW_SITE = "https://matterport.github.io/developer-docs/";
  var OLD_BASE = "/showcase-sdk/".replace(/\/?$/, "/");

  // Build a 1:1 target URL on the new site, preserving path/query/hash.
  var path = window.location.pathname;
  var i = path.indexOf(OLD_BASE);
  var tail = i >= 0 ? path.substring(i + OLD_BASE.length) : path.replace(/^\/+/, "");
  var target = NEW_SITE + tail + window.location.search + window.location.hash;

  function addBanner() {
    if (document.getElementById("site-moved-banner")) return;
    var banner = document.createElement("div");
    banner.id = "site-moved-banner";
    banner.innerHTML =
      "This site is no longer updated. " +
      '<a href="' + target + '">Go to ' + NEW_SITE + "</a>";
    (document.body || document.documentElement).insertBefore(
      banner,
      (document.body || document.documentElement).firstChild
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addBanner);
  } else {
    addBanner();
  }
})();
