import React from 'react';
import SearchBar from '../../container/Header/SearchBar'



const DisplayFilters = ({ className, allCountry, loadingCountry, research,}) =>{ 
  console.log(allCountry)
  return (

    <div className={`${className}`} > 
      <SearchBar 
        name = "search"
        placeholder = 'selection un nom de recette'
        />
      <div className={`${className}-filter`} >
        <div className= {`${className}-filter--title`}> pays</div>
        {!loadingCountry && allCountry.map((country) => (
          <div key= {country.id} className={`${className}-filter--detail`} onClick={(value) => {research(country.name)}}>   
            <img src={country.picture} className={`${className}-filter--picture`} alt=""/>
           {country.name}
          </div>
        ))
        }
        </div>


    <div className={`${className}-filter`}><div className={`${className}-filter--title`}>journée </div>
      <div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2013/07/12/12/11/croissant-145304_960_720.png" className={`${className}-filter--picture`} alt=""/>
        petite dejeune
        </div>
        <div className={`${className}-filter--detail`}>    
          <img src="https://cdn.pixabay.com/photo/2014/12/21/23/56/pasta-576417_960_720.png" className={`${className}-filter--picture`} alt=""/>
        dejeune
        </div>
        <div className={`${className}-filter--detail`}>    
          <img src="https://cdn.pixabay.com/photo/2013/07/12/19/17/apple-154492_960_720.png" className={`${className}-filter--picture`} alt=""/>
        gouter
        </div>
        <div className={`${className}-filter--detail`}>    
          <img src="https://cdn.pixabay.com/photo/2012/04/01/16/49/soup-23469_960_720.png" className={`${className}-filter--picture`} alt=""/>
        soupé
        </div>
        <div className={`${className}-filter--detail`}>    
          <img src="https://cdn.pixabay.com/photo/2012/04/14/15/37/cheeseburger-34315_960_720.png" className={`${className}-filter--picture`} alt=""/>
        snack
        </div>
    </div>
  
    <div className={`${className}-filter`}><div className={`${className}-filter--title`}>allergie </div>
      <div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png" className={`${className}-filter--picture`} alt=""/>
        vegan
      </div>
      <div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2014/12/21/23/29/salad-575436_960_720.png" className={`${className}-filter--picture`} alt=""/>
        vegetarien
      </div>
      < div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2014/12/21/23/25/bacon-575334_960_720.png" className={`${className}-filter--picture`} alt=""/>
        porc
      </div>
      < div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2013/07/13/11/30/box-158299_960_720.png" className={`${className}-filter--picture`} alt=""/>
        lactose
      </div>
        < div className={`${className}-filter--detail`}>    
        <img src="https://cdn.pixabay.com/photo/2013/07/13/10/26/egg-157224_960_720.png" className={`${className}-filter--picture`} alt=""/>
        oeuf 
      </ div>
    </div>
 </div>

 
  )
}
export default DisplayFilters;
