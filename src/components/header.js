class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-header {
                    display: flex;
                    justify-content: center;
                    border-bottom: 1px solid light-dark(var(--fg-light), var(--fg-dark));
                }
            </style>
            <header class="page-header">
                <h3>My Digital Garden</h3>
            </header>`;
    }
}

customElements.define("header-component", Header);