import * as React from 'react';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';

import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { ContentPaste, Note, Person } from '@mui/icons-material';
import { Box, styled } from '@mui/joy';
import Link from 'next/link';

export default function Navigation() {
  const classes = "MuiListItemButton-root MuiListItemButton-colorNeutral MuiListItemButton-variantPlain css-1xphdof-JoyListItemButton-root";

  return (
    <Box
      sx={{ '--ListItem-radius': 'var(--joy-radius-sm)', '--List-gap': '15px' }}
    >
      <List
        aria-labelledby="nav-list-browse"
        sx={{
          '& .JoyListItemButton-root': { p: '8px' },
          rowGap: 1
        }}
      >
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/">
            <ListItemDecorator sx={{m: 0, justifyContent: "center", width: "100%",}}>
              <PeopleRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>Dashboard</ListItemContent>
          </Link>
        </ListItem>
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/">
            <ListItemDecorator sx={{ color: 'neutral.500', width: "100%", m: 0, justifyContent: "center" }}>
              <Note />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>RFQ</ListItemContent>
          </Link>
        </ListItem>
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/quotation">
            <ListItemDecorator sx={{ color: 'neutral.500', width: "100%", m: 0, justifyContent: "center" }}>
              <AccountTreeRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>Quotations</ListItemContent>
          </Link>
        </ListItem>
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/">
            <ListItemDecorator sx={{ color: 'neutral.500', width: "100%", m: 0, justifyContent: "center" }}>
              <ContentPaste />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>Orders</ListItemContent>
          </Link>
        </ListItem>
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/">
            <ListItemDecorator sx={{ color: 'neutral.500', width: "100%", m: 0, justifyContent: "center" }}>
              <ArticleRoundedIcon />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>Suppliers</ListItemContent>
          </Link>
        </ListItem>
        <ListItem sx={theme => ({justifyContent: "center", padding: "15px 10px", "&:hover": {background: theme.colorSchemes.light.palette.background.level2}})}>
          <Link className={classes} href="/profile">
            <ListItemDecorator sx={{ color: 'neutral.500', width: "100%", m: 0, justifyContent: "center" }}>
              <Person />
            </ListItemDecorator>
            <ListItemContent sx={{color: 'neutral.500', fontWeight: 400}}>Profile</ListItemContent>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}
