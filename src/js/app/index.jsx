import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../components/test.jsx'


class App extends React.Component {
    componentDidMount(){
        console.log(this.refs)
    }
    render(){
        return (
            <div ref='hhh'>
            <Test />
            ee</div>
        )
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
)
