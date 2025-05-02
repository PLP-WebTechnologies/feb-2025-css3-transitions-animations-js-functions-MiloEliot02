function savePreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getPreference(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Example usage:
savePreference('theme', 'dark');
console.log(getPreference('theme')); // Output: 'dark'

document.querySelector('button').addEventListener('click', () => {
  const box = document.querySelector('.animated-box');
  box.classList.add('animate');

  // Remove the animation class after it completes
  setTimeout(() => {
    box.classList.remove('animate');
  }, 1000); // Match the animation duration
});

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
});