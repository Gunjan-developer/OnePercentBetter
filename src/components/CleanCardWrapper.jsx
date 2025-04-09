export function CleanCardWrapper({ children }) {
    return (
        <>
            <div style={{ border: "2px solid black" , marginTop: "10px" , padding: "6px" , textAlign: "center"}}>
                {children}
            </div>
        </>
    )
}