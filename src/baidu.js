import React from 'react';
import './index.css';
import 'antd/dist/antd.css';
import logo from './logo001.png'

class Link extends React.Component {
    render() {
        return (
            <div>
                <a>新闻</a>
                <a>hao123</a>
                <a>地图</a>
                <a>贴吧</a>
                <a>视频</a>
                <a>图片</a>
                <a>网盘</a>
                <a>更多</a>
            </div>
        );
    }
}
const Option = (props) => {
    return (
        <option>{props.value}</option>
    )
}
const OptionList = (props) => {
    return (
        props.data.map(record => <Option value={record} />)
    )
}
class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            history: [],
        }
    }

    searchInput = () => {
        this.setState({
            history: [...this.state.history, this.state.inputValue]
        })
        console.log(this.state.history)
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <div className='search'>
                <img id='logo' src={logo} alt='logo' />
                <div>
                    <input list='history-list'
                           type='text'
                           onChange={this.handleChange.bind(this)}
                           style={{   '-webkit-appearance': 'none'}}
                    />
                    <datalist id='history-list'>
                       <OptionList data={this.state.history}/>
                    </datalist>
                    <button onClick={this.searchInput}>百度一下</button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Link />
                <SearchInput />
            </div>
        );
    }
}

export default App