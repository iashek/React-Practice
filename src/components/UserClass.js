import React from "react"
import { GIT_API } from "../utils/constants";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        };
        
        // console.log(props);
    }

    async componentDidMount() {
        // console.log(this.props.name + " Child Component Did Mount");

        const data = await fetch(`${GIT_API}`);
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        // console.log(json);
    }

    componentDidUpdate() {
        // console.log("Child Component Did Update")
    }

    componentWillUnmount() {
        // console.log("Child Component Will UnMount")
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo;

        console.log(this.props.name + " Child Render");

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @{login}</h4>
            </div>
        );
    } 
}

export default UserClass;