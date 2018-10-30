import React from 'react';

export default class MyButton extends React.Component{
   componentDidMount(){
       console.log(this.props)
   }
    render(){
        return <div>
             <ul>{
                 this.props.items.map((item,index)=>{
                     return <li key={index}>{item}</li>
                 })
             }</ul>
            <button className='x-mybutton' {...this.props}>
                New Item
        </button>
        </div>
    }
}