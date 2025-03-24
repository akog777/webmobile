document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.innerHTML = `
        <div id="modal-overlay" class="modal-overlay">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>Solicitar Orçamento</h2>
                <form id="form-orcamento">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" required>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>

                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalOverlay = document.getElementById("modal-overlay");
    const closeModal = document.querySelector(".close-modal");
    const formOrcamento = document.getElementById("form-orcamento");

    document.querySelectorAll(".solicitar-orcamento").forEach(button => {
        button.addEventListener("click", function () {
            modalOverlay.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modalOverlay.style.display = "none";
    });

    formOrcamento.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        alert(`Orçamento solicitado!\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
        modalOverlay.style.display = "none";
        formOrcamento.reset();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    function filterProjects(category) {
        projectItems.forEach(item => {
            item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            filterProjects(category);
        });
    });

    filterProjects('all');
});
