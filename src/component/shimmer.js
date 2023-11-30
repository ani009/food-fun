const shimmer=()=>{
    return(
        <div className="shimmer-list">
            {Array(10).fill("").map((e,index)=>{
                return <div className="shimmer-card" key={index}></div>;
            })}
        </div>
    );
}
export default shimmer;