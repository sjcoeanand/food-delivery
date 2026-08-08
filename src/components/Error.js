import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError()
    console.log("err", err)
    return <>
        <p>
            This is Errorr page
        </p>
    </>
}

export default Error