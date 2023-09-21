document.getElementById("textForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const text = document.getElementById("textInput").value;
    const alignment = document.getElementById("alignment").value;
    const italic = document.getElementById("italic").checked ? "italic" : "normal";
    const underline = document.getElementById("underline").checked ? "underline" : "none";
    const bold = document.getElementById("bold").checked ? "bold" : "normal";
    const fontSize = document.getElementById("fontSize").value + "px";

    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.textAlign = alignment;
    paragraph.style.fontStyle = italic;
    paragraph.style.textDecoration = underline;
    paragraph.style.fontWeight = bold;
    paragraph.style.fontSize = fontSize;

    document.getElementById("textContainer").appendChild(paragraph);

    document.getElementById("textInput").value = "";
});

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("textContainer").innerHTML = "";
});