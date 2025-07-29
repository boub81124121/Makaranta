let audio = document.querySelector('.quranPlayer'),
    surahContainer = document.querySelector('.surahs'),
    ayah = document.querySelector('.ayah'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.previous'),
    play = document.querySelector('.play'),
    title = document.getElementById('title');

getSurahs();

function getSurahs() {
    const surahs = [
        "متن الأخضري 1",
        "متن الأخضري 2",
        "متن الأخضري 3",
        "متن الأخضري 4",
        "متن الأخضري 5",
        "متن الأخضري 6",
        "متن الأخضري 7",
        "متن الأخضري 8",
        "متن الأخضري 9",
        "متن الأخضري 10",
        "متن الأخضري 11",
        "متن الأخضري 12",
        "متن الأخضري 13",
        "متن الأخضري 14",
        "متن الأخضري 15",
        "متن الأخضري 16",
        "متن الأخضري 17",
        "متن الأخضري 18",
        "متن الأخضري 19",
        "متن الأخضري 20",
        "متن الأخضري 21",
        "متن الأخضري 22",
    ];

    for (let i = 0; i < surahs.length; i++) {
        surahContainer.innerHTML += `
            <div style="margin-bottom: 35px; margin-top: 25px">
                <p>${i + 1}. ${surahs[i]}</p>
            </div>
        `;
    }

    document.getElementById('counter').innerText = `Nombre d'audios : ${surahs.length}`;

    const allSurahs = document.querySelectorAll('.surahs div');
    let index = -1;

    allSurahs.forEach((surah, idx) => {
        surah.addEventListener('click', () => {
            index = idx;
            play(index);
        });
    });

    prev.addEventListener('click', () => {
        if (index > 0) {
            index--;
            play(index);
        }
    });

    next.addEventListener('click', () => {
        if (index < surahs.length - 1) {
            index++;
            play(index);
        }
    });

    function play(idx) {
        const audioName = `${surahs[idx]}.mp3`; // Ex: "متن الأخضري 5.mp3"
        audio.src = `متن الأخضري/${audioName}`;  // dossier: "متن الأخضري"
        title.innerText = `${idx + 1}. ${surahs[idx]}`;
    }
}


