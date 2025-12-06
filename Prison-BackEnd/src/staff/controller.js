import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getAllStaff = (request,response,next) => {
    pool.query(Query.getAllStaff, (error,results) => {
        if(error) return next(error);
        request.data.staff = results.rows
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

export const getStaff = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getStaff, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Staff not found' })
        }
        
        request.data.staff = results.rows[0]
        next()
    })
}

export const addStaff = (request,response,next) => {
    
    const {fullname,rank,shift} = request.body.staff
    const facility_id = request.body.facility.id
    const manager_id = request.body.manager.id
        pool.query(Query.addStaff, [fullname,facility_id,rank,shift,manager_id], (error,results) => {
        if(error) return next(error);
        next()
    })
}
 

export const deleteStaff = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteStaff, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Staff Successfully ${id}`})
    })
}

export const updateStaff = (request,response,next) => {
    console.log(request.params)
    const id = parseInt(request.params.id)
    console.log(request.body)
    const {fullname,facility_id,rank,shift,manager_id} = request.body.staff;
    pool.query(Query.updateStaff, [fullname,facility_id,rank,shift,manager_id,id], (error,results) =>{
        if(error) return next(error);
        next()
    })
}
    
