import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getManagers = (request,response,next) => {
    pool.query(Query.getManagers, (error,results) => {
        if(error) return next(error)
        request.data.managers = results.rows
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

export const getManager = (request,response,next) => {
    
    const id = parseInt(request.params.id)
    
    pool.query(Query.getManager, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Manager not found' })
        }
        
        request.data.manager = results.rows[0]
        next()
    })
}

export const addManager = (request,response,next) => {
    // console.log(request.body)
    const {name, staff_count,facility_id,address,phonenumber} = request.body.manager
        pool.query(Query.addManager, [name, staff_count, facility_id,address,phonenumber], (error,results) => {
        if(error) return next(error)
        request.body.manager.id = parseInt(results.rows[0].id)
        next()
    })
}
 

export const deleteManager = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteManager, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Manager Successfully ${id}`})
    })
}

export const updateManager = (request,response,next) => {
    console.log(request.body)
    const id = parseInt(request.body.manager.id)
    const {name, staff_count,address,phonenumber} = request.body.manager;
    const facility_id = parseInt(request.body.manager.facility_id)
    pool.query(Query.updateManager, [name,staff_count,facility_id,id,address,phonenumber], (error,results) =>{
        if(error) return next(error);
        next()
    })
}
    
