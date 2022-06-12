const app = http.app()

function helloWorld() {
    return http.result(200, a.elements().join(" "))
}

const a = new Enumerable<string>(["Hello", " World!"])

app.get("/", "helloWorld")
app.run()