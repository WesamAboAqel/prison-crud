import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getAllP2F = (request,response,next) => {
    pool.query(Query.getAllP2F, (error,results) => {
        if(error) return next(error);
        request.data.p2fs = results.rows
        next()
    })
}

export const getP2FP = (request,response,next) => {
    const prisoner_id = parseInt(request.params.prisoner_id)
    
    pool.query(Query.getP2FP, [prisoner_id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'P2F not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const getP2FF = (request,response,next) => {
    const facility_id = parseInt(request.params.id)
    
    pool.query(Query.getP2FF, [facility_id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'P2F not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const addP2F = (request,response,next) => {
    const {prisoner_id,facility_id} = request.body
    
        pool.query(Query.addP2F, [prisoner_id,facility_id], (error,results) => {
        if(error) return next(error);
        response.status(200).json({msg: `Added a P2F Successfully with the following information: ${results.rows[0].prisoner_id, results.rows[0].facility_id }`
        })
    })
}
 
export const deleteP2FP = (request,response,next) => {
    const prisoner_id = parseInt(request.params.id)
    pool.query(Query.deleteP2FP, [prisoner_id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted P2F Successfully ${prisoner_id}`})
    })
}    

export const deleteP2FF = (request,response,next) => {
    const facility_id = parseInt(request.params.id)
    pool.query(Query.deleteP2FF, [facility_id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted P2F Successfully ${facility_id}`})
    })
}