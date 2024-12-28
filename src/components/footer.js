class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .page-footer {
                    display: flex;
                    justify-content: center;
                    border-top: 1px solid light-dark(var(--fg-light), var(--fg-dark));
                }
            </style>
            <footer class="page-footer">
                <div class="mt-2">
                    This site was inspired by
                    <a href="https://blog.avas.space" title="Go to ava's site" aria-label="Go to ava's site">ava's</a>
                    and
                    <a href="https://shilin.ca" title="Go to shilin's site" aria-label="Go to shilin's site">shilin's</a>
                    site.
                </div>
            </footer>`;
    }
}

customElements.define("footer-component", Footer);