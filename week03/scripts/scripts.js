document.addEventListener("DOMContentLoaded", () => {
  // Footer: Current Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Static Weather Data
  const temperature = 45;
  const windSpeed = 7;

  document.getElementById('temp').textContent = `${temperature}°F`;
  document.getElementById('wind').textContent = `${windSpeed} mph`;

  const chill =
    temperature <= 50 && windSpeed > 3
      ? (
          35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16)
        ).toFixed(1)
      : 'N/A';

  document.getElementById('chill').textContent =
    chill === 'N/A' ? 'Wind Chill: N/A' : `Wind Chill: ${chill}°F`;

  // GitHub API: Last Modified Timestamp
  const repoOwner = 'your-username'; // 🔁 Replace with your GitHub username
  const repoName = 'wdd131';         // 🔁 Replace with your repo name

  fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`)
    .then(res => res.json())
    .then(data => {
      const date = new Date(data[0].commit.committer.date);
      document.getElementById('lastModified').textContent = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    })
    .catch(err => {
      console.error('GitHub API error:', err);
      document.getElementById('lastModified').textContent = 'Unavailable';
    });

  // Hero Image Text Logic
  const heroImg = document.querySelector('#hero-image img');
  const heroTitle = document.getElementById('hero-title');
  const heroCaption = document.getElementById('hero-caption');

  if (heroImg.src.includes('mt-rushmore')) {
    heroTitle.textContent = 'Mount Rushmore';
    heroCaption.innerHTML = 'From iconic landmarks to <span class="highlight">rich history</span>';
  } else if (heroImg.src.includes('statue-liberty')) {
    heroTitle.textContent = 'Statue of Liberty';
    heroCaption.innerHTML = 'A symbol of <span class="highlight">freedom</span> and democracy';
  } else if (heroImg.src.includes('golden-gate')) {
    heroTitle.textContent = 'Golden Gate Bridge';
    heroCaption.innerHTML = 'Engineering marvel and <span class="highlight">scenic beauty</span>';
  } else {
    heroTitle.textContent = 'Welcome';
    heroCaption.textContent = 'Discover amazing places and stories';
  }   
});