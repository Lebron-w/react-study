import React, {Component,Fragment} from 'react'
import './style.css'
import MenuItem from './MenuItem.js'

class Menu extends Component{
    constructor (props) {
        super(props) //调用父级的方法
        this.state = {
            inputValue: 'js',
            list: ['about','product']
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    render () {
        return (
            // flex
            <Fragment>
                {/*注释*/}
                <div>
                    <label htmlFor="add">增加导航</label>
                    <input id="add" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加导航</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                // <li
                                //    onClick={this.deleteItem.bind(this,index)}
                                //    key={index}
                                //    dangerouslySetInnerHTML={{__html:item}}
                                // >
                                // </li>
                                <MenuItem
                                    content={item}
                                    // name='title:'
                                    index={index}
                                    key={index+item}
                                    list={this.state.list}
                                    deleteItem={this.deleteItem}
                                />
                                )
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
    //删除列表项
    deleteItem (index) {
        // 大忌，不能直接操作state的值，会造成很大的性能问题
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // })
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list: list
        })
    }
}
export default Menu