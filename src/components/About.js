import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About Us</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>

                <UserClass />
            </div>
        ); 
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
            
//             <UserClass name={"Kaizen class"} location={"JSR class"}/>
//         </div>
//     );
// };

export default About;