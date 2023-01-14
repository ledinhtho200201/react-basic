import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render() {
        console.log('>>> Check props redux ', this.props.dataRedux)
        return (
            <>
                <div>
                    Hello world from Hompage
                </div>
                <div>
                    <img src={logo} style={{ width: '300px', height: '300px', borderRadius: '50%', marginTop: '20px' }} />
                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(Color(Home));