class DBService {

    static BASE_URL = "https://64b512c1f3dbab5a95c6a48c.mockapi.io/"

    // constructor(){}

    /// POST (C)
    static createBook(newBook) {
        const url = DBService.BASE_URL + "books";

        fetch(url, {method: 'post', 
                    body: JSON.stringify(newBook), 
                    headers: {'content-type':'application/json'}})
                    .then(resp => resp.json())
                    .then(res => console.log('post', res));

    }

    /// GET  (R)
    static readBooks() {
        const url = DBService.BASE_URL + "books";

        return fetch(url, { method: "get" })
            .then((resp) => resp.json())

    }

    static readSingleBook(id) {
        const url = DBService.BASE_URL + "books/" + id;

        return fetch(url, { method: "get" })
            .then((resp) => resp.json())
    }

    /// PUT (U)
    static updateBook(modifiedBook) {
        const url = DBService.BASE_URL + "books/" + modifiedBook.id;

        fetch(url, {method: 'put', 
                    body: JSON.stringify(modifiedBook), 
                    headers:{'content-type':'application/json'}})
                    .then(resp => resp.json())
                    .then(res => console.log('put', res));
    }

    /// DELETE (D)
    static deleteBook(id) {
        const url = DBService.BASE_URL + "books/" + id;

        return fetch(url, {method: 'DELETE'})
            .then(resp => resp.json())
    }

    
}
