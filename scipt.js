/* =====================================
   SCRIPT.JS - PROFIL PRIBADI SAFIRA
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* 1. TOMBOL "SAPA SAYA" */
    const tombolSapa = document.getElementById("tombolSapa");

    tombolSapa.addEventListener("click", function () {
        const jam = new Date().getHours();
        let sapaan;

        if (jam >= 4 && jam < 11) {
            sapaan = "Selamat pagi";
        } else if (jam >= 11 && jam < 15) {
            sapaan = "Selamat siang";
        } else if (jam >= 15 && jam < 18) {
            sapaan = "Selamat sore";
        } else {
            sapaan = "Selamat malam";
        }

        alert(sapaan + "! Terima kasih sudah berkunjung ke profil saya ♡");
    });


    /* 2. TOMBOL MODE GELAP / TERANG */
    const tombolTema = document.getElementById("tombolTema");

    function aturTema(gelap) {
        document.body.classList.toggle("mode-gelap", gelap);
        tombolTema.textContent = gelap ? "☀️ Mode Terang" : "🌙 Mode Gelap";

        try {
            localStorage.setItem("temaProfil", gelap ? "gelap" : "terang");
        } catch (e) {
            /* localStorage tidak tersedia, abaikan */
        }
    }

    try {
        if (localStorage.getItem("temaProfil") === "gelap") {
            aturTema(true);
        }
    } catch (e) {
        /* abaikan */
    }

    tombolTema.addEventListener("click", function () {
        const sedangGelap = document.body.classList.contains("mode-gelap");
        aturTema(!sedangGelap);
    });


    /* 3. TOMBOL "SELENGKAPNYA" */
    const tombolInfo = document.getElementById("tombolInfo");
    const informasiLengkap = document.getElementById("informasi-lengkap");

    tombolInfo.addEventListener("click", function () {
        const tersembunyi = informasiLengkap.classList.toggle("tersembunyi");
        tombolInfo.textContent = tersembunyi ? "Selengkapnya" : "Sembunyikan";
    });


    /* 4. TOMBOL "TAMPILKAN KEAHLIAN" */
    const tombolKeahlian = document.getElementById("tombolKeahlian");
    const daftarKeahlian = document.getElementById("daftar-keahlian");

    tombolKeahlian.addEventListener("click", function () {
        const tersembunyi = daftarKeahlian.classList.toggle("tersembunyi");
        tombolKeahlian.textContent = tersembunyi
            ? "Tampilkan Keahlian"
            : "Sembunyikan Keahlian";
    });


    /* 5. MENU NAVIGASI AKTIF SAAT SCROLL */
    const bagian = document.querySelectorAll("main section");
    const linkNav = document.querySelectorAll("nav a");

    function tandaiMenuAktif() {
        let idAktif = "";

        bagian.forEach(function (sec) {
            if (window.scrollY >= sec.offsetTop - 140) {
                idAktif = sec.id;
            }
        });

        linkNav.forEach(function (link) {
            const aktif = link.getAttribute("href") === "#" + idAktif;
            link.style.textDecoration = aktif ? "underline" : "none";
            link.style.textUnderlineOffset = "6px";
        });
    }

    window.addEventListener("scroll", tandaiMenuAktif);
    tandaiMenuAktif();

});