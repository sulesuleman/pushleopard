
import React  ,{useState,Fragment} from "react";
import './campaigns.css';
import { Lock, InfoSquare } from 'tabler-icons-react';
import { Modal } from 'antd';
import Draggable from 'react-draggable';

// reactstrap components
import WindowChrome from './Windows/chrome'
import WindowOpera from './Windows/opera'
import WindowChrome10 from './Windows/chromewindow10'
import WindowOpera10 from './Windows/operawindow10'
import Firefox from './Windows/firefox'
import Edge from './Windows/edge'
import AndroidChrome from './Android/chrome'
import AndroidFirefox from './Android/firefox'
import AndroidOpera from './Android/opera'
import MacChrome from './Mac/chrome'
import MacSafari from './Mac/safari'
import MacOpera from './Mac/opera'
import MacFirefox from './Mac/firefox'
import { Upload,Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';

import {
 
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import Android from './Android/AndroidPage'
import Mac from './Mac/macpage'
import Window from './Windows/windowpage'
import CompaignsHeader from "components/Headers/Compaignsheader.js";
import { Steps, message } from 'antd';
import { Select } from 'antd';
import { DatePicker, Space } from 'antd';
import ReactDOM from 'react-dom'
import { Edit, Bell } from 'tabler-icons-react';
const { RangePicker } = DatePicker;
const { Option } = Select;
const { Step } = Steps;
const steps = [
  {
    title: 'Campaign Details',
    content: 'First-content',
  },
  {
    title: 'Create Notification',
    content: 'Second-content',
  },
  {
    title: 'Summary',
    content: 'Last-content',
  },
];


class StartCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  next = () => {

    const current = this.state.current + 1;
    this.setState({ current });
  };

  prev = () => {

    const current = this.state.current - 1;
    this.setState({ current });
  };
  render() {
    

    return (
      <>
        <CompaignsHeader />
        {/* Page content */}
        <Container className=" mt--7" fluid style={{position:'absolute', overflow: 'hidden'}}>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">

                  <>
                    <Steps current={this.state.current}>
                      {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                      ))}
                    </Steps>
                    <br />
                    <div className="steps-content">
                      {
                        this.state.current === 0 ?
                          <CampaignDetails />
                          :
                          this.state.current === 1 ?
                            <CampaignNotification style={{position:'relative'}}/>
                            :
                            this.state.current === 2 ?
                              <Summary />
                              :
                              <div></div>

                      }</div>
                    <br />

                    <div className="steps-action" style={{float:'right'}}>
                     
                     
                      {this.state.current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={this.prev}>
                          Previous
                        </Button>
                      )}
                       {this.state.current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                          Send
                        </Button>
                      )}
                       {this.state.current < steps.length - 1 && (
                        <Button type="primary" onClick={this.next}>
                          Continue
                        </Button>
                      )}
                    </div>
                  </>
                </CardHeader>




                <CardBody>

                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default StartCampaign;
