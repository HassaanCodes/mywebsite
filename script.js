
console.log("Your script is running")

const params = new URLSearchParams(window.location.search)
const post = params.get('post')
console.log("post:", post);

if (post) {


    console.log("fetching:", `posts/${post}.json`);

    fetch(`../posts/${post}.json`)
    .then(res => {
        if (!res.ok) {
            throw new Error("response not found")
        }
        
        return res.json()

    })
    .then(data => {
        document.querySelector(".jacob").innerHTML = `
        <section class = 'article'>
            <h1>${data.title}</h1>
            <p>${data.content}</p>
        </section>
        `
    })
    .catch(err => {
        document.querySelector('.jacob').innerHTML = `
            <h1>404</h1>
            <p>post not found</p>
        `
    })
}