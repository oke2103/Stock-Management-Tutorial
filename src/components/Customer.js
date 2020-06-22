import React from 'react';

// React에 컴포넌트 라이브러리에는 render라는 함수가 포함되어 있다.
class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile id={this.props.id} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gendder} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default Customer;