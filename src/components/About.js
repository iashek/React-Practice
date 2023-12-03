import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div>
                <h1>About Us</h1>
                
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