import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getOffences = (request,response,next) => {
    pool.query(Query.getOffences, (error,results) => {
        if(error) return next(error);
        request.data.offences = results.rows
        next()
    })
}

export const getOffence = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getOffence, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Offence not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const addOffence = (request,response,next) => {
    const {prisoner_id, offencetype} = request.body
    
        pool.query(Query.addOffence, [prisoner_id, offencetype], (error,results) => {
        if(error) return next(error);
        response.status(200).json({
            msg: `Added Offence Successfully with the id: ${results.rows[0].id}`,
            inmateoffences_id: results.rows[0].id
        })
    })
}
 

export const deleteOffence = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteOffence, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Offence Successfully ${id}`})
    })
}

export const updateOffence = (request,response,next) => {
    const id = parseInt(request.params.id)
    const {prisoner_id, offencetype} = request.body;
    pool.query(Query.updatePrisoner, [prisoner_id, offencetype,id], (error,results) =>{
        if(error) return next(error);
        return response.status(200).send({msg: `Prisoner with the id: ${id} was updated Successfully`})
    })
}
    
