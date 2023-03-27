import {Document, Page, Text, View, Font, StyleSheet} from '@react-pdf/renderer'

const Template = () => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.topLeftBox}></Text>
      <View style={styles.leftLine}></View>
      <View style={styles.nameView}>
        <Text style={styles.fullname}>Benjamin</Text>
        <Text style={styles.fullname}>Sanga</Text>
        <Text style={styles.title}>Front End Developer</Text>
      </View>
      <Text style={styles.rightBox}></Text>
      <Text style={styles.image}></Text>
      <View style={styles.contacts}>
        <View style={{
          position: 'absolute',
          width: '64px',
          height: '86px',
          left: '20px',
          top: '0px'
        }}>
          <View>
            <Text style={{fontSize: '70px', color: '#ACA6A6'}}>C</Text>
          </View>
          <View style={{
            position: 'absolute',
            left: '55px',
            top: '15px',
            width: '100px'
            }}>
            <Text style={{fontSize: '12px', fontWeight: 'light', fontFamily: 'Oswald'}}>Contact</Text>
            <Text style={{fontSize: '8px', color: '#ACA6A6'}}>benjotaiba@gmail.com</Text>
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
            <Text style={{fontSize: '70px', color: '#ACA6A6'}}>P</Text>
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
            <Text style={{fontSize: '70px', color: '#ACA6A6'}}>L</Text>
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

      <View>
        <Text>Skills</Text>

        <View>
          <Text>Professional</Text>
          <Text>HTML/CSS</Text>
          <Text>&gt; JavaScript</Text>
        </View>
      </View>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    // paddingTop: 5,
    // paddingBottom: 5,
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
    height: '149px',
    right: '0',
    top: '115px',
    backgroundColor: '#E7EAF7'
  },
  leftLine: {
    position: 'absolute',
    width: 0,
    height: '262px',
    left: '33px',
    top: '94px',
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
    fontFamily: 'Oswald',
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
    width: '0px',
    height: '57px',
    left: '210px',
    top: '10px',

    border: '1px solid #000000'
  },
  phoneBorder: {
    position: 'absolute',
    width: '0px',
    height: '57px',
    left: '390px',
    top: '10px',

    border: '1px solid #000000'
  },
  image: {
    // marginVertical: 15,
    // marginHorizontal: 100,
    position: 'absolute',
    width: '139px',
    height: '193px',
    left: '420px',
    top: '35px',
    // backgroundImage: "url(./images/Ann.png)",
    backgroundColor: "#C3BBBB",
    borderRadius: '2px'
  },
  header: {
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
    color: 'grey',
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
