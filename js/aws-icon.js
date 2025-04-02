class AwsIconElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const hrefAttribute = this.getAttribute("href");
    const iconAttribute = this.getAttribute("icon")?.toLowerCase();

    const img = document.createElement("img");

    img.setAttribute("src", `aws-icons/${iconAttribute}.svg`);
    img.style.width = "6rem";

    if (hrefAttribute) {
      const a = document.createElement("a");

      a.setAttribute("href", hrefAttribute);

      a.appendChild(img);

      this.shadowRoot.append(a);
      return;
    }

    this.shadowRoot.append(img);
  }
}

customElements.define("aws-icon", AwsIconElement);
