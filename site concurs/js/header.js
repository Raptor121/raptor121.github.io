function initHeader() {
    document.getElementById('header').innerHTML = `
    <input type="checkbox" name="" id="toggler">
    <label for="toggler" class="fas fa-bars"></label>

    <a href="index.html" class="logo"> <img src="images/morar-const-logo.png" width="135px" alt=""></a>



    <nav class="navbar">

        <a href="#home">Acasa</a>
        <a href="#about">Despre Noi</a>
        <a href="#products">Produse</a>
        <a href="#review">Locatie</a>
        <a href="#contact">Comenzi Speciale</a>
    </nav>

    <div class="icons">
       
        <a href="Html/catalog.html" class="fas fa-shopping-cart"></a>
        <a href="Html/logare.html" class="fas fa-user"></a>

    </div>
`;
}

document.addEventListener('DOMContentLoaded', function() {
    initHeader();
});