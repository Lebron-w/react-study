import {Component,Fragment} from 'react'

import PropTypes from 'prop-types'

class MenuItem extends Component {
    constructor (props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
        this.state= {}
    }
    render () {
        return (
            <Fragment>
                <li onClick={this.handleClick}>
                    {this.props.name}{this.props.content}
                </li>
            </Fragment>
        )
    }
    handleClick () {
        this.props.deleteItem(this.props.index)
        console.log(this.props.index)
    }
}
MenuItem.propTypes = {
    name:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
MenuItem.defaultProps = {
    name : 'title'
}
export default MenuItem