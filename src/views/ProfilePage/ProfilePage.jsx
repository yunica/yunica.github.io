import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Description from "@material-ui/icons/Description";
import Code from "@material-ui/icons/Code";
import Extension from "@material-ui/icons/Extension";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinksProfile from "components/Header/HeaderLinksProfile.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";


import profile from "assets/img/perfil.jpg";
// sections
import WorkSection from "./Sections/WorkSection.jsx";


import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";


import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class ProfilePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand=" "
          rightLinks={<HeaderLinksProfile />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax
          image={require("assets/img/bg7.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Junior Flores</h3>
                      <h6>DESARROLLADOR</h6>
                      <Button justIcon link  className={classes.margin5}
                      href="https://github.com/yunica" target="_blank">
                        <i className={"fab fa-github"} />
                      </Button>
                      <Button justIcon link  className={classes.margin5}
                      href="https://gitlab.com/yunica" target="_blank">
                        <i className={"fab fa-gitlab"} />
                      </Button>
                      <Button justIcon link   className={classes.margin5} 
                      href="https://www.linkedin.com/in/juniorflores/" target="_blank">
                        <i className={"fab fa-linkedin"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classNames(classes.description, classes.textCenter)}>
                <p>
                Apasionado por la tecnologia, actualmente soy desarrollador freelance.
                Defensor del open source, la auto-educación y la creatividad.
                Disfruto del séptimo arte, la fotografiá, la lectura 
                y me encantan los juegos de mesa.{" "}
                </p>
              </div>
              <div className={classes.profileTabs}>
                <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Work",
                    tabIcon: Palette,
                    tabContent: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={7}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Latest Collections</h4>
                          <GridContainer className={classes.collections}>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + mariyaGeorgieva + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Stilleto
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + clemOnojeghuo + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge color="info" className={classes.badge}>
                                    Spring 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      High Heels
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage: "url(" + oluEletu + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="danger"
                                    className={classes.badge}
                                  >
                                    Summer 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Flats
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <Card
                                background
                                style={{
                                  backgroundImage:
                                    "url(" + clemOnojegaw + ")"
                                }}
                              >
                                <a href="#pablo" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="success"
                                    className={classes.badge}
                                  >
                                    Winter 2016
                                  </Badge>
                                  <a href="#pablo">
                                    <h2 className={classes.cardTitleWhite}>
                                      Men's Sneakers
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={2}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>Stats</h4>
                          <ul className={classes.listUnstyled}>
                            <li>
                              <b>60</b> Products
                            </li>
                            <li>
                              <b>4</b> Collections
                            </li>
                            <li>
                              <b>331</b> Influencers
                            </li>
                            <li>
                              <b>1.2K</b> Likes
                            </li>
                          </ul>
                          <hr />
                          <h4 className={classes.title}>About this work</h4>
                          <p className={classes.description}>
                            French luxury footwear and fashion. The footwear has
                            incorporated shiny, red-lacquered soles that have
                            become his signature.
                          </p>
                          <hr />
                          <h4 className={classes.title}>Focus</h4>
                          <Badge color="primary">Footwear</Badge>
                          <Badge color="rose">Luxury</Badge>
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Connections",
                    tabIcon: People,
                    tabContent: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={avatar} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + avatar + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Gigi Hadid
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={marc} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + marc + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Marc Jacobs
                                    </h4>
                                    <Muted>
                                      <h6>DESIGNER</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      Don't be scared of the truth because we
                                      need to restart the human foundation in
                                      truth...
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={kendall} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage: "url(" + kendall + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      Kendall Jenner
                                    </h4>
                                    <Muted>
                                      <h6>MODEL</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye. Don't
                                      be scared of the truth.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={5}
                            className={classes.gridItem}
                          >
                            <Card profile plain className={classes.card}>
                              <GridContainer>
                                <GridItem xs={12} sm={12} md={5}>
                                  <CardHeader image plain>
                                    <a href="#pablo">
                                      <img src={cardProfile2Square} alt="..." />
                                    </a>
                                    <div
                                      className={classes.coloredShadow}
                                      style={{
                                        backgroundImage:
                                          "url(" + cardProfile2Square + ")",
                                        opacity: "1"
                                      }}
                                    />
                                  </CardHeader>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={7}>
                                  <CardBody plain>
                                    <h4 className={classes.cardTitle}>
                                      George West
                                    </h4>
                                    <Muted>
                                      <h6>MODEL/DJ</h6>
                                    </Muted>
                                    <p className={classes.description}>
                                      I love you like Kanye loves Kanye.
                                    </p>
                                  </CardBody>
                                </GridItem>
                              </GridContainer>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  },
                  {
                    tabButton: "Media",
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={mariyaGeorgieva}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={clemOnojegaw}
                            className={navImageClasses}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <img
                            alt="..."
                            src={clemOnojeghuo}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={oluEletu}
                            className={navImageClasses}
                          />
                          <img
                            alt="..."
                            src={cynthiaDelRio}
                            className={navImageClasses}
                          />
                        </GridItem>
                      </GridContainer>
                    )
                  }
                ]}
              />
              </div>
            <Clearfix />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