var entrydate;
var expirydate;
function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
   entrydate=dateString
}
function onChangeexpiry(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
   expirydate=dateString
}
function onOk(value) {
  console.log('onOk: ', value);
}
var category = 'RegularCampaign';
var option = 'sendnow';
var show;
class Regular extends React.Component{
  render(){
    return(
      <div>
          <h5>select date to Schedule</h5>
          <Space direction="vertical" size={12}>
            <DatePicker showTime onChange={onChange} onOk={onOk} />

          </Space>
        </div>

    )
  }
}
class Flash extends React.Component{
  render(){
    return(
      <div>
      <h5>select date to Schedule</h5>
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChange} onOk={onOk} />

      </Space>
      <h5>select Expiry date to Schedule</h5>
      <Space direction="vertical" size={12}>
        <DatePicker showTime onChange={onChangeexpiry} onOk={onOk} />

      </Space>
    </div>
 

    )
  }
}
class CampaignDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      toggle: false
    }
  }
   onRadioChanged = (e) => {
    console.log('e.target', e.target.value)
    category = e.target.value;
  
    this.setState({
      toggle: this.state.toggle
    });
    console.log("radio", category)
  }

  onoptionChanged = (e) => {
    option = e.target.value;
    console.log("option", option)
    this.setState({
      toggle: !this.state.toggle
    });
  }


  render() {


    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Campaign Category
                            </CardTitle>
                        <br />
                        {/* <select>
                            <option>Regular Campaign</option>
                            <option disabled>Flash Sale Campaign</option>
                          </select>
                           */}
                        <Row >
                          {/* onChange={category=> this.setState({category})} */}
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"
                              value="RegularCampaign" onClick={this.onRadioChanged} checked={category === "RegularCampaign"}   />
  &nbsp; &nbsp;
  <label htmlFor="RegularCampaign">Regular Campaign</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Category" name="Category"checked={category === "FlashSaleCampaign"} 
                              value="FlashSaleCampaign" onClick={this.onRadioChanged} />
  &nbsp; &nbsp;
  <label htmlFor="FlashSaleCampaign">Flash Sale Campaign</label>
                          </Col>




                        </Row>                        </div>

                    </Row>
                  </CardBody>
                </Card>

                <br />

                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase text-mutedcard mb-0 "

                        >
                          Sending Options
                            </CardTitle>
                        <br />
                        <Row>
                          <Col lg="12" xl="6">
                            <input type="radio" id="sendnow" name="sendnow" value="sendnow" checked={option === "sendnow"}   onClick={this.onoptionChanged} />
  &nbsp; &nbsp;<label htmlFor="sendnow">Send Now</label></Col>
                          <Col lg="12" xl="6">
                            <input type="radio" id="Schedule" name="sendnow" value="Schedule" checked={option === "Schedule"}  onClick={this.onoptionChanged} />
  &nbsp; &nbsp;<label htmlFor="Schedule">Schedule</label>
                          </Col>

                        </Row>
                        {category === 'RegularCampaign' && option=== "Schedule"?
                            <Regular 
                              /> :
                              category === 'FlashSaleCampaign' && option=== "Schedule"?
                            <Flash 
                              /> :
                              <div></div>
                          }
                      </div>
                    </Row>
                  </CardBody>
                </Card>
                <br />
                <Card className="card-stats mb-1 mb-xl-1">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                          Subscribers Segment
                            </CardTitle>
                        <br />
                        <span className="h5 font-weight-bold mb-0">
                        </span>
                        <Select style={{ width: '100%' }} placeholder=" Segments you would like to send campaigns to" >

                          <Option value="1">All Subscribers</Option>
                          <Option value="2">Haven't bought in last 90 days</Option>
                          <Option value="3">Anonymous Subscripbers</Option>
                          <Option value="4">Testing Location Segment</Option>
                          <Option value="5">Mac Subscription</Option>
                          <Option value="6">Mac Subscription</Option>

                        </Select>
                      </div>

                    </Row>

                  </CardBody>
                </Card>


              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        
                        <input type="checkbox" id="SmartDelivery" name="SmartDelivery" value="SmartDelivery" disabled/>
  &nbsp; &nbsp;<label for="SmartDelivery" style={{color:'lightgrey'}}>Smart Delivery </label>&nbsp;<Lock
                              size={50}
                              strokeWidth={2.5}
                              color={'blue'}
                            />
                        <h5>personalize the delivery time of your campaign  for each subscriber by sending the notification to them when they are most likely to be active.</h5>

                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", border: 0, width: "35%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <Lock
                              size={50}
                              strokeWidth={2.5}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Premium</span>
                          </div>
                        </button>
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>

            </Row>
          </div>






        </Container>

        {/* </div> */}
      </>
    );
  }
}

   
    
 
var data={}
var title='Enter a Catchy Title';
var messagedata='Enter a Optional Message';
var banner=null;
var logo="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1705/alekseyvanin170501038/77839919-ringing-bell-icon-vector-alarm-solid-logo-illustration-colorful-pictogram-isolated-on-white.jpg";
var  fileList=''
var  logoList=''
var count=0;
class CampaignNotification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category: 'Android',
      title:'Notification title here',
      message:'Notification message here',
     url:'',
     count:0,
     banner:null,
     button1title:'Button1',
     button2title:'Button2',
     visible: false,
     disabled: true,
     bounds: { left: 0, top: 0, bottom: 0, right: 0 },
   
 logo:"https://previews.123rf.com/images/alekseyvanin/alekseyvanin1705/alekseyvanin170501038/77839919-ringing-bell-icon-vector-alarm-solid-logo-illustration-colorful-pictogram-isolated-on-white.jpg"

  
    }
  }
  draggleRef = React.createRef();

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  onStart = (event, uiData) => {
    const { clientWidth, clientHeight } = window?.document?.documentElement;
    const targetRect = this.draggleRef?.current?.getBoundingClientRect();
    this.setState({
      bounds: {
        left: -targetRect?.left + uiData?.x,
        right: clientWidth - (targetRect?.right - uiData?.x),
        top: -targetRect?.top + uiData?.y,
        bottom: clientHeight - (targetRect?.bottom - uiData?.y),
      },
    });
  };

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });

  }
  

 onChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    fileList=newFileList
    if(newFileList[0].status==='done'){
   this.setState({ banner:URL.createObjectURL(newFileList[0].originFileObj)})
    console.log('bannert',banner)}
    else{
      console.log('hello')
    }
};

 onPreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow.document.write(image.outerHTML);
};
onChangelogo = ({ fileList: newFileList }) => {
  console.log(newFileList)
  
  logoList=newFileList
  if(newFileList[0].status==='done'){
 this.setState({ logo:URL.createObjectURL(newFileList[0].originFileObj)})
  console.log('bannert',logo)}
  else{
    console.log('hello')
  }
};

