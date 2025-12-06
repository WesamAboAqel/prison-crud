import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getAllS2F = (request,response,next) => {
    pool.query(Query.getAllS2F, (error,results) => {
        if(error) return next(error);
        request.data.s2fs = results.rows
        next()
    })
}

export const getS2FS = (request,response,next) => {
    const staff_id = parseInt(request.params.staff_id)
    
    pool.query(Query.getS2FS, [staff_id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'S2F not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const getS2FF = (request,response,next) => {
    const facility_id = parseInt(request.params.id)
    
    pool.query(Query.getS2FF, [facility_id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'S2F not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const addS2F = (request,response,next) => {
    const {staff_id,facility_id} = request.body
    
        pool.query(Query.addS2F, [staff_id,facility_id], (error,results) => {
        if(error) return next(error);
        response.status(200).json({msg: `Added a S2F Successfully with the following information: ${results.rows[0].staff_id, results.rows[0].facility_id }`
        })
    })
}
 
export const deleteS2FS = (request,response,next) => {
    const staff_id = parseInt(request.params.id)
    pool.query(Query.deleteS2FS, [staff_id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted S2F Successfully ${staff_id}`})
    })
}    

export const deleteS2FF = (request,response,next) => {
    const facility_id = parseInt(request.params.id)
    pool.query(Query.deleteS2FF, [facility_id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted S2F Successfully ${facility_id}`})
    })
}