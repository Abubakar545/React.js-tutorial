import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food"
import Card from "./Card"
import Button from "./Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"

function App() {
  const fruits = [{id: 1, name:"Apple", calories:95}, 
                  {id: 2,name:"Orange", calories:145}, 
                  {id: 3,name:"Banana", calories:65}, 
                  {id: 4,name:"Coconut", calories:151}, 
                  {id: 5,name:"Pineapple", calories:30}]
  
  const vegitables = [{id: 6, name:"Tomato", calories:95}, 
                      {id: 7,name:"Potato", calories:145}, 
                      {id: 8,name:"Beetroot", calories:65}, 
                      {id: 9,name:"Carrot", calories:151}, 
                      {id: 10,name:"Broccoli", calories:30}]
return(
  <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegitables.length > 0 && <List items={vegitables} category="Vegitables"/>}
    <hr/>
    <UserGreeting isLoggedIn={true} />
    <hr/>
    <Student name="Abu" age={20} isStudent={false}/>
    <Student/>
    <hr/>
    <Button/>
    <hr/>
    <Header/>
    <Food/>
    <Footer/>
    <hr/>
    <hr/>
    <Card/>
    <Card/>
    <hr/>
  
  </>

)
}

export default App