onPreviewlogo = async file => {
let src = file.url;
if (!src) {
  src = await new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
  });
}
const image = new Image();
image.src = src;
const imgWindow = window.open(src);
imgWindow.document.write(image.outerHTML);
};
//  handleAddFields = () => {
//   const values = [...inputFields];
//   values.push({ firstName: '', lastName: '' });
//   setInputFields(values);
// };

//  handleRemoveFields = index => {
//   const values = [...inputFields];
//   values.splice(index, 1);
//   setInputFields(values);
// };
// handleInputChange = (index, event) => {
//   const values = [...inputFields];
//   if (event.target.name === "firstName") {
//     values[index].firstName = event.target.value;
//   } else {
//     values[index].lastName = event.target.value;
//   }

//   setInputFields(values);
// };
uploadbanner=(event)=>{
  console.log(event.target.files[0]);
  this.setState({
      banner:URL.createObjectURL(event.target.files[0])
  })
  console.log("logo",this.state.banner)
}
uploadlogo=(event)=>{
  console.log(event.target.files[0]);
  this.setState({
      logo:URL.createObjectURL(event.target.files[0])
  })
  console.log("logo",this.state.logo)
}
addbutton=()=>{
  this.setState({
    count:1
  })
  this.setState({
    visible: true,
  });
  console.log('count',this.state.count)
}
addbuttonsecond=()=>{
  this.setState({
    count:this.state.count+1
  })
 
  console.log('count',this.state.count)
}
removebutton=()=>{
  this.setState({
    count:this.state.count-1
  })
  console.log('count',this.state.count)
}
handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};
// onsubmit=()=>{
//   const credentials = {email:"mousuleman@gmail.com", password:"15jan1999"};
//     await axiosInstance.login(credentials).then(res => {
//         if(res.status === 200){
//             localStorage.setItem("userInfo", JSON.stringify(res.data));
//             console.log("Login Credentials :",res.data);
        
//         }
//         else  {
         
