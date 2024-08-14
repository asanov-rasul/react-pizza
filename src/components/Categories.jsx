import React, { Component } from 'react'

// export class Categories extends Component {
//   state = {
//     activeItem: 0
//   };

//   onSelectItem = (key) => {
//     this.setState({
//       activeItem: key
//     });
//     this.forceUpdate();
//   }


//   render() {
//     const {items, onClickItem} = this.props;
//     return (
//       <div className="categories">
//           <ul>
//             <li>Все</li>
//             {items.map((el, key) => 
//               <li className={this.state.activeItem === key ? 'active' : ''} onClick={() => onClickItem(el)} key={`${el}_${key}`}>{el}</li>
//             )}
//           </ul>
//       </div>
//     )
//   }
// }


function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (key) => {
    setActiveItem(key);
  };


  return (
    <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
          {items && items.map((el, key) => 
            <li className={activeItem === key ? 'active' : ''} onClick={() => onSelectItem(key)} key={`${el}_${key}`}>{el}</li>
          )}
        </ul>
    </div>
  )
}

export default Categories