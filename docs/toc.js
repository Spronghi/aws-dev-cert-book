// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="intro.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Services</li><li class="chapter-item expanded "><a href="iam.html"><strong aria-hidden="true">1.</strong> Identity Access Manager (IAM)</a></li><li class="chapter-item expanded "><a href="ec2.html"><strong aria-hidden="true">2.</strong> Elastic Compute Cloud (EC2)</a></li><li class="chapter-item expanded "><a href="ebs.html"><strong aria-hidden="true">3.</strong> Elastic Block Store (EBS)</a></li><li class="chapter-item expanded "><a href="elb.html"><strong aria-hidden="true">4.</strong> Elastic Load Balancer (ELB)</a></li><li class="chapter-item expanded "><a href="s3.html"><strong aria-hidden="true">5.</strong> Simple Storage Service (S3)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dev-exam-tips/s3.html"><strong aria-hidden="true">5.1.</strong> S3 Exam Tips (dev)</a></li></ol></li><li class="chapter-item expanded "><a href="cloudfront.html"><strong aria-hidden="true">6.</strong> CloudFront (CDN)</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dev-exam-tips/cloudfront.html"><strong aria-hidden="true">6.1.</strong> CloudFront Exam Tips (dev)</a></li></ol></li><li class="chapter-item expanded "><a href="athena.html"><strong aria-hidden="true">7.</strong> Athena</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dev-exam-tips/athena.html"><strong aria-hidden="true">7.1.</strong> Athena Exam Tips (dev)</a></li></ol></li><li class="chapter-item expanded "><a href="lambda.html"><strong aria-hidden="true">8.</strong> Lambda</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dev-exam-tips/lambda.html"><strong aria-hidden="true">8.1.</strong> Lambda Exam Tips (dev)</a></li></ol></li><li class="chapter-item expanded "><a href="apigateway.html"><strong aria-hidden="true">9.</strong> API Gateway</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dev-exam-tips/apigateway.html"><strong aria-hidden="true">9.1.</strong> API Gateway Exam Tips (dev)</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
