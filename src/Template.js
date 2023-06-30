import {Document, Page, Text, View, Font, StyleSheet, Image, Link} from '@react-pdf/renderer'
import CVImage from '../src/images/passport.png'
import TwitterLogo from '../src/images/twitter-logo.png'
import LinkedInLogo from '../src/images/linkedin.png'
import GitHubLogo from '../src/images/github.png'

const Template = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.topLeftBox}></Text>
      <View style={styles.leftLine}></View>
      <View style={styles.nameView}>
        <Text style={styles.fullname}>Benjamin Sanga</Text>
        <Text style={styles.title}>FRONT END DEVELOPER</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '7px'
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '7px',
              paddingLeft: '3px'
            }}>
              <Image style={{width: '14px', height: '14px'}} src={LinkedInLogo} />
              <Text style={{fontSize: '10px', color: '#ACA6A6', paddingLeft: '3px'}}>
                <Link src="https://www.linkedin.com/in/benjamin-sanga-78b6a3156/" style={{textDecoration: 'none', color: '#0072b1'}}>Benjamin Sanga</Link>
              </Text>
            </View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '7px'
            }}>
              <Image style={{width: '18px', height: '18px'}} src={GitHubLogo} />
              <Text style={{fontSize: '10px', paddingLeft: '3px'}}>
                <Link src="https://github.com/benjamin-sanga" style={{textDecoration: 'none', color: '#000'}}>Benjamin Sanga</Link>
              </Text>
            </View>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              paddingTop: '7px',
              paddingLeft: '3px'
            }}>
              <Image style={{width: '14px', height: '12px'}} src={TwitterLogo} />
              <Text style={{fontSize: '10px', color: '#ACA6A6', paddingLeft: '3px', paddingTop: '-3px'}}>
                <Link src="https://www.twitter.com/yourfavben" style={{textDecoration: 'none', color: '#00acee'}}>@yourfavben</Link>
              </Text>
            </View>
          </View>

        </View>
      </View>
      <Text style={styles.rightBox}></Text>
      {/*<Image style={styles.image} src={CVImage} />*/}
      <View style={styles.contacts}>
        <View style={{
          position: 'absolute',
          width: '64px',
          height: '86px',
          left: '20px',
          top: '0px'
        }}>
          <View>
            <Text style={{fontSize: '50px', color: '#ACA6A6'}}>E</Text>
          </View>
          <View style={{
            position: 'absolute',
            left: '55px',
            top: '15px',
            width: '100px'
            }}>
            <View style={{paddingTop: '5px'}}>
              <Text style={{fontSize: '12px', fontWeight: 'light', fontFamily: 'Oswald'}}>Email</Text>
              <Text style={{fontSize: '8px', color: '#ACA6A6'}}>benjotaiba@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.emailBorder}></View>
        <View style={{
          position: 'absolute',
          width: '64px',
          height: '86px',
          left: '220px',
          top: '0px'
        }}>
          <View>
            <Text style={{fontSize: '50px', color: '#ACA6A6'}}>P</Text>
          </View>
          <View style={{
            position: 'absolute',
            left: '55px',
            top: '15px',
            width: '100px'
            }}>
            <Text style={{fontSize: '12px', fontWeight: 'light', fontFamily: 'Oswald'}}>Phone</Text>
            <Text style={{fontSize: '8px', color: '#ACA6A6'}}>+234(0)7062220012</Text>
          </View>
        </View>
        <View style={styles.phoneBorder}></View>
        <View style={{
          position: 'absolute',
          width: '64px',
          height: '86px',
          left: '400px',
          top: '0px'
        }}>
          
          <View>
            <Text style={{fontSize: '50px', color: '#ACA6A6'}}>L</Text>
          </View>
          <View style={{
            position: 'absolute',
            left: '55px',
            top: '15px',
            width: '100px'
            }}>
            <Text style={{fontSize: '12px', fontWeight: 'light', fontFamily: 'Oswald'}}>Location</Text>
            <Text style={{fontSize: '8px', color: '#ACA6A6'}}>Abuja, Nigeria</Text>
          </View>
        </View>
      </View>

      <View style={styles.leftPane}>
        <Text style={{fontSize: '20px'}}>Skills</Text>

        <View style={{paddingTop: '10px', paddingBottom: '10px'}}>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            HTML/CSS
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            JavaScript
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Git/GitHub
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Jira
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Jest
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            ReactJS
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            NextJS
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            NodeJS
          </Text>
        </View>

        <View style={{paddingTop: '5px', paddingBottom: '10px'}}>
          <Text style={{fontSize: '14px', paddingBottom: '5px'}}>Interests</Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Human-Machine Interface
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Artificial Intelligence
          </Text>
        </View>

        <View style={styles.leftPaneBorder}></View>

        <View style={styles.rightPane}>
          <Text style={{fontSize: '20px'}}>Summary</Text>

          <View style={{paddingTop: '5px', paddingBottom: '10px'}}>

            <View>
              <View>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  Highly skilled Frontend Developer with expertise in HTML, CSS, and JavaScript.
                  Proficiency in frontend frameworks like React and Vue.
                  Experienced in creating responsive designs, ensuring cross-browser compatibility,
                  integrating APIs and third-party services. Knowledgeable in Git and
                  Agile development methodologies. Passionate about crafting visually appealing
                  and user-friendly interfaces. Driven to deliver high-quality solutions
                  that exceed expectations.
                </Text>
              </View>
            </View>

            <Text style={{fontSize: '20px', paddingTop: '10px'}}>Professional Experience</Text>
            <View style={{paddingTop: '5px'}}>
              <Text style={{fontSize: '14px'}}>Software Developer</Text>
              <View>
                <Text style={{fontSize: '10px', width: '400px'}}>
                  Outsource Global Technologies Limited, Abuja, Nigeria <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> Remote <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2022 - Present
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  As a frontend developer, I had the opportunity to work alongside a talented team of seven software developers,
                  collaborating on the development of three unique software projects. Over a span of six months,
                  the project I actively contributed to experienced an exceptional growth of 300%,
                  showcasing the remarkable achievements of our group.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Successfully implemented the frontend for WorkNation, a user-friendly platform that streamlines the hiring process for both employers and job seekers. Leveraged technologies such as ReactJS, NextJS, PostgreSQL, and TypeORM to create an intuitive and efficient experience.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Fostered close collaboration with designers, UI/UX experts, and backend developers to guarantee seamless integration between the frontend and backend components. Employed JavaScript technology to facilitate smooth communication and synchronization across the entire software solution.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Ensured optimal performance and accessibility of web applications and websites by prioritizing core web vitals metrics.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Implemented strategies and optimizations to enhance loading speed, responsiveness, and user experience, guaranteeing that the digital solutions met high standards of performance and accessibility.
                </Text>
              </View>
            </View>

          </View>
        </View>

      </View>
    </Page>

    <Page style={styles.body}>
      <View style={{
        position: 'absolute',
        left: '33px',
        top: '30px'
      }}>
        <Text style={{fontSize: '14px', paddingBottom: '5px'}}>Hobbies</Text>
        <Text style={{fontSize: '11px', color: 'grey'}}>
          <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
          Football
        </Text>
        <Text style={{fontSize: '11px', color: 'grey'}}>
          <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
          Gaming
        </Text>
        <Text style={{fontSize: '11px', color: 'grey'}}>
          <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
          Reading
        </Text>
      </View>

      <View style={{
        position: 'absolute',
        width: '1px',
        height: '313px',
        left: '180px',
        top: '5px',
        backgroundColor: "#000000",
        border: '1px solid #000000'
      }}></View>

      <View style={{
        position: 'absolute',
        left: '230px',
        top: '0px'
      }}>

        <View style={{paddingTop: '5px', paddingBottom: '10px'}}>

          <View style={{paddingTop: '10px'}}>
            <Text style={{fontSize: '14px'}}>Software Engineer</Text>
            <View>
              <Text style={{fontSize: '10px', width: '400px'}}>
                NetAccess Communications, Jos, Nigeria <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> Hybrid <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2019 - Present
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                Lead the software development team and improved the development timeline while leveraging available talents and using agile development on projects.
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                -&nbsp; Designed and implemented a Python-programmed Internet of Things (IoT) device using a microcontroller, enabling remote control and monitoring of home appliances via a mobile app.
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                -&nbsp; Ensured a seamless and user-friendly experience for all stakeholders by implementing automatedsolutions and web applications using Python and JavaScript.
              </Text>
            </View>
          </View>

          <Text style={{fontSize: '20px', paddingTop: '20px'}}>Projects</Text>
          <View style={{paddingTop: '10px'}}>
            <Text style={{fontSize: '14px'}}>Software Engineer</Text>
            <View>
              <Text style={{fontSize: '10px', width: '400px'}}>
                Ajokudi <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2019 - Present
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                Successfully initiated the concept and development of a platform serving as a collective fundraising avenue, enabling individuals to pool resources and raise funds collaboratively.&nbsp;
                <Text style={{fontSize: '10px'}}>
                  <Link src="https://ajokudi-frontend.vercel.app/" style={{textDecoration: 'underline', color: 'grey'}}>Link</Link>
                </Text>
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                -&nbsp; Implemented a robust system that ensures all participants in the fundraising circle remain informed and updated on the progress of the campaigns.
              </Text>
              <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                -&nbsp; Successfully deployed and hosted the platform on Heroku initially, and later transitioned to Vercel for frontend hosting and Render for backend hosting, optimizing performance and scalability.
              </Text>
            </View>
          </View>

          <Text style={{fontSize: '20px', paddingTop: '20px'}}>Education</Text>
          <View>
            <Text style={{fontSize: '14px'}}>Computer Science</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
                University of Jos <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2017 - 2021
              </Text>
            </View>
          </View>

        </View>

        <Text style={{fontSize: '20px', paddingTop: '20px'}}>Courses</Text>

        <View style={{paddingTop: '5px', paddingBottom: '10px'}}>

          <View style={{paddingTop: '10px'}}>
            <Text style={{fontSize: '14px'}}>Front End Libraries</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
                freeCodeCamp.org <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> Jul, 2020 - Aug, 2020
              </Text>
            </View>
          </View>

          <View style={{paddingTop: '10px'}}>
            <Text style={{fontSize: '14px'}}>APIs and Microservices</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
                freeCodeCamp.org <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> Jun, 2020 - Jul, 2020
              </Text>
            </View>
          </View>

          <View style={{paddingTop: '5px'}}>
            <Text style={{fontSize: '14px'}}>Software Engineering</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '400px'}}>
                New Horizons Computer Learning Centers <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> Jan, 2016 - Apr, 2016
              </Text>
            </View>
          </View>

        </View>

      </View>
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Oswald',
    paddingHorizontal: 35,
  },
  topLeftBox : {
    position: 'absolute', 
    top: '0', 
    left: '0', 
    width: '243px', 
    height: '55px', 
    backgroundColor: '#E7EAF7'
  },
  rightBox: {
    position: 'absolute',
    width: '336px',
    height: '120px',
    right: '0',
    top: '115px',
    backgroundColor: '#E7EAF7'
  },
  leftLine: {
    position: 'absolute',
    width: 0,
    height: '240px',
    left: '33px',
    top: '94px',
    backgroundColor: "#000000",
    border: '1px solid #000000'
  },
  nameView: {
    position: 'relative',
    left: '50px',
    top: '65px'
  },
  fullname: {
    fontSize: 36,
    margin: 0,
    padding: 0,
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    color: '#31408E',
    // fontFamily: 'Oswald',
    // fontSize: 36,
    // fontWeight: 'bold',
    // lineHeight: '44px',
    // letterSpacing: '0.21em',
    // textAlign: 'left'
  },
  title: {
    fontSize: 14,
    marginBottom: 2,
    color: '#5B5A5A'
  },
  contacts: {
    position: 'absolute',
    width: '58px',
    height: '98px',
    left: '49px',
    top: '268px'
  },
  emailBorder: {
    position: 'absolute',
    width: '1px',
    height: '57px',
    left: '210px',
    top: '10px',
    backgroundColor: "#000000",
    border: '1px solid #000000'
  },
  phoneBorder: {
    position: 'absolute',
    width: '1px',
    height: '57px',
    left: '390px',
    top: '10px',
    backgroundColor: "#000000",
    border: '1px solid #000000'
  },
  image: {
    position: 'absolute',
    width: '139px',
    height: 'auto',
    left: '420px',
    top: '35px',
    // backgroundImage: "url(./images/Ann.png)",
    // backgroundColor: "#C3BBBB",
    borderRadius: '2px'
  },
  header: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
    color: 'grey',
  },
  leftPane: {
    position: 'absolute',
    left: '33px',
    top: '350px'
  },
  leftPaneBorder: {
    position: 'absolute',
    width: '1px',
    height: '313px',
    left: '150px',
    top: '5px',
    backgroundColor: "#000000",
    border: '1px solid #000000'
  },
  rightPane: {
    position: 'absolute',
    left: '200px',
    top: '0px',
    width: '200px'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});
export default Template
