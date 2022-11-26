import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiPatient from '../api/pm.api'
import SidebarMedico from '../components/SidebarMedico'

function AcompanhamentoMedicoDetalhe() {
    const { id: acompanhamentoId } = useParams()
    const [acompanhamento, setAcompanhamento] = useState({})
    
    const getAcompanhamentoDetalhe = useCallback(async () => {
        const data = await apiPatient.acompanhamentoDetalhe(acompanhamentoId)
        setAcompanhamento(data)
    }, [acompanhamentoId])

    useEffect(() => {
        getAcompanhamentoDetalhe()
    }, [getAcompanhamentoDetalhe])

    
    return (
        <div className='dash'>
            <SidebarMedico />
            <div className='acompanhamentos'>
                Acompanhamento:
                <div>Weight: {acompanhamento.weight}</div>
                <div>Message: {acompanhamento.messageToDoctor}</div>
                <div>Hip Circumference: {acompanhamento.hipCircumference}</div>
                <div>Abdominal Circumference: {acompanhamento.abdominalCircumference}</div>
                <div>Followed Steps: {acompanhamento.followedSteps}</div>
                <button>DELETE</button>
            </div>
        </div>
    )
}

export default AcompanhamentoMedicoDetalhe