import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Header, Brand, SearchBar, Results, Footer} from './components';
class App extends Component{
    render(){
        return <div>
            <Header/>
            <Brand />
            <SearchBar />
            <Results />
            <Footer />
        </div>
    }
}

ReactDOM.render(<App />,document.getElementById('root'));