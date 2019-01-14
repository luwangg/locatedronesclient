const getVisibleDrones = (drones,{text,sortBy}) => {
  return (
    drones.filter((drone)=>{      
      const textMatch = text.length === 0 || drone.name.toLowerCase().includes(text.toLowerCase());      
      return textMatch;
    })
    .sort((m1,m2)=>{
      if(sortBy === 'name') {
        return ((m1.name) < (m2.name) ? -1 : 1);
      }
      else 
        return 1;
    })
  );
}

export {getVisibleDrones}
