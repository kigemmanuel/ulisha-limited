
const Section = ({id, children, className}) => {
    return (
        <section id={id || ""} className={"w-full px-6 xs:px-8 md:px-12 lg:px-14 xl:px-28 2xl:px-96 " + className || ""}>
            {children}
        </section>
    )
}

export const CardHolder = ({children, className}) => {     
    return <div className={"flex flex-wrap gap-6 text-center justify-center " + (className || "")}>
            {children}
        </div>
}

export default Section