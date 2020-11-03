import React, {Component,Fragment} from 'react'

class Menu extends Component{
    constructor (props) {
        super(props) //调用父级的方法
        this.state = {
            inputValue: 'js',
            list: []
        }
    }
    render () {
        return (
            // flex
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button>增加导航</button>
                </div>
                <ul>
                    <li>about</li>
                    <li>product</li>
                </ul>
            </Fragment>
        )
    }
    inputChange (e) {
        // console.log(e.target.value)
        // console.log(this)
        this.setState({
            inputValue:e.target.value
        })
    }
}
export default Menu