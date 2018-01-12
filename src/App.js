import React, { Component } from 'react';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Menu, ContextMenu, MenuItem, SubMenu } from '@progress/kendo-layout-react-wrapper';
import logo from './logo.svg';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div>
            <Menu
                dataSource={[{text: 'item 1'}, {text: 'item 2', items: [{text: "Sub Item 1"}, {text: "Sub Item 2"}]}]}
                openOnClick={true}
                closeOnClick={true}
                select={(e) => {console.log(e, "An item is selected.")}}
            />
        </div>
    );
  }
}

export default App;
