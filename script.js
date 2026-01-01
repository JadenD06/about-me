fetch("song.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("date").textContent = data.date;
    document.getElementById("title").textContent = data.title;
    document.getElementById("artist").textContent = data.artist;
    document.getElementById("note").textContent = data.note;
  })
  .catch(error => {
    console.error("Error loading song data:", error);
  });
