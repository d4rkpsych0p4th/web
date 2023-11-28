import Card from "@/components/Card";
async function loaddata(){
    const res = await fetch("https://reqres.in/api/users");
    const dats = await res.json();
    return dats.data;
}


export default async function Page() {
    const user = await loaddata();
return <div>{
    
    user.map(user=>(
        <Card user={user}/>
    ))
   
} </div>
}