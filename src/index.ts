const app = http.app()

function get(query: any, headers: Record<string, string>) {
    return http.result(200, { query, headers })
}

function post(body: any, query: any, headers: Record<string, string>) {
    return http.result(200, { body, query, headers })
}

app.get("/", "get")
app.post("/", "post")
app.run()


