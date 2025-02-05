import React,{COMPONENTS} from 'react';
class CBCPropsex1 extends COMPONENTS{
    render (){
        console.log(this);
        return (
            <div>CBCPropsex1

                <h1>{this.props.useranme}</h1>
                <h1>
                    {this.props.age}
                </h1>
                <div>
                    <h2>{this.props.userDetails.area}</h2>
                    <button onClick={this.props.sendFun}>click on button</button>
                </div>
            </div>
        )

    }
}
export default CBCPropsex1;