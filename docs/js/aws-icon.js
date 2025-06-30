class AwsIconElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const hrefAttribute = this.getAttribute("href");
    const iconAttribute = this.getAttribute("icon")?.toLowerCase();

    const img = document.createElement("img");

    img.setAttribute("src", `images/aws-icons/${iconAttribute}.svg`);
    img.setAttribute("alt", `${iconAttribute} icon`);
    img.style.width = "6rem";

    const a = document.createElement("a");

    a.setAttribute(
      "href",
      hrefAttribute ?? `https://docs.aws.amazon.com/${iconAttribute}/`,
    );
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");

    a.appendChild(img);

    this.shadowRoot.append(a);
    return;

    this.shadowRoot.append(img);
  }
}

customElements.define("aws-icon", AwsIconElement);
