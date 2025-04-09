export function CardWrapper ({innerComponent}) {
    return(
        <>
        <div style={{ border: "2px solid black" , textAlign: "center"}}>
            {innerComponent}
        </div>
        </>
    )
}