import React, { Component } from "react";

class Loading extends Component {
    // componentDidMount() {
    //     if (!this.props.loaded) {
    //         this.props.handleMount();
    //     }
    // }

    render() {
        const { children, loaded } = this.props;
    
        return loaded ? children : (
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped active"
                    style={{ width: "100%"}}
                >
                </div>
            </div>
        )
    }
}

export default Loading;