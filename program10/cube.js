function cube(){
    const iscube=()=>{
        const array=[];
        for(let i=1;i<100;i++){
            if((i*i*i)<100){
                array.push(i*i*i)
            }else{
                break
            }
        }
        return array
    }
    return(
        <div>
            Cube less than 100 are
            <ul>
                {iscube().map((elem)=>{
                    return <li>{elem}</li>
                })}
            </ul>
        </div>
    )
}
export default cube;
