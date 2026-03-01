const gallery = document.getElementById("gallery");

const totalImages = 22; // number of images

for(let i = 1; i <= totalImages; i++)
{
    const imagePath = `images/${i}.jpg`;

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imagePath;
    img.className = "image";

    img.onclick = () => openFullscreen(imagePath);

    const btn = document.createElement("button");
    btn.innerHTML = "⬇";
    btn.className = "download-icon";

    btn.onclick = (e) => {
        e.stopPropagation();
        downloadImage(imagePath);
    };

    card.appendChild(img);
    card.appendChild(btn);

    gallery.appendChild(card);
}

function downloadImage(path)
{
    const link = document.createElement("a");
    link.href = path;
    link.download = "";
    link.click();
}

function openFullscreen(path)
{
    const full = document.createElement("div");
    full.className = "fullscreen";

    const img = document.createElement("img");
    img.src = path;

    full.appendChild(img);

    full.onclick = () => full.remove();

    document.body.appendChild(full);
}