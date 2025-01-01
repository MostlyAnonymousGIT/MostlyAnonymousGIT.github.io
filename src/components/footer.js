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
                    <a href="https://blog.avas.space" title="Go to Ava's site" aria-label="Go to Ava's site">Ava's,</a>
                    <a href="https://rwblickhan.org/" title="Go to Russell's site" aria-label="Go to Russell's site">Russell's,</a>
                    and
                    <a href="https://shilin.ca" title="Go to Shilin's site" aria-label="Go to Shilin's site">Shilin's</a>
                    sites.
                </div>
            </footer>`;
    }
}

customElements.define("footer-component", Footer);