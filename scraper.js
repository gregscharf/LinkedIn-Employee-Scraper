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
        // username scheme: firstname.lastname
        fullList += `${firstName}.${lastName}\n`;
        //username scheme: firstinitial and lastname
        // fullList += `${firstName.charAt(0)}${lastName}\n`;
        //username scheme: first 3 letters of name and lastname
        // fullList += `${firstName.substring(0, 3)}${lastName}\n`;
        //username scheme: firstinitial and lastname initial
        // fullList += `${firstName}${lastName.charAt(0)}\n`;
      }
    }
  });
  console.log(fullList);
  console.log(`Found ${counter} employees.`);
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
