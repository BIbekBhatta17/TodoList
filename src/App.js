import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import MyDatas from './MyDatas';
import AddMyData from './AddMyData'
import About from './About';
import {Footer} from './Footer'
import Contact from './Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
 
   let localData=([]);
   if(localStorage.getItem("MyLocalData")==null)
   {
     localData=[];
   }
   else{
     localData = JSON.parse(localStorage.getItem("MyLocalData"));
   }



  const onDelete = (delData) => {
    setMyData(MyData.filter((e) => {
      return e !== delData;
    }))
    localStorage.setItem("MyLocalData",JSON.stringify(MyData));

  }
  const addData = (id, name, desc) => {
    let MyNewdata = {
      id: id,
      name: name,
      desc: desc

    }
    if (id == null || name == null || desc == null) {
      alert("Already Entry")
    }
    else { setMyData([...MyData, MyNewdata]); }
  }
  const [MyData, setMyData] =useState(localData);


  useEffect(()=>{
   localStorage.setItem("MyLocalData",JSON.stringify(MyData));

  },[MyData])
  return (
    <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/Home" render={() => {
          return (
            <>
              <AddMyData passvalue={addData} />
              <MyDatas datafile={MyData} onDeleteFunc={onDelete} />
            </>)
        }}>
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>

        <div>
        </div>
      </Switch>
    </Router>
 <Footer/>
    </div>
  )
}
export default App;
