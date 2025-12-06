import {pool} from '../../db.js'
import {Query} from './queries.js'
import { addVisit, deleteVisit, getVisit, getVisits, updateVisit} from '../visits/controller.js';
import { addVisitor, deleteVisitor, getVisitor, getVisitors, updateVisitor} from '../visitors/controller.js';
import { addStaff, deleteStaff, getStaff, getAllStaff, updateStaff} from '../staff/controller.js';
import { addS2F, deleteS2FS, deleteS2FF, getAllS2F, getS2FS, getS2FF} from '../S2F/controller.js';
import { addRecord, deleteRecord, getRecord, getRecords, updateRecord} from '../records/controller.js';
import { addPrisoner, deletePrisoner, getPrisoner, getPrisoners, updatePrisoner} from '../prisoners/controller.js';
import { addCase, deleteCase, getCase, getCases, updateCase} from '../PrisonerCases/controller.js';
import { addP2F, deleteP2FP, deleteP2FF, getAllP2F, getP2FP, getP2FF,} from '../P2F/controller.js';
import { addOffence, deleteOffence, getOffence, getOffences, updateOffence} from '../offences/controller.js';
import { addManager, deleteManager, getManager, getManagers, updateManager } from '../managers/controller.js';
import { addFacility, deleteFacility, getFacility, getFacilities, updateFacility} from '../facilities/controller.js';

export const outputResponse = (request,response,next) => {
    
    response.status(200).json(request.data)
}

export const initData = (request,response,next) => {
    request.data = {}
    next()
}
export const forceEnd = (request,response,next) =>{
    response.status(200).json(request.data)
}

export const getShifts = (request,response,next) =>{
    pool.query(Query.getShifts, (error,results) => {
        if(error) return next(error);
        request.data.shifts = results.rows
        next()
        }
    )
}



export const getShift = (request,response,next) => {
    const id = request.params.id
    pool.query(Query.getShift, [id], (error,results) => {
        if(error) return next(error);
        if (results.rows.length === 0){
            response.status(404).json({ error: 'Facility not found' })
        }
        
        request.data.shift = results.rows[0]
        next()
    })
}

export const dataLog = (request,response,next) => {
    console.log(request.data)
    next()
}

export const bodyLog = (request,response,next) => {
    console.log(request.body)
    next()
}

    
