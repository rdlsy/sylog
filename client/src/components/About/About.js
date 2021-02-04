import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './style';
import { Avatar, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import { FaNode, FaTrello, FaGithub, FaSlack } from "react-icons/fa";

function About() {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [page, setPage] = useState({
    top: 0,
    left: 0
  })

  const onMouseMove = (e) => {
    setPage({
      top: e.pageX/30,
      left: e.pageY/30
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 500)
    
  }, []);

  return (
    <section>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={clsx(classes.container, active && classes.containerActive)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={clsx(classes.paper, active && classes.paperActive)} onMouseMove={onMouseMove}>
              <Grid container className={classes.box}>
                <Grid item xs={6} className={clsx(classes.item, active&& classes.itemActive)} style={{ alignItems: 'center', paddingLeft: '0' }}>
                  <div className={classes.wrap}>
                    <Avatar 
                      alt="my photo" 
                      src="/profile.jpeg" 
                      className={classes.avatar} 
                      style={{ left: page.left, top: page.top }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6} className={clsx(classes.item, active&& classes.itemActive)}>
                  <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title}>
                    About Me
                  </Typography>
                  <p className={classes.text}>
                    안녕하세요. 프론트엔드 개발자 이세영입니다.<br />
                    빠르게 변화하는 웹 트렌드를 쫓아 개발하며<span className={classes.br} />
                    그 자리에 만족하기 보다 항상 발전하길 바라고<span className={classes.br} />
                    혼자가 아닌 함께했을 때 모두가 빛날 수 있는<span className={classes.br} />
                    늘 겸손하고 소통하는 그런 개발자가 되고 싶습니다.
                  </p>
                  <div className={classes.link}>
                    <a href="https://github.com/rdlsy" title="github 바로가기" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href="mailto:lsy_65@nave.com" title="메일 보내기"><EmailIcon /></a>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper2}>
              <Grid container className={classes.box2}>
                <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.subTitle}>
                  Skills
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#d76537' }}>
                      <IoLogoHtml5 />
                    </Avatar>
                    <ListItemText className={classes.name} primary="HTML5" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#4b9bd4' }}>
                      <IoLogoCss3 />
                    </Avatar>
                    <ListItemText className={classes.name} primary="CSS3" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#f2db5d' }}>
                      <IoLogoJavascript style={{ color: '#2e2e2c' }} />
                    </Avatar>
                    <ListItemText className={classes.name} primary="Javascript" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#2a69a9' }}>
                      <DiJqueryLogo style={{ color: '#8dcef1' }}/>
                    </Avatar>
                    <ListItemText className={classes.name} primary="JQuery" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#282c34' }}>
                      <IoLogoReact style={{ color: '#81d7f7' }} />
                    </Avatar>
                    <ListItemText className={classes.name} primary="React" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#8dba39' }}>
                      <FaNode style={{ color: '#333' }} />
                    </Avatar>
                    <ListItemText className={classes.name} primary="Node.js" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#3e3021' }}>
                      <DiMongodb  style={{ color: '#6ca453' }} />
                    </Avatar>
                    <ListItemText className={classes.name} primary="MongoDB" />
                  </ListItem>
                </List>
              </Grid>
              <Grid container className={classes.box2}>
                <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.subTitle}>
                  Tool
                </Typography>
                <List className={classes.list} style={{ justifyContent: 'flex-start' }}>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#25292e' }}>
                      <FaGithub />
                    </Avatar>
                    <ListItemText className={classes.name} primary="Github" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#2f6fa8' }}>
                      <FaTrello />
                    </Avatar>
                    <ListItemText className={classes.name} primary="Trello" />
                  </ListItem>
                  <ListItem>
                    <Avatar className={classes.icons} style={{ backgroundColor: '#34163c' }}>
                      <FaSlack />
                    </Avatar>
                    <ListItemText className={classes.name} primary="Slack" />
                  </ListItem>
                </List>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default About;