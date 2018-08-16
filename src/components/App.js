import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                App
                {this.props.children}
            </div>
        )
    }
}

export default App