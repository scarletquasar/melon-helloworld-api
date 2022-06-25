const app = http.app({
    name: "test",
    host: "localhost",
    port: "3000"
})

const getRoute = (queryData: string) => {
    const query = JSON.parse(queryData)

    if(Object.keys(query).length < 1) {
        return http.result(500, "Empty query")
    }

    return http.result(200, query)
}

app.get("/", getRoute)

app.run()