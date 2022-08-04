function showResult() {
    fetch('https://reqres.in/api/users', {
        method: "POST", // // or "PUT" with the url changed to, e.g "https://reqres.in/api/users/2"
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(
            { name: "Captain Anonymous" }
        )
    })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}