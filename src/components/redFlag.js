
class RedFlag extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var item = this.attributes.getNamedItem("href");
        var link = null != item && item.value.length
                       ? item.value
                       : "https://www.merriam-webster.com/dictionary/red-flag";

        this.innerHTML = `
            <style>
                .red-flag {
                    color: #d14338;
                    text-decoration: none;
                }
            </style>
            <a title="Red Flag" aria-label="Red Flag" class="red-flag" href="` + link + `">` +
                this.innerHTML + `&#9873;
            </a>`;
    }
}

customElements.define("red-flag", RedFlag);