function scrapeUsers() {
  var profileCardEls = document.querySelectorAll('.org-people-profile-card__profile-info');

  var fullList = "";
  var counter = 0;
  profileCardEls.forEach(profileName => {
    var nameEl = profileName.querySelector('.lt-line-clamp--single-line.org-people-profile-card__profile-title');

    if (nameEl) {
      var fullName = nameEl.textContent.trim();
      if (fullName.indexOf('LinkedIn') == -1){
        counter += 1;
        var [firstName, lastName] = fullName.split(' ');
        fullList += `${firstName}.${lastName}\n`;
      }
    }
  });
  console.log(fullList);
  console.log(`Copied ${counter} employees to clipboard`);
  copy(fullList);
}

var buttonCheck = 0;
(function clickLoadMore() {
  var loadButton = document.querySelector('.scaffold-finite-scroll__load-button');
  if(!loadButton) { //loadButton might not be injected in DOM yet
    if (buttonCheck > 5) { //infinite scroll button is gone, so we're done
      scrapeUsers();
    } else {
      buttonCheck += 1;
      setTimeout(clickLoadMore, 1000); //wait a second
    }
    return;//don't fall through
  }

  buttonCheck = 0;
  loadButton.click();
  setTimeout(clickLoadMore, 1500);
})();
