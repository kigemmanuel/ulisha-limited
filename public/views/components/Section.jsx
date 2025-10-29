
const Section = ({id, children, className}) => {
    return (
        <section id={id || ""} className={"w-full py-6 px-6 xs:px-8 md:px-10 xl:px-20 2xl:px-64 " + className || ""}>
            {children}
        </section>
    )
}

export const CardHolder = ({children, className}) => {     
    return <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[100%] mx-auto text-center " + className || ""}>
            {children}
        </div>
}

export default Section