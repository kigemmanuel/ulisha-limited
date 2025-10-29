import { Fontawesome as Icon } from "snapp-icons"

const BubbleText = ({data, index}) => {
    return <div className={"flex flex-row p-4 px-6 lg:p-6 lg:px-8 xl:py-6 xl:px-10 rounded-3xl gap-x-2 w-max items-start " + data.bgColor}>
            <Icon icon={data.icon} className={"w-6 h-6 xl:h-8 xl:w-8 " + data.textColor} />
            <div className="space-y-1">
                <h1 className={"text-lg font-semibold leading-none sm:text-lg xl:text-xl " + data.textColor}>{data.title}</h1>
                <p className="text-sm xl:text-lg">{data.description}</p>
            </div>
        </div>
}

export default BubbleText