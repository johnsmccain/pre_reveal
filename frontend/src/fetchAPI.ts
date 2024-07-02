export async function fetchDataById(uri:string, id:number) {
    let response;
    try {
        if(id > 0){
            response = await fetch(`${uri}/${id}`);
        }else{
            response = await fetch(`${uri}`);
        }
    if (!response?.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
