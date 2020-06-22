import React from 'react';

// React에 컴포넌트 라이브러리에는 render라는 함수가 포함되어 있다.
class Customer extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;