import React, {useEffect} from 'react';

function NameItem({ name, setActiveName, activeName }) {

 useEffect(() => {
     if (name === activeName){
         console.log(`${name} wil graag een biertje bestellen`)
     }
 }, [name, activeName])

    return (
    <li>
      <h3>{name}</h3>
      <button
          onClick={() =>setActiveName(name)}
          type="button">
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;