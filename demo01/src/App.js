import React, {Component} from 'react'

class App extends Component {
    render () {
        return (
            //JSX
            <ul className="my-list">
                <li>{false ? 'Js.com' : '魏'}</li>
                <li>I Love React</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'js.com')
        // var child2 = React.createElement('li',null,'I Love React')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}
export default App