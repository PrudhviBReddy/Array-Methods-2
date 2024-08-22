import './App.css';

function App() {

  let groupOfFriends=["Prudhvi", "Vamshi", "Shiva", "Shashi", "Pranay", "Sridhar", "RajKumar"];


  return (
    <div className="App">
      <h1>Array Methods and Properties</h1> 

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.length);
        console.log(groupOfFriends[2]);
        for(let i=0; i<groupOfFriends.length; i++){
          console.log(groupOfFriends[i]);
        }
      }}>Length</button>

      <button type="button" onClick={()=>{
         for(let i=0; i<groupOfFriends.length; i++){
          console.log(groupOfFriends.at(i));
        }
      }}>Array at</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.toString());
      }}>toString</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.join(" | "))
      }}>join</button>

      <button type="button" onClick={()=>{
        delete groupOfFriends[5];
        console.log(groupOfFriends);
      }}>delete</button>

      <button type="button" onClick={()=>{
        groupOfFriends.pop();
        console.log(groupOfFriends);
      }}>Pop</button>

      <button type="button" onClick={()=>{
        groupOfFriends.shift();
        console.log(groupOfFriends);
      }}>Shift</button>

      <button type="button" onClick={()=>{
        groupOfFriends.push("Reddy");
        console.log(groupOfFriends);
      }}>Push</button>

      <button type="button" onClick={()=>{
        groupOfFriends.unshift();
        console.log(groupOfFriends);
      }}>Unshift</button>

      <button type="button" onClick={()=>{
        groupOfFriends.splice(3,0, "Praveen", "Laxman");
        console.log(groupOfFriends);
      }}>Splice</button>

      <button type="button" onClick={()=>{
         let family = ["Ram", "Shiva"];
         let family2 = ["Vamshi", "Prudhvi"];

         let familyTree = family.concat(family2);
         let familyTree2 = [...family, ...family2]; 

         console.log(family);
         console.log(family2);
         console.log(familyTree);
         console.log(familyTree2)
      }}>Concat</button>

      <button type="button" onClick={()=>{
        let family1 = [["Ram","Sunitha"], "Prudhvi"];
        let family2 = [["Shiva","Akshitha"],["Vamshi","Jyothi"]];
        
        let totalFamily = [family1, family2];

        let totalFamily2 = totalFamily.flat(2);

        console.log(totalFamily);
        console.log(totalFamily2);
      }}>Flat</button>

      <button type="button" onClick={()=>{
        let slicedArr = groupOfFriends.slice(0,3);
        console.log(slicedArr);
      }}>Slice</button>

      <button type="button" onClick={()=>{
        let newArr = groupOfFriends.fill("King", 3,4);
        console.log(newArr);
      }}>Fill</button>

      <button type="button" onClick={()=>{
        console.log(Array.from("PRUDHVI"));
      }}>From</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.includes("Shiva"));
        console.log(groupOfFriends.includes("Rama"));
      }}>Inclides</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.indexOf("Shiva"));
        console.log(groupOfFriends.indexOf("shaun"));
      }}>IndexOf</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends.lastIndexOf("Shiva"));
        console.log(groupOfFriends.lastIndexOf("Prudhvi"));
      }}>LastIndexOf</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends);
        groupOfFriends.reverse();
        console.log(groupOfFriends);
      }}>Reverse</button>

      <button type="button" onClick={()=>{
        console.log(Array.isArray("abc"));
        console.log(Array.isArray(true));
        console.log(Array.isArray(123));
        console.log(Array.isArray([1,2,3]));
      }}>isArray</button>

      <button type="button" onClick={()=>{
        groupOfFriends.forEach(()=>{
          console.log("inside callback fun");

          groupOfFriends.forEach((ele,i)=>{
            console.log(`${i}--->${ele}`);
          });
        });
      }}>ForEach</button>

      <button type="button" onClick={()=>{
        console.log(groupOfFriends);
        console.log(groupOfFriends.copyWithin(2,0));
        console.log(groupOfFriends.copyWithin(2,1));
        console.log(groupOfFriends.copyWithin(2,1,2));
        console.log(groupOfFriends.copyWithin(2,0,2));
        console.log(groupOfFriends.copyWithin(2));
      }}>CopyWithin</button>


    </div>
  );
}

export default App;
