import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PieChartIcon from '@material-ui/icons/PieChart';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BuildIcon from '@material-ui/icons/Build';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import './SmAdminPanel.css';
import SmAdminGeneral from "../sm-admin-general/SmAdminGeneral";
import SmAdminMessages from "../sm-admin-messages/SmAdminMessages";
import SmAdminAccounts from "../sm-admin-accounts/SmAdminAccounts";
import SmAdminExperiences from "../sm-admin-experiences/SmAdminExperiences";
import SmAdminQuestionnaires from "../sm-admin-questionnaires/SmAdminQuestionnaires";
import SmAdminPosts from "../sm-admin-posts/SmAdminPosts";
import SmAdminStatistics from "../sm-admin-statistics/SmAdminStatistics";
import SmAdminComments from "../sm-admin-comments/SmAdminComments";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

class SmAdminPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    render() {

        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="scrollable force tabs example"
                        centered
                    >
                        <Tab label="General" icon={<BuildIcon />}/>
                        <Tab label="Statistics" icon={<PieChartIcon />}/>
                        <Tab label="Posts" icon={<AllInboxIcon />}/>
                        <Tab label="Comments" icon={<ChatBubbleIcon />}/>
                        <Tab label="Questionnaires" icon={<ContactSupportIcon />}/>
                        <Tab label="Experiences" icon={<GroupWorkIcon />}/>
                        <Tab label="Accounts" icon={<SupervisorAccountIcon />}/>
                        <Tab label="Messages" icon={<ChatIcon />}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={this.state.value} index={0}>
                    <SmAdminGeneral></SmAdminGeneral>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <SmAdminStatistics></SmAdminStatistics>
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    <SmAdminPosts></SmAdminPosts>
                </TabPanel>
                <TabPanel value={this.state.value} index={3}>
                    <SmAdminComments></SmAdminComments>
                </TabPanel>
                <TabPanel value={this.state.value} index={4}>
                    <SmAdminQuestionnaires></SmAdminQuestionnaires>
                </TabPanel>
                <TabPanel value={this.state.value} index={5}>
                    <SmAdminExperiences></SmAdminExperiences>
                </TabPanel>
                <TabPanel value={this.state.value} index={6}>
                    <SmAdminAccounts></SmAdminAccounts>
                </TabPanel>
                <TabPanel value={this.state.value} index={7}>
                    <SmAdminMessages></SmAdminMessages>
                </TabPanel>
            </div>
        );
    }
}

export default SmAdminPanel;
