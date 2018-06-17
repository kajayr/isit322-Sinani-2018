import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
    <ListItem
button
component={Link}
to="/">
    <ListItemIcon>
    <InboxIcon/>
    </ListItemIcon>
    <ListItemText primary="Home Page"/>
    </ListItem>
    <ListItem
button
component={Link}
to="/GetGit">
    <ListItemIcon>
    <StarIcon/>
    </ListItemIcon>
    <ListItemText primary="Get Git"/>
    </ListItem>
    <ListItem
button
component={Link}
to="/GetFoo">
    <ListItemIcon>
    <SendIcon/>
    </ListItemIcon>
    <ListItemText primary="Get Foo"/>
    </ListItem>
    <ListItem
button
component={Link}
to="/SmallNumbers">
    <ListItemIcon>
    <SendIcon/>
    </ListItemIcon>
    <ListItemText primary="Phone Number"/>
    </ListItem>
    <ListItem
button
component={Link}
to="/ShowGist">
    <ListItemIcon>
    <SendIcon/>
    </ListItemIcon>
    <ListItemText primary="New Gist"/>
    </ListItem>

    <ListItem
button
component={Link}
to="/get-gist-list">
    <ListItemIcon>
    <SendIcon/>
    </ListItemIcon>
    <ListItemText primary="Get Gist List"/>
    </ListItem>
    </div>
);

export const demoItems = (
    <div>
    <ListItem
button
component={Link}
to="/api-foo">
    <ListItemIcon>
    <DraftsIcon/>
    </ListItemIcon>
    <ListItemText primary="API Foo"/>
    </ListItem>

    </div>
);

/*
                    <MenuItem
                        primaryText='Home Page'
                        containerElement={<Link to="/"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Get Git'
                        containerElement={<Link to="/GetGit"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Get Foo'
                        containerElement={<Link to="/GetFoo"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='Phone Number'
                        containerElement={<Link to="/SmallNumbers"/>}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText='New Gist'
                        containerElement={<Link to="/ShowGist"/>}
                        onClick={this.handleToggle}
                    />
                   <MenuItem
                        primaryText='Get Gist List'
                        containerElement={<Link to="/get-gist-list"/>}
                        onClick={this.handleToggle}
                    />*/