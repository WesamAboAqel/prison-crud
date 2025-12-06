import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getCases = (request,response,next) => {
    pool.query(Query.getCases, (error,results) => {
        if(error) return next(error);
        request.data.prisonercases = results.rows
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

export const getCase = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getCase, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Case not found' })
        }
        
        request.data.prisonercase = results.rows[0]
        next()
    })
}

export const addCase = (request,response,next) => {
    
    const description = request.body.prisonercase.description
    
        pool.query(Query.addCase, [description], (error,results) => {
        if(error) return next(error);
        request.body.prisoner.prisonercase = results.rows[0].id
        next()
    })
}
 

export const deleteCase = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteCase, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Case Successfully ${id}`})
    })
}

export const updateCase = (request,response,next) => {
    
    const id = parseInt(request.params.id)
    const {description} = request.body.prisonercase;
    pool.query(Query.updateCase, [description,id], (error,results) =>{
        if(error) return next(error);
        next()
    })
}
    
