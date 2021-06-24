import React from 'react';
import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatrue: 0
    };
    this.handleClick = this.handleClick.bind(this);


  }

  handleClick(e) {
    this.props.onModeChange(2);
  }

  render() {

    axios.get('http://openapi.seoul.go.kr:8088/697363766963726f37326843487269/json/WPOSInformationTime/1/5/').
    then((response) => {
      console.log(response.data);
      this.setState({ temperatrue: response.data.WPOSInformationTime.row[0].W_TEMP });
    });
    
    return (
      <div className="Home">
        <div className="BackGroundImg"></div>
        <div className ="Center"> 
        {/* <img src= {'https://cdn.pixabay.com/photo/2018/08/21/17/26/korea-3621711_960_720.jpg'}/> */}
        <div className='current'>현재 한강 수온</div>
        <div className='msg'>"사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다" – 생떽쥐베리</div>
        <div className='temp_detail'>현재 한강의 수온은 {this.state.temperatrue}°C입니다.</div>
        
        {/* <button class="start_button" onClick={this.handleClick}>테스트 시작하기</button> */}
        </div>
        <div className="info">본 사이트는 서울 데이터 광장의 Open Api로 만들어졌습니다. Made by 빵빵아빠</div>
      </div>
    );
  }
}

export default Home;
