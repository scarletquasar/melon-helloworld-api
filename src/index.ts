const app = http.app({
    name: "test",
    host: "localhost",
    port: "3000"
})

const getRoute = () => http.result(200, "Hello")

app.get("/", getRoute)

app.run()