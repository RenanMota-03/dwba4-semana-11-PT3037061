const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

const headerHTML = `
    <nav class="navbar">
        <div class="nav-left">
            <a href="${basePath}index.html">HOME</a>
            <a href="${basePath}pages/eventos.html">EVENTOS</a>
            <a href="${basePath}pages/contato.html">CONTATO</a>
            
            <div class="dropdown">
                <button class="dropbtn">CURSOS</button>
                <div class="dropdown-content">
                    <a href="${basePath}pages/cursos.html">Análise e Desenvolvimento de Sistemas</a>
                    <a href="#">Engenharia de Produção</a>
                </div>
            </div> 

            <a href="${basePath}pages/entrar.html">ENTRAR</a>
        </div>
        <div class="nav-right">
            <a href="${basePath}pages/sobre.html">SOBRE</a>
        </div>
    </nav>
    <div class="header-logo">
        <img src="${basePath}assets/images/Logo.jpg" alt="Instituto Federal São Paulo">
    </div>
`;

const footerHTML = `
    <a href="https://www.facebook.com/ifsppirituba" target="_blank">
        <img src="${basePath}assets/images/facebook.png" alt="Facebook IFSP" class="facebook-icon">
    </a>
    <p>IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100</p>
`;

document.addEventListener("DOMContentLoaded", () => {
  const cabecalho = document.getElementById("cabecalho-componente");
  if (cabecalho) cabecalho.innerHTML = headerHTML;

  const rodape = document.getElementById("rodape-componente");
  if (rodape) rodape.innerHTML = footerHTML;
});
