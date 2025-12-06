import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getFacilities = (request,response,next) => {
    pool.query(Query.getFacilities, (error,results) => {
        if(error) return next(error);
        request.data.facilities = results.rows
        next()
    })
}

export const forceEnd = (request,response,next) =>{
    response.status(200).json(request.data)
}

export const initData = (request,response,next) => {
    request.data = {}
    next()
}

export const getFacility = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.getFacility, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Facility not found' })
        }
        request.data.facility = results.rows[0]
        next()
    })
}

export const addFacility = (request,response,next) => {
    
    const {name,location,state,capacity,type,manager_id} = request.body.facility
    
        pool.query(Query.addFacility, [name,manager_id,location,state,capacity,type], (error,results) => {
        if(error) return next(error);
        request.body.facility.id = parseInt(results.rows[0].id)
        next()
        })
}

 

export const deleteFacility = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteFacility, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Facility Successfully ID: ${id}`})
    })
}

export const updateFacility = (request,response,next) => {
    const id = parseInt(request.params.id)
    const {name,location,state,capacity,manager_id,type} = request.body.facility;
    pool.query(Query.updateFacility, [name,manager_id,location,state,capacity,id,type], (error,results) =>{
        if(error) return next(error);
        next()
    })
}
    
