// script.js

document.addEventListener("DOMContentLoaded", () => {
    const noteTitleInput = document.getElementById("note-title");
    const noteContentInput = document.getElementById("note-content");
    const noteCategorySelect = document.getElementById("note-category");
    const addNoteBtn = document.getElementById("add-note-btn");

    // Categories containers
    const categories = {
        personal: document.querySelector("#personal-category .notes-grid"),
        work: document.querySelector("#work-category .notes-grid"),
        study: document.querySelector("#study-category .notes-grid"),
        other: document.querySelector("#other-category .notes-grid"),
    };

    // Add Note Event
    addNoteBtn.addEventListener("click", () => {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();
        const category = noteCategorySelect.value;

        if (!title || !content || !category) {
            alert("Please fill out all fields!");
            return;
        }

        // Create Note Element
        const note = document.createElement("div");
        note.classList.add("note");
        note.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <button class="delete-btn">Delete</button>
        `;

        // Add to corresponding category
        categories[category].appendChild(note);

        // Clear inputs
        noteTitleInput.value = "";
        noteContentInput.value = "";
        noteCategorySelect.value = "";

        // Delete Note Event
        note.querySelector(".delete-btn").addEventListener("click", () => {
            note.remove();
        });
    });
});
