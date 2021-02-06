import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from './style';

const portfolio = [
  {
    title: '먹스타그램',
    description: 'MERN Stack 반응형웹',
    image: '/portpolio/project/4/pc.png',
    code: 'https://github.com/rdlsy/mukstagram',
    type: 'project',
    skills: ['React', 'Redux', 'MongoDB', 'Node.js', 'Express', 'Material UI'],
  },
  {
    title: 'Todo List',
    description: 'React Content API 반응형웹',
    image: '/portpolio/project/3/pc.png',
    link: 'https://rdlsy.github.io/todo-list/',
    code: 'https://github.com/rdlsy/todo-list',
    type: 'project',
    skills: ['React', 'Context API', 'Styled-components'],
  },
  {
    title: '세영N영화',
    description: 'React 반응형웹',
    image: '/portpolio/project/2/pc.png',
    link: 'https://rdlsy.github.io/search_movie/',
    code: 'https://github.com/rdlsy/search_movie',
    type: 'project',
    skills: ['React', 'Scss'],
  },
  {
    title: '사진 검색 웹 사이트',
    description: 'Javascript ES6 반응형웹',
    image: '/portpolio/project/1/pc.png',
    link: 'https://rdlsy.github.io/search_photo/',
    code: 'https://github.com/rdlsy/search_photo',
    type: 'project',
    skills: ['HTML', 'CSS', 'Javascript'],
  },
  {
    title: '애플파일',
    description: 'pc, mobile 리뉴얼 구축',
    image: '/portpolio/work/9/pc.jpeg',
    link: 'https://www.applefile.kr',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery', 'PHP'],
  },
  {
    title: '파일시티 엔젤마켓',
    description: 'pc, mobile 퍼블리싱',
    image: '/portpolio/work/8/pc.jpeg',
    link: 'https://www.filecity.co.kr/shop/#tab=list',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery', 'PHP'],
  },
  {
    title: '성신여대 입학처',
    description: '반응형웹 리뉴얼 구축',
    image: '/portpolio/work/7/pc.png',
    link: 'https://ipsi.sungshin.ac.kr/main.htm',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: '한국기술교육대 입학처',
    description: '반응형웹 리뉴얼 구축',
    image: '/portpolio/work/6/pc.png',
    link: 'https://ipsi.koreatech.ac.kr/main.do',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: '전주대학교 입학처',
    description: '반응형웹 리뉴얼 구축',
    image: '/portpolio/work/5/pc.png',
    link: 'http://www.jj.ac.kr/iphak/main.jsp',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: '계명대학교 입학처',
    description: '반응형웹 리뉴얼 구축',
    image: '/portpolio/work/4/pc.png',
    link: 'http://www.gokmu.ac.kr/main.htm',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: '지적측량 바로처리센터',
    description: '반응형 웹 퍼블리싱, 웹 접근성 인증마크',
    image: '/portpolio/work/3/pc.png',
    link: 'https://baro.lx.or.kr/main.do',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: '국토정보플랫폼',
    description: '리뉴얼 페이지 퍼블리싱',
    image: '/portpolio/work/2/web1.png',
    link: 'http://map.ngii.go.kr/mn/mainPage.do',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  },
  {
    title: 'K Petro 석유제품 수급보고시스템',
    description: '모바일 웹 퍼블리싱',
    image: '/portpolio/work/1/main.png',
    link: 'http://oilreport.or.kr/mob/index.do',
    type: 'work',
    skills: ['HTML', 'CSS', 'JQuery'],
  }
];

export default function Work() {
  const classes = useStyles();
  const [active, setActive] = useState({
    all: true,
    project: false,
    work: false
  });
  const [data, setData] = useState(portfolio);

  const handleClick = (item) => {
    const newState = { ...active };

    for (let key in newState) {
      key === item ?
      (newState[key] = true) :
      (newState[key] = false)
    }
    setActive(newState)

    if (item === 'all') {
      setData(portfolio);
    } else {
      setData(portfolio.filter(n => n.type === item));
    }
  }

  return (
    <section>
      <div className={classes.appBarSpacer} />
      <div className={classes.tab}>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button 
              className={clsx(classes.btn, active.all && classes.active)}
              onClick={() => handleClick('all')}
            >
              ALL
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button 
              className={clsx(classes.btn, active.project && classes.active)}
              onClick={() => handleClick('project')}
            >
              PROJECT
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button 
              className={clsx(classes.btn, active.work && classes.active)}
              onClick={() => handleClick('work')}
            >
              WORK
            </Button>
          </ListItem>
        </List>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {data.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title="Project Image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                  <Grid className={classes.skills}>
                    <List>
                      {
                        card.skills.map((skill, index) => (
                          <ListItem key={index}>{skill}</ListItem>
                        ))
                      }
                    </List>
                  </Grid>
                </CardContent>
                <CardActions>
                  {card.link &&
                    <Button size="small" color="primary" onClick={() => window.open(card.link, '_blank')}>
                      View
                    </Button>
                  }
                  {
                    card.code &&
                    <Button size="small" color="primary" onClick={() => window.open(card.code, '_blank')}>
                      Code
                    </Button>
                  }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}