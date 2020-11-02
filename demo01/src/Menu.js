import React, {Component,Fragment} from 'react'

class Menu extends Component{
    render () {
        return (
            // flex
            <Fragment>
                <div>
                    <input/>
                    <button>导航</button>
                </div>
                <ul>
                    <li>about</li>
                    <li>product</li>
                </ul>
            </Fragment>
        )
    }
}
export default Menu