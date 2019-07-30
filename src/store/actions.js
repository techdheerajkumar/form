import axios from 'axios'
export const GET_TITLE = "GET_TITLE";

export const getData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    return (
        axios.get(url)
            .then(response => {
                response.data.map(list => {
                    return list.title
                })
            })
    )
}