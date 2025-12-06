import {pool} from '../../db.js'
import {Query} from './queries.js'


export const getRecords = (request,response,next) => {
    pool.query(Query.getRecords, (error,results) => {
        if(error) return next(error);
        request.data.medicalrecords = results.rows
        next()
    })
}

export const getRecord = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.getRecord, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Record not found' })
        }
        response.status(200).json(results.rows[0])
    })
}

export const addRecord = (request,response,next) => {
    const {prison_id,offencetype} = request.body
        pool.query(Query.addRecord, [prison_id,offencetype], (error,results) => {
        if(error) return next(error);
        response.status(200).json({
            msg: `Added a Record Successfully with the id: ${results.rows[0].id}`,
            record_id: results.rows[0].id
        })
    })
}
 
export const deleteRecord = (request,response,next) => {
    const id = parseInt(request.params.id)
    pool.query(Query.deleteRecord, [id], (error, results) => {
        if (error) return next(error);
        return response.status(200).json({msg: `Deleted Record Successfully ${id}`})
    })
}

export const updateRecord = (request,response,next) => {
    const id = parseInt(request.params.id)
    const {prison_id,offencetype} = request.body;
    pool.query(Query.updateRecord, [prison_id,offencetype,id], (error,results) =>{
        if(error) return next(error);
        return response.status(200).send({msg: `Record with the id: ${id} was updated Successfully`})
    })
}
    
