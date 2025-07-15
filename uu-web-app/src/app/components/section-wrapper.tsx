import {PropsWithChildren} from "react";

export default function SectionWrapper(props: PropsWithChildren) {
    return (
        <div className={"w-[65vw] max-w-[1400px] m-auto py-2"}>
            {props.children}
        </div>
    )
}