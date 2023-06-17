

function add_control_change_handlers() {
    document.querySelector("#theme").addEventListener("change", select_theme);
    document.querySelector("#font-family").addEventListener("change", select_font_family);
    document.querySelector("#font-weight").addEventListener("change", select_font_weight);
}

function select_theme(event) {
    // Change class attribute of body element
    let body = document.querySelector("html > body");
    body.setAttribute("class",
                      document.querySelector("#theme").value);
}

function select_font_family(event) {
    update_text();
}

function select_font_weight(event) {
    update_text();
}


function update_text() {
    // Update the style attribute of the #text element based on the
    // falues of the selected font family and weight.
    let text = document.getElementById("text");
    let family = document.querySelector("#font-family").value;
    let weignt = document.querySelector("#font-weight").value;
    text.setAttribute("style",
                      "font-family: " + family + "; " +
                      "font-weight: " + weignt + ";");
}

function load_word_list(filename) {
    return fetch(filename).then(function (response) {
        if (!response.ok) {
            console.log(response.statusText);
            return;
        }
        return response.text().then(
            function(txt) {
                return txt.split('\n');
            },
            console.log);
    });
}

TEXT_SIZES = [ 36, 30, 24, 16, 14, 12, 10, 8, 6 ];
WORDS_PER_SIZE = 20;

function initialize_words(word_list) {
    let wordcount = word_list.length;
    text_elt = document.getElementById("text");
    for (let j = 0; j < TEXT_SIZES.length; j++) {
        let size_elt = document.createElementNS(text_elt.namespaceURI, "span");
        size_elt.setAttribute("style",
                              "font-size: " + TEXT_SIZES[j] + "pt;");
        size_elt.appendChild(document.createTextNode("" + TEXT_SIZES[j] + " "));
        for (let i = 0; i < WORDS_PER_SIZE; i++) {
            let word = word_list[Math.floor(Math.random() * wordcount)];
            let textnode = document.createTextNode(word + " ");
            size_elt.appendChild(textnode);
        }
        text_elt.appendChild(size_elt);
    }
}

