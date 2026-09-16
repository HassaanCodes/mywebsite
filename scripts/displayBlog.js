

console.log("Your script is running")


async function get_readme(post) {
    let response = await fetch(`../posts/${post}.md`);
    response = await response.text();
    response = marked.parse(response);
    console.log(response);

    document.querySelector('.jacob').innerHTML = `
        <section class = 'article'>
            ${response}
        </section>
    `;
}

console.log(window.location.search);

let params = new URLSearchParams(window.location.search);
let post = params.get('post');

if (post) {
    get_readme(post);
}