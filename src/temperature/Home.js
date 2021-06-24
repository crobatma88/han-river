import React from 'react';
import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

	axios.get('http://openapi.seoul.go.kr:8088/697363766963726f37326843487269/json/WPOSInformationTime/1/5/').
	then((response) => {console.log(response.data)});
  }

  handleClick(e) {
    this.props.onModeChange(2);
  }

  render() {
    
    return (
      <div className="Home">
        {/* <img src= {'https://cdn.pixabay.com/photo/2018/08/21/17/26/korea-3621711_960_720.jpg'}/> */}
        <div>수온</div>
        {/* <button class="start_button" onClick={this.handleClick}>테스트 시작하기</button> */}
      </div>
    );
  }
}

export default Home;
