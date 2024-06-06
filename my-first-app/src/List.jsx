import PropTypes from "prop-types"

function List(props){
    const itemLists = props.items;
    const listItems = itemLists.map((itemLists)=> <li key={itemLists.id}>
                                           {itemLists.name}: &nbsp; 
                                           <b>{itemLists.calories}</b></li>)

    return(
        <>
        <h2 className="list-category">{props.category}</h2>
        <ol className="vegitable-list">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number }))
}

// List.defaultProps = {
//     category : "Category",
//     items : [],
// }

export default List








    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical Order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Alphabetical Order
    // fruits.sort((a, b) => a.calories - b.calories)      // Accending Numerical order 
    // fruits.sort((a, b)=> b.calories - a.calories)       // Decending Numberical order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)