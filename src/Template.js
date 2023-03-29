import {Document, Page, Text, View, Font, StyleSheet, Image} from '@react-pdf/renderer'
import CVImage from '../src/images/passport.png'
import TwitterLogo from '../src/images/twitter-logo.png'
import LinkedInLogo from '../src/images/linkedin.png'

const Template = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.topLeftBox}></Text>
      <View style={styles.leftLine}></View>
      <View style={styles.nameView}>
        <Text style={styles.fullname}>Benjamin</Text>
        <Text style={styles.fullname}>Sanga</Text>
          <Text style={styles.title}>FRONT END DEVELOPER</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '7px'
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'row'}}>
            <Image style={{width: '14px', height: '12px'}} src={TwitterLogo} />
            <Text style={{fontSize: '8px', color: '#ACA6A6', paddingLeft: '3px'}}>www.twitter.com/yourfavben</Text>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '5px'
          }}>
            <Image style={{width: '14px', height: '14px'}} src={LinkedInLogo} />
            <Text style={{fontSize: '8px', color: '#ACA6A6', paddingLeft: '3px'}}>www.linkedin.com/in/benjamin-sanga-78b6a3156/</Text>
          </View>
        </View>
      </View>
      <Text style={styles.rightBox}></Text>
      <Image style={styles.image} src={CVImage} />
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
          <Text style={{fontSize: '14px', paddingBottom: '5px'}}>Professional</Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Responsive design
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Version Control
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Collaboration
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Performance Optimization
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Testing and Debugging
          </Text>
        </View>

        <View style={{paddingTop: '5px', paddingBottom: '10px'}}>
          <Text style={{fontSize: '14px', paddingBottom: '5px'}}>Expertise</Text>
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
            React
          </Text>
          <Text style={{fontSize: '11px', color: 'grey'}}>
            <Text style={{verticalAlign: 'super'}}>.&nbsp;</Text>
            Vue
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
                  Highly skilled Frontend Developer with expertise in HTML, CSS, and JavaScript, and proficiency in frontend frameworks like React and Vue. Experienced in creating responsive designs, ensuring cross-browser compatibility, and integrating APIs and third-party services. Knowledgeable in Git and Agile development methodologies. Passionate about crafting visually appealing and user-friendly interfaces, and driven to deliver high-quality solutions that exceed expectations.
                </Text>
              </View>
            </View>

            <Text style={{fontSize: '20px', paddingTop: '15px'}}>Experience</Text>
            <View style={{paddingTop: '7px'}}>
              <Text style={{fontSize: '14px'}}>Software Developer</Text>
              <View>
                <Text style={{fontSize: '10px', color: 'grey', width: '400px'}}>
                  Outsource Global Technologies Limited <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2022 - Present
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Contributed to WorkNation, a user-friendly platform that simplifies the hiring process for both employers and job seekers.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Collaborated closely with designers, UX/UI experts, and backend developers to ensure that the frontend integrates seamlessly with the backend.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Ensure that the web applications and websites are optimized for performance and accessibility.
                </Text>
              </View>
            </View>

            <View style={{paddingTop: '15px'}}>
              <Text style={{fontSize: '14px'}}>Software Engineer</Text>
              <View>
                <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
                  NetAccess Communications <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2019 - Present
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Worked to ensure a positive and hassle-free user experience, for customers, interns, and staff.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Helped to provide excellent customer service at all times by building software on-demand for customers.
                </Text>
                <Text style={{fontSize: '10px', width: '300px', color: 'grey'}}>
                  -&nbsp; Identified and maximized scale opportunities, and increased customer retention rates.
                </Text>
              </View>
            </View>

          </View>
        </View>

      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
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
        <Text style={{fontSize: '20px', paddingTop: '20px'}}>Education</Text>

        <View style={{paddingTop: '5px', paddingBottom: '10px'}}>

          <View>
            <Text style={{fontSize: '14px'}}>Computer Science</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
                University of Jos <Text style={{color: '#000000'}}>&nbsp;&nbsp;|&nbsp;&nbsp;</Text> 2017 - 2021
              </Text>
              <Text style={{fontSize: '10px', width: '200px', color: 'grey'}}>
                -&nbsp; In view. On course to graduate with high honors.
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

          <View style={{paddingTop: '10px'}}>
            <Text style={{fontSize: '14px'}}>Software Engineering</Text>
            <View>
              <Text style={{fontSize: '10px', color: 'grey', width: '200px'}}>
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
    fontSize: 11,
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
