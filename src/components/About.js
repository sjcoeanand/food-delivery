import { UserClass } from "./UserClass";
import User from "./User";
const About = () => {
    return <div>
        <h2>About Component</h2>
        <User name={"Functional"} />
        {/* <UserClass name={"Class"} /> */}
    </div>
}

export default About;