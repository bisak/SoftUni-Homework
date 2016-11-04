class TitleBar {
    constructor(title) {
        this.title = title;
        this.linksArr = [];
    }

    addLink(href, name) {
        this.linksArr.push(`<a class="menu-link" href="${href}">${name}</a>`)
    }

    appendTo(selector) {
        $(selector).prepend(`
                <header class="header">
                  <div class="header-row">
                    <a class="button">&#9776;</a>
                    <span class="title">${this.title}</span>
                  </div>
                  <div class="drawer">
                    <nav class="menu">
                    </nav>
                  </div>
                </header>`);
        for (let i = 0; i < this.linksArr.length; i++) {
            $('.menu').append(this.linksArr[i]);
        }
        $('.drawer').css("display", "none");
        $(".button").click(function () {
            $('.drawer').toggle();
        })

    }
}

let header = new TitleBar('<script>alert()</script>');
header.addLink('/', 'Home<script>alert()</script>');
header.addLink('about', 'About');
header.addLink('results', 'Results');
header.addLink('faq', 'FAQ');
header.appendTo('#container');
