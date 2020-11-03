import React, {Component,Fragment} from 'react'

class Menu extends Component{
    constructor (props) {
        super(props) //调用父级的方法
        this.state = {
            inputValue: 'js',
            list: ['about','product']
        }
    }
    render () {
        return (
            // flex
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加导航</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
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
    //增加列表
    addList () {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
}
export default Menu