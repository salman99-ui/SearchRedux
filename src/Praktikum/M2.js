
import React , {useState , useEffect , useRef} from 'react'
import {useSelector , useDispatch} from 'react-redux' 
import {SEARCH} from '../redux/praktikum/action'
function M2() {
    const Data = useSelector( state => state.news)
    const [ check , setCheck ] = useState(false)
    const ref = useRef('')
    const dispatch = useDispatch()

    const handleclick = (param) => {
        dispatch(SEARCH(param))
        setCheck(!check)
        
        
           
    }
    return (
        
            <div>
                <input type="text" ref={ref} />
                <button onClick={() => handleclick(ref.current.value)}>Search</button>
                {
                    Data.map(({title}) => <p>{title}</p>)
                }
            </div>
     
    )
}

export default M2
