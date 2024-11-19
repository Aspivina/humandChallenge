export const getCharacters = async (params: string)=>{

  console.log(params);
  
  const url = `https://rickandmortyapi.com/api/character/?${params}`

  try {
    const response = await fetch(url);

    const json = await response.json()

    return json
  } catch (error) {

    return error
    
  }

}
