const initialState = {
    news : [
        {
            title : "Kapten Messi Akhirnya Angkat Trofi Copa del Rey " ,
            time  : "detikSport | Minggu, 18 Apr 2021 11:00 WIB"
        } ,
    
        {
             title : "Data Fakta Usai Chelsea Singkirkan Manchester City" ,
             time  : "detikSpor | Minggu, 18 Apr 2021 10:25 WIB "   
        } ,
    
        {
            title : "Guardiola: Chelsea Berkualitas dan Kuat" ,
            time  : "detikSport | Minggu, 18 Apr 2021 10:09 WIB"  
        } ,
    
        {
            title : "30 Gol di 13 Musim Beruntun, Messi Orang atau Alien?" ,
            time  : "detikSport | Minggu, 18 Apr 2021 10:00 WIB "  
        } ,
    
        {
            title : "Man City Kalah, De Bruyne Malah Cedera" ,
            time  : "detikSport | Minggu, 18 Apr 2021 09:40 WIB"  
        } ,
    
        {
            title : "Messi: Buah Kesabaran Barcelona" ,
            time  : "detikSport | Minggu, 18 Apr 2021 09:20 WIB"  
        } ,
    
        {
            title : "Chelsea Sangat Percaya Diri dan Berani" ,
            time  : "detikSport | Minggu, 18 Apr 2021 09:17 WIB "  
        } ,
    
        {
            title : "MotoGP Portugal: Taktik Marquez Bikin Joan Mir Geram" ,
            time  : "detikSport | Minggu, 18 Apr 2021 09:10 WIB"  
        } ,
    
        {
            title : "Getafe Vs Real Madrid: Selain Kiper, Zidane Cuma Bawa 13 Pemain" ,
            time  : "detikSport | Minggu, 18 Apr 2021 09:00 WIB  "  
        } ,
        {
            title : "Timo Werner-Hakim Ziyech yang Makin Padu" ,
            time  : "detikSport | Minggu, 18 Apr 2021 08:30 WIB "  
        } ,
    ]
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case "SEARCH" : 
            let data = state.news.find(value => value.title == action.find)
            let results = [ ]
            results.push({title : data.title , time : data.time})
            return {
                ...state ,
                news : results
            }
            break
        default : 
        return state 
    }
}
export default reducer