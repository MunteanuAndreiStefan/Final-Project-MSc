import React, {Component} from 'react';
import './SmSidebar.css';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class SmSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <div>
                <Drawer
                    style={{width: 340}}
                    variant="permanent"
                >
                    <Toolbar/>
                    <div style={{overflow: 'auto'}}>
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                        <Divider/>
                        <List>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default SmSidebar;
