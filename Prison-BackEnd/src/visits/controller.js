import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getVisits = (request,response,next) => {
    pool.query(Query.getVisits, (error,results) => {
        if(error) return next(error);
        request.data.visits = results.rows
        next()
    })
}

export const initData = (request,response,next) => {
    request.data = {}
    next()
}

export const getVisit = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getVisit, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Visits not found' })
        }
        
        request.data.visit = results.rows[0]
        next()
    })
}

export const addVisit = (request,response,next) => {
    console.log(request.body)
    const {prisoner_id,visitor,staff_id,date,room} = request.body.visit
        pool.query(Query.addVisit, [prisoner_id,visitor,staff_id,date,room], (error,results) => {
        if(error) return next(error);
        next()
    })
}
 

export const deleteVisit = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteVisit, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Visits Successfully ${id}`})
    })
}

export const updateVisit = (request,response,next) => {
    console.log(request.body)
    const id = parseInt(request.params.id)
    const {prisoner_id,visitor,staff_id,date,room} = request.body.visit;
    pool.query(Query.updateVisit, [prisoner_id,visitor,staff_id,id,date,room], (error,results) =>{
        if(error) return next(error);
        next()
    })
}

export const forceEnd = (request,response,next) =>{
    response.status(200).json(request.data)
}
