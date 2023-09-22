document.addEventListener('DOMContentLoaded', function() {
  const navigation = document.querySelector('.navigation');
  const hamburgerButton = document.querySelector('.hamburger-button');

  function toggleNavigation() {
    if (navigation.style.display === 'block') {
      navigation.style.display = 'none';
    } else {
      navigation.style.display = 'block';
    }
  }
  hamburgerButton.addEventListener('click', toggleNavigation);
});

// Show navigation again above 480px width

// might be unnesasary, now that i think about it, whom other than devs go from mobile view to desktop on the same device?, well its here and it works.
export function showNavigation() {
  const navigation = document.querySelector('.navigation');
  const screenWidth = window.innerWidth;

  if (screenWidth >= 481) {
    navigation.style.display = 'block';
  } else {
    navigation.style.display = 'none';
  }
}

window.addEventListener('load', showNavigation);
window.addEventListener('resize', showNavigation);