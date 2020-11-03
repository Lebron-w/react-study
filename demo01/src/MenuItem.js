import {Component,Fragment} from 'react'
class MenuItem extends Component {
    constructor (props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
        this.state= {}
    }
    render () {
        return (
            <Fragment>
                <li onClick={this.handleClick}>{this.props.content}</li>
            </Fragment>
        )
    }
    handleClick () {
        this.props.deleteItem(this.props.index)
        console.log(this.props.index)
    }
}
export default MenuItem