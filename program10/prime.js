function prime(){
    function isprime(n){
        for(let i=2;i<n;i++){
            if(n%i===0)
                return false
        }
        return true
    }
    const findprime=()=>{
        const array=[]
        for(let i=2;i<=100;i++){
            if(isprime(i))
                array.push(i)
    }
    return array
};
return(
    <div>
        Prime less than 100 are 
        <ul>
            {findprime().map((elem)=>{
                return(<li>{elem}</li>)
            })}
        </ul>
    </div>
)
}
export default prime;
