async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
    }
    
export default function Users() {
    return(
        <div>Users</div>
    )
}