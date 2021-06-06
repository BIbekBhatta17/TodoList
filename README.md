

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.







Hi, I hope you are great.  I have created some basic Todo app using react. if you are interested on react, you should walk on my code. Lets walk on my code. 😉

Firstly, i created some js component including Header, Footer, MyData, MyValue,Contact, AddMyData and About.

First we re going to inside the Header component.
In Header Component, i have wrapped the image, ul-li tag inside the div and also in order to some styling at our header, i 've decleared the class named ->'Header'. Inside our css of the Header, i flexed out all    all child tag (i.e img,ul-li) horizontally so that our header looks attactive.

 Inside the App component. 
   In react, App component is one of the base level  component. In order to render our newly designed header component i have  decleared it inside the return function. 
   The declearation looks like {<Header/>}.
   But react expects to import it at the header section of the components.
   Also, I decleared some banch of component as following
   1) MyDatas
   2) AddMyData
   3)Footer
   
   I passed some data to the MyData component.
   Further, MyDatas components passes the data one by one  usnig the map loop function  to the MyValue component  in order to  render the data individually.


  Inside the Add Data component, i passed the value we entered at the form to the parent component to do insertion at   our main data array named localData.


  Finally, after all works done i imported  react routing DOM from here->https://reactrouter.com/web/guides/quick-start and i included it to my project for routing without any refreshing navigation. 
  
  
  To install  React routing DOM
   `npm install react-router-dom`

  
  
  Thank you😁😁
  


Project looks like this 

  
  
  <img width="1680" alt="Screen Shot 2021-06-06 at 19 58 46" src="https://user-images.githubusercontent.com/85444897/120927819-ed982d00-c701-11eb-831e-fb22bea6aee0.png">