//             console.log('Username or Password is incorrect, try again!');
//         }
//     });
//   }
// }
handleCancel = e => {
  console.log(e);
  this.setState({
    count:0
  })
  this.setState({
    visible: false,
  });
};
// getResult=(options)=>{
//   this.refs.reactCroppie.result(options).then( res =>{
//     console.log('response',res)
//   });
// }
render() {
  title=this.state.title
  messagedata=this.state.message
  data={
    title:title,
    message:messagedata,
    banner:this.state.banner,
    logo:this.state.logo,
  count:this.state.count,
button1:this.state.button1title,
button2:this.state.button2title} 

    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid style={{position:'relative'}}>
          <div className="header-body" >
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="6" >
                <Card className="card-stats mb-4 mb-xl-0 card" >
                  <CardBody  style={{position:'relative'}}>
                    <Row>
                      <div className="col">
                      <label>Campaign Name</label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                             
                            </InputGroupAddon>
                            <Input placeholder="Enter a Campaign Name" type="text" name='title' onChange={(e)=> this.setState({title:e.target.value})}/>
                          </InputGroup>
                        </FormGroup>
                        <label>Title</label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-ruler-pencil" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Enter a Catchy Title" type="text" name='title' onChange={(e)=> this.setState({title:e.target.value})}/>
                          </InputGroup>
                        </FormGroup>
                        <label>Message </label><label style={{color:'red'}}>*</label>
                        <FormGroup className="mb-3">

                          <Input placeholder="Enter a Optional Title" type="textarea" name='message' onChange={(e)=> this.setState({message:e.target.value})}/>

                        </FormGroup>
                        <label style={{color:'darkgrey'}}>Should be less than 500 characters</label>   </div>
                      <br />

                    </Row>
                    <label>URL </label><label style={{color:'red'}}>*</label>
                    <FormGroup className="mb-3">

                      <Input placeholder="Enter Destinational URL" type="text" name='url' onChange={(e)=> this.setState({url:e.target.value})}/>

                    </FormGroup>
                    <Row>                    <Col xl='6'>
                    <label> Banner</label>  <br />
    
    <ImgCrop rotate>
        <Upload
     
          listType="picture-card"
          fileList={fileList}
          onChange={this.onChange}
          onPreview={this.onPreview}
        >
       {fileList.length < 1 && '+ Upload'}
        </Upload>
      </ImgCrop>
     
                    </Col>
                   
                 <Col xl='6'> <label> Logo</label>
                    
                    <br />
                    <ImgCrop rotate>
      <Upload
   
        listType="picture-card"
        fileList={logoList}
        onChange={this.onChangelogo}
        onPreview={this.onPreviewlogo}
      >
     {logoList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop></Col>
    </Row>

                    {/* <Upload onChange={this.onChangePciture}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload> */}
   {/* <Input placeholder="Choose Logo" type="file" name='logo' onChange={this.uploadlogo}/>  */}

                    {/* <button
                      className=" btn-icon-clipboard "
                      id="tooltip982655500"
                      type="button"
                      style={{ background: "blue", border: 0, width: "100%", padding: 10, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                    >
                      <div> */}
                        {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                        {/* <Lock
                          size={50}
                          strokeWidth={2.5}
                          color={'#ffffff'}
                        />
                        <span style={{ color: "white", fontWeight: 'bold' }}>Upgrade to Unlock</span>
                      </div>
                    </button> */}
                    {/* <label>Banner Image</label>

                    <br />
                    <Input placeholder="Choose Banner Image" type="file" name='banner' onChange={this.uploadbanner}/>

                    <br />
                    <label>Logo</label>

                    <br />
                    <Input placeholder="Choose Logo" type="file" name='logo' onChange={this.uploadlogo}/> */}

                  </CardBody>
                </Card>

              </Col>
              <Col lg="12" xl="6">

                <Card className="card-stats mb-0 mb-xl-0" >
                  <CardBody  >
                    <Row>
                      <div className="col">

                        <span
                          style={{ fontSize: "18px", paddingTop: 10, fontWeight: 'bold' }}
                        >

                          Preview
                            </span>
                        <button
                          className=" btn-icon-clipboard "
                          id="tooltip982655500"
                          type="button"
                          style={{ background: "blue", float: 'right', border: 0, width: "50%", padding: 5, color: 'white', justifyContent: 'center', textAlign: 'center', fontSize: 14, }}
                        >
                          <div>
                            {/* <i className=" ni ni-fat-add" style={{color:"white", fontWeight: -90}}/> */}
                            <InfoSquare
                              size={50}
                              strokeWidth={4}
                              color={'#ffffff'}
                            />
                            <span style={{ color: "white", fontWeight: 'bold' }}>Test Notification</span>
                          </div>
                        </button>

                        <br />
                        <br />
                        <br />
                        <div >
                          {/* <span className="h5 font-weight-bold mb-0" style={{background:'lightgrey',borderRadius:'10%',textAlign:'center'}}>Android</span> */}
                          <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android"   checked={this.state.category === "Android"} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"} onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                          {this.state.category === 'Android' ?
                            <Android data={data}
                              /> :
                            this.state.category === 'Window' ?
                              <Window data={data}/> :
                              this.state.category === 'Mac' ?
                                <Mac data={data}/> :
                                null
                          }
                        </div>
                        <br />

                        <div id='notification'></div>
                      </div>


                    </Row>

                  </CardBody>
                </Card>
    
                <Card className="card-stats mb-0 mb-xl-0" style={{marginTop:8}}>
                  <CardBody  >
             
    <div >
    <Button type="primary" onClick={this.addbutton}>
              Add Button
            </Button>
            </div>
     
            <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (this.state.disabled) {
                  this.setState({
                    disabled: false,
                  });
                }
              }}
              onMouseOut={() => {
                this.setState({
                  disabled: true,
                });
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              Add Button
            </div>
          }
          style={{ right:200,top:30}}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="Discard" danger onClick={this.handleCancel}>
              Discard
            </Button>,
            <Button key="Save" type="primary"  onClick={this.handleOk}>
              Save
            </Button>
          ]}
          modalRender={modal => (
            <Draggable
              disabled={this.state.disabled}
              bounds={this.state.bounds}
              onStart={(event, uiData) => this.onStart(event, uiData)}
            >
              <div ref={this.draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
 

  
   { this.state.count===1?
 
 <div className="form-row">



<h4>Button 1</h4>

<input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button1title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'

// value={inputField.firstName}
style={{marginTop:10}}
/>          


       <div className="form-group col-sm-6"   style={{marginTop:10}}>
       <Button type="primary" onClick={this.addbuttonsecond}>
                 Add Button
               </Button>
     </div>

     </div>
     :
     this.state.count===2?
     <div className="form-row">



     <h4>Button 1</h4>
     <input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button1title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'
// value={inputField.firstName}
style={{marginTop:10}}
/>          

     

    <div className="form-group col-sm-6"   style={{marginTop:10}}>
    <Button type="primary" onClick={this.removebutton}>
                Remove Button
              </Button>
      </div>

      <div className="form-group col-sm-6"   style={{marginTop:10}}>
   
      </div>
        


     <h4>Button 2</h4>

     <input
type="text"
className="form-control"
id="title"
name="title"
placeholder='Title'
onChange={(e)=> this.setState({button2title:e.target.value})}
// value={inputField.firstName}
/>         

<input
type="text"
className="form-control"
id="url"
name="url"
placeholder='URL'
// value={inputField.firstName}
style={{marginTop:10}}
/>          


    <div className="form-group col-sm-6"    style={{marginTop:10}}>
    <Button type="primary" onClick={this.removebutton}>
                Remove Button
              </Button>
      </div>
     


</div>
:
<div></div>
}

     </Modal>

             
 
    </CardBody>
    </Card>
              </Col>
       
             
            </Row>
     
          </div>






        </Container>
        {/* </div> */}
      </>
    );
  }
}
// async componentDidMount() {
//   await axiosInstance.getCampaign().then(response => {
//       this.setState({
//           products:response.data,
//           isLoading: false
//       });
//       console.log('userProfileProducts: ',response)                           
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   console.log(this.state.products)
// }
class Summary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      category:'',


    }
  }
  componentDidMount(){
    this.setState({
      category:window.$user
    })
  }
  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ category: event.target.value });
  }



  render() {
console.log("summary" , this.state.category)



    return (
      <>

        {/* <div className="header pb-8 pt-5 pt-md-8" > */}
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="12" xl="12">
                <Card className="card-stats mb-4 mb-xl-0 card">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                          style={{textAlign:'center'}}
                        >
                          Campaign Summary
                          <Edit
                            size={48}
                            strokeWidth={2}
                            color={'black'}
                          />
                        </CardTitle>
                        <br />
                        <Row>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Type of Campaign</span><br />
                        <span style={{ background: '#DCDCDC',color:'black' }} className="h5 font-weight-bold mb-0"> Regular Campaign</span>
                        </Col>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Sending To</span><br />
                        <span style={{ background: '#DCDCDC' ,color:'black'}} className="h5 font-weight-bold mb-0"> All Subscriber(Subscriber Count 97)</span>
                        </Col>
                        <Col xl='4'>
                        <span className="h5 font-weight-bold mb-0"> Start (Pakistan Standard Time</span><br />
                        <span style={{ background: '#DCDCDC',color:'black' }} className="h5 font-weight-bold mb-0"> Immediately</span>
                        </Col>
                        </Row>
                      </div>

                      
                    </Row>
                  </CardBody>
                </Card>




              </Col>
              </Row>
              <br/>
              <div style={{backgroundColor:'white'}}>
              <br/>
             <p  tag="h3"
                          className="text-uppercase text-mutedcard mb-0"
                          style={{textAlign:'center',fontSize:'16px'}}
                       >Preview Summary</p>
                
               
                       <br/>
              <Row>
              
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                         Android
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                        {this.state.category.android==='ChromeonAndroid'?
                        <AndroidChrome data={data}/> 
                        :
                        this.state.category.android==='FirefoxonAndroid' ?
             <AndroidFirefox data={data}/>:
             this.state.category.android==='OperaonAndroid' ?
             <AndroidOpera data={data}/>
             :
             <div></div>
                      }

                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                        Window 10
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                      {
                        this.state.category.window==='ChromeonWindows10' ?
                        <WindowChrome10   data={data}/>:
                        this.state.category.window==='OperaonWindows10' ?
                        <WindowOpera10   data={data}/>
             :    this.state.category.window==='FirefoxonWindows10' ?
             <Firefox data={data}/> :
             this.state.category.window==='EdgeonWindows10' ?
             <Edge data={data}/>
             :
             <div></div>
                      }
                        
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0" style={{padding:2}}>
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-mutedcard mb-0"
                        >
                         Window 8
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                         {
                        this.state.category.window==='ChromeonWindows10' ?
                        <WindowChrome   data={data}/>:
                        this.state.category.window==='OperaonWindows' ?
                        <WindowOpera   data={data}/>
             :    this.state.category.window==='FirefoxonWindows' ?
             <Firefox data={data}/> :
            
             <WindowChrome data={data}/> 
                      }
                        
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="6">
                <Card className="card-stats mb-0 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className=" text-mutedcard mb-0"
                        >
                     macOS
                            </CardTitle>


                        <br />
                        {/* <div >
                           <Row>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Android" name="sendnow" value="Android" checked={this.state.category === "Android"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Android">Android</label></Col>
                            <Col lg="8" xl="4">
                              <input type="radio" id="Window" name="sendnow" value="Window"  checked={this.state.category === "Window"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Window">Window </label>
                            </Col>

                            <Col lg="8" xl="4">
                              <input type="radio" id="Mac" name="sendnow" value="Mac"  checked={this.state.category === "Mac"}  onChange={this.onoptionChanged} onClick={this.handleChange} />
  &nbsp; &nbsp;<label htmlFor="Mac">Mac </label>
                            </Col>
                          </Row>
                        </div> */}
                    
                    {
                      this.state.category.mac==='SafarionMacOS' ?
                      <MacSafari data={data}/> :
                      this.state.category.mac==='ChromeonMacOS' ?
                      <MacChrome data={data}/> :
                      this.state.category.mac==='FirefoxonMacOS' ?
                      <MacFirefox data={data}/> :
                      this.state.category.mac==='OperaonMacOS' ?
                      <MacOpera data={data}/> :
             <div></div>
                    }
                        {/* {this.state.category === 'Android' ?
                            <AndroidChrome data={data}/> :
                            this.state.category === 'Window' ?
                              <WindowChrome  data={data}/> :
                              this.state.category === 'Mac' ?
                                <MacChrome  data={data}/> :
                                null
                          }  */}
                      </div>
                      {/* </div> */}

                    </Row>

                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </div>
          </div>





        </Container>
        {/* </div> */}
      </>
    );
  }
}

