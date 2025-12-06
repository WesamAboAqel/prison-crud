import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getVisitors = (request,response,next) => {
    pool.query(Query.getVisitors, (error,results) => {
        if(error) return next(error);
        request.data.visitors = results.rows
        next()
    })
}

export const getVisitor = (request,response,next) => {
    const id = parseInt(request.params.id)
    
    pool.query(Query.getVisitor, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Visitor not found' })
        }
        
        response.status(200).json(results.rows[0])
    })
}

export const addVisitor = (request,response,next) => {
    const {fullname} = request.body
        pool.query(Query.addVisitor, [fullname], (error,results) => {
        if(error) return next(error);
        response.status(200).json({
            msg: `Added a Visitor Successfully with the id: ${results.rows[0].id}`,
            visitors_id: results.rows[0].id

        })
    })
}
 

export const deleteVisitor = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteVisitor, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Visitor Successfully ${id}`})
    })
}

export const updateVisitor = (request,response,next) => {
    const id = parseInt(request.params.id)
    const {fullname} = request.body;
    pool.query(Query.updateVisitor, [fullname,id], (error,results) =>{
        if(error) return next(error);
        return response.status(200).send({msg: `Visitor with the id: ${id} was updated Successfully`})
    })
}
    
