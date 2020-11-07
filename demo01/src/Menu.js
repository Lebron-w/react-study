import React, {Component,Fragment} from 'react'
import './style.css'
import MenuItem from './MenuItem.js'

class Menu extends Component{
    //在某一时刻，可以自动执行的函数
    constructor (props) {
        super(props) //调用父级的方法
        this.state = {
            inputValue: 'js',
            list: ['about','product']
        }
        this.deleteItem = this.deleteItem.bind(this)
        console.log('constructor-----数据初始化')
    }
    componentWillMount () {
        console.log('conponentWillmount-------组件将要挂到页面的时刻')
    }
    componentDidMount () {
        console.log('componentDidMount -------- 组件挂载完成时刻')
    }
    render () {
        console.log('render-----组件挂在中')
        return (
            // flex
            <Fragment>
                {/*注释*/}
                <div>
                    <label htmlFor="add">增加导航</label>
                    <input 
                        id="add" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref = {(input => {this.input = input})}
                    />
                    <button onClick={this.addList.bind(this)}>增加导航</button>
                </div>
                <ul ref={ul => {this.ul = ul}}>
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
            inputValue: this.input.value
        })
    }
    //增加列表
    addList () {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        },( ()=> {
            console.log(this.ul.querySelectorAll('li').length)
        }))
        
        // console.log(this.ul.querySelectorAll('li').length)
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