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

    const dateElement = document.getElementById("date");

    const today = new Date();

    const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
    };

    dateElement.textContent = today.toLocaleDateString("en-US", options); 
