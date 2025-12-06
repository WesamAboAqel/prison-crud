import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getPrisoners = (request,response,next) => {
    pool.query(Query.getPrisoners, (error,results) => {
        if(error) return next(error);
        request.data.prisoners = results.rows
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

export const getPrisoner = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getPrisoner, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Prisoner not found' })
        }
        
        request.data.prisoner = results.rows[0]
        next()
    })
}

export const addPrisoner = (request,response,next) => {
    
    const {fullname,nationality,gender,dob,location} = request.body.prisoner;
    const prisonercase = request.body.prisonercase.id;

        pool.query(Query.addPrisoner, [fullname,prisonercase,nationality,gender,dob,location], (error,results) => {
        if(error) return next(error);
        request.body.prisoner.id = parseInt(results.rows[0].id)
        next()
        })
    }

 

export const deletePrisoner = (request,response,next) => {
    console.log(request.params)
    const id = parseInt(request.params.id)
    pool.query(Query.deletePrisoner, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Prisoner Successfully ${id}`})
    })
}

export const updatePrisoner = (request,response,next) => {
    
    const id = parseInt(request.params.id) || request.body.prisoner.id
    const {fullname,nationality,gender,dob,location} = request.body.prisoner;
    const prisonercase = parseInt(request.body.prisoner.prisonercase);
    pool.query(Query.updatePrisoner, [fullname,prisonercase,nationality,gender,dob,location,id], (error,results) =>{
        if(error) return next(error);
        next()
    })
}
    
