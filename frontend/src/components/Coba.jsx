import React, { Component } from 'react'
import $ from 'jquery'

export default class Coba extends Component {

constructor(props){
    super(props)
}

componentDidMount = () =>
{
    $("button").on("click",function(){
        var kakoi = $(this).attr('fieldsnum');
    // var insHTML = '<div class="input-group input-group-sm"><input type="text name="userfile[]" class="form-control"><span class="input-group-btn"><button fieldsnum="1" type="button" class="btn btn-danger btn-flat remove_button"><i class="fa fa-remove"></i></button></span></div>';
    var insHTML = '<div class="input-group input-group-sm"><select ref="tags" className="form-control"><option>--- Please choose the tag(s) ---</option><option>Javascript</option><option>React JS</option><option>Express JS</option><option>Node JS</option><option>React Native</option></select><button fieldsnum="1" className="btn btn-info btn-flat add_button">Add</button></div>';
    
    $('#fields' + kakoi).append(insHTML);
    })
    $('.fields_wrap').on('click', '.remove_button', function(e){
        e.preventDefault();
        $(this).parents(':eq(1)').remove();
    });
    
    // $('button').click(function(e)
    // {
    //     var kakoi = $(this).attr('fldnum');
    //     var insHTML = '<div class="input-group input-group-sm"><input type="text name="userfile[]" class="form-control"><span class="input-group-btn"><button fldnum="1" type="button" class="btn btn-danger btn-flat remove_button"><i class="fa fa-remove"></i></button></span></div>';
    //     $('#fld' + kakoi).append(insHTML);
    // });
    // $('.fld_wrap').on('click', '.remove_button', function(e){
    //     e.preventDefault();
    //     $(this).parents(':eq(1)').remove();
    // });

}
    // state = {
    //     inputValue: '',
    //     fruites: ['Apple', 'Banana', 'Orange']
    //   };

    // onClick = () => {
    // const { inputValue, fruites } = this.state;
    // if (inputValue) {
    //     const nextState = [...fruites, inputValue];
    //     this.setState({ fruites: nextState, inputValue: '' });
    // }
    // }

    // onChange = (e) => this.setState({ inputValue: e.target.value });
  
    // handleItemClick = (e) => {console.log(e.target.innerHTML)}

  render() {
    // const { fruites, inputValue } = this.state;
    // const ListItem = ({ value, onClick }) => (
    //     <li onClick={onClick}>{value}</li>
    //   );
      
    //   const List = ({ items, onItemClick }) => (
    //     <ul>
    //       {
    //         items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    //       }
    //     </ul>
    //   );
      
    return (
      
        <div className="content-wrapper">
            {/* <input type="text" value={inputValue} onChange={this.onChange} /> */}
            <div className="fields_wrap" id="fields1">
            <select ref="tags" className="form-control">
                                                <option>--- Please choose the tag(s) ---</option>
                                                <option>Javascript</option>
                                                <option>React JS</option>
                                                <option>Express JS</option>
                                                <option>Node JS</option>
                                                <option>React Native</option>
                                            </select>    
            <button fieldsnum="1" className="btn btn-info btn-flat add_button">Add</button>
            {/* <List items={fruites} onItemClick={this.handleItemClick} /> */}
            </div>
        </div>
    // <div className="content-wrapper">
    //     <div className="form-group">
    //         <label>file</label>
    //         <div className="fields_wrap" id="fields1">
    //             <div className="input-group input-group-sm">
    //                 <input type="text" name="userfile[]" className="form-control" />
    //                 <span className="input-group-btn">
    //                     <button fieldsnum="1" type="button" className="btn btn-info btn-flat add_button"> <i className="fa fa-plus"></i>
    //                     </button>
    //                 </span>

    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
  }
}



// const ListItem = ({ value, onClick }) => (
//     <li onClick={onClick}>{value}</li>
//   );
  
//   const List = ({ items, onItemClick }) => (
//     <ul>
//       {
//         items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
//       }
//     </ul>
//   );
  

//   class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         inputValue: '',
//         fruites: ['Apple', 'Banana', 'Orange']
//       };
//     }
  
//     onClick = () => {
//       const { inputValue, fruites } = this.state;
//       if (inputValue) {
//         const nextState = [...fruites, inputValue];
//         this.setState({ fruites: nextState, inputValue: '' });
//       }
//     }
  
//     onChange = (e) => this.setState({ inputValue: e.target.value });
  
//     handleItemClick = (e) => {console.log(e.target.innerHTML)}
  
//     render() {
//       const { fruites, inputValue } = this.state;
//       return (
//         <div>
//           <input type="text" value={inputValue} onChange={this.onChange} />
//           <button onClick={this.onClick}>Add</button>
//           <List items={fruites} onItemClick={this.handleItemClick} />
//         </div>
//       );
//     }
//   }
  
  
//   ReactDOM.render(<App />, document.getElementById("root"));