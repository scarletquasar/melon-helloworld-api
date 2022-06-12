const app = http.app()

function helloWorld() {
    return http.result(200, "Hello World!")
}

app.get("/", "helloWorld")
app.run()


