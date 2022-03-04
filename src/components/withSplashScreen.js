import React, {Component} from 'react';
import './withSplashScreen.css';
import myVideo from "../HartLogoVid.mp4";


function LoadingMessage() {

    return (
        <div className="App">
            <video  autoPlay muted loop>
                <source src={myVideo} type="video/mp4" />
            </video>
        </div>
    );
}

function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                playing: true,
                loading: true,
                muted: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 22000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return LoadingMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;

        }
    };
}


export default withSplashScreen;