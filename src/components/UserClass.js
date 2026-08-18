import React from 'react';

export class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userDetails: {
                name: "DummyData",
                location: "Dummy Location",
                avatar_url: "https://dummyimage.com/"
            }

        }
        console.log("Component Constructor");
    }

    async componentDidMount(){
        console.log("Component Did Mount");
        const data = await fetch("https://api.github.com/users/sjcoeanand");
        const result = await data.json();
        this.setState({
            userDetails: result
        })
    }
    componentDidUpdate(){
        console.log("did update called")
    }

    componentWillUnmount(){
        console.log("will unmount called")
    }
    render(){
        console.log("Component Rendered");
        const { userDetails} = this.state;
        return (
            <div>
                <div>User {this.props.name} Component</div>
                <div className='user-card'>
                    <img src={userDetails.avatar_url}  />
                    <h2>{userDetails.name}</h2>
                    <h3>{userDetails.location}</h3>
                </div>
            </div>
        )
    }
}
