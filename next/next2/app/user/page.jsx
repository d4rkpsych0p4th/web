import Card from "@/components/Card";
async function getProps(){
    const res = await fetch("https://reqres.in/api/users");
    const props = await res.json();
    return props.data;
}


export default async function Page() {
    const user = await getProps();
return <div>{
    
    user.map(user=>(
        <Card user={user}/>
    ))
   
} </div>
}